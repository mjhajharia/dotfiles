import pandas as pd
import numpy as np
import os
import time
import json
import sys
import pickle
from cmdstanpy import CmdStanModel
import argparse
import arviz as az
from pathlib import Path
from tqdm import tqdm
from pathlib import Path
from scipy.stats import norm, entropy


# import logging
# logger = logging.getLogger('cmdstanpy')
# logger.addHandler(logging.NullHandler())
def list_transforms():
    return ['Stickbreaking', 'ALR', 'AugmentedSoftmax', 'StanStickbreaking', 
    'AugmentedILR', 'HypersphericalAngular', 'HypersphericalLogit',
    'HypersphericalProbit', 'ProbitProduct']

def transforms_labels():
    return {'Stickbreaking': 'Stick-breaking',
                    'ALR': 'Additive Log Ratio',
                    'AugmentedSoftmax': 'Augmented-Softmax',
                    'StanStickbreaking': 'Stick-breaking (in C++)',
                    'AugmentedILR'  : 'Augmented-Isometric Log Ratio',
                    'HypersphericalProbit': 'Hyperspherical - Probit',
                    'HypersphericalAngular': 'Hyperspherical-Angular',
                    'HypersphericalLogit': 'Hyperspherical-Logit',
                    'ProbitProduct': 'Probit Product',
                    }


def dirichletsymmetricparams():
    return [{'alpha':[0.1]*10, 'N':10}, {'alpha':[0.1]*100, 'N':100}, {'alpha': [0.1]*1000, 'N': 1000},
                    {'alpha':[1]*10, 'N':10}, {'alpha':[1]*100, 'N':100},  {'alpha': [1]*1000, 'N': 1000},
                    {'alpha':[10]*10, 'N':10}, {'alpha':[10]*100, 'N':100},  {'alpha': [10]*1000, 'N': 1000}]

def get_kl_divergence(draws, n_iter):
    l = draws.draws_pd()[['x[1]']].values[:n_iter]
    rv = norm()
    r = norm.rvs(size=n_iter)
    return entropy(l, r)[0]

def rmsefunc(y_true, y_pred):
    return np.sqrt(np.mean((y_true - y_pred) ** 2))

def cumulative_mean(x):
    return np.divide(np.cumsum(x), np.arange(1, len(x) + 1))

def getrmse(idata, var_name, var_dim, alpha):
    true_var = [a/sum(alpha) for a in alpha]
    pred_var = cumulative_mean(np.mean(idata.posterior[str(var_name)].sel(x_dim_0=var_dim), axis=0))
    rmse_array = []
    for i in range(1, len(pred_var) + 1):
        rmse_array.append(rmsefunc(true_var[var_dim], pred_var[:i]))
    return np.asarray(rmse_array)

def getleapfrog(idata):
    return np.cumsum(np.mean(idata.sample_stats.n_steps, axis=0))

def sample(
    transform,
    evaluating_model,
    parameters,
    output_dir,
    n_repeat,
    auto_eval_all_params=False,
    n_iter=1000,
    n_chains=4,
    show_progress=True,
    resample=False,
    return_idata=True,
    inits=None
):
    """
    Sample from the given dictionary containing the models, transform_categories, and parameters.
    It saves the results in a json file which is named with n_chains.

    Parameters
    ----------
    transform: str
        The transform name to use.

    evaluating_model: str
        The model to use.

    parameters: list of dict
        List of Dictionaries containing the parameters to use.
        e.g. parameters = [{'alpha': [0.1]*10, 'N': 10}, {'alpha': [0.1]*20, 'N': 20}]

    output_file: str
        Custom filename.

    auto_eval_all_params: bool
        If True, all parameterizations are evaluated.

    n_iter : int
        Number of samples to be drawn.

    n_chains : int
        Number of chains to be drawn.
    
    n_repeat : int 
        Number of runs to be drawn.

    show_progress: bool (default = True)
        Whether to show progress bar.

    retrieve: bool (default = False)
        Whether to retrieve the results from the json file.

    resample: bool (default = False)
        Whether to resample the data.

    return_idata: bool (default = True)
        Whether to return the idata.
    
    

    Note
    ----
    The directory structure for storing stan files is: stan_models/{transform}_{evaluating_model}.stan
    The directory structure for storing the results is: sampling_results/{transform_category}/{transform}/{evaluating_model}/{param_number}_{n_repeat}.nc

    param_number is obtained from the param_map.pkl file. It is a dictionary with keys as the parameterization and values as the param_number.
    """
    with open(f"target_densities/param_map_{evaluating_model}.pkl", "rb") as f:
        param_map = pickle.load(f)

    pkey=param_map[tuple(list(parameters.values())[0])]
    stan_filename=f'stan_models/{transform}_{evaluating_model}.stan'

    start_time = time.time()

    Path("stan_models").mkdir(parents=True, exist_ok=True)

    with open(stan_filename, 'w') as f:
        f.write(f'#include ../target_densities/{evaluating_model}.stan{os.linesep}#include ../transforms/{transform}.stan{os.linesep}')
        f.close()

    model = CmdStanModel(
        stan_file=stan_filename, cpp_options={"STAN_THREADS": "true"})
    
    ess=[]
    idata = az.from_cmdstanpy(
        model.sample(
            data=parameters,
            show_progress=show_progress,
            iter_sampling=n_iter,
            chains=n_chains,
            inits=inits,
            show_console=True
        )
    )
    ess.append(list(az.ess(idata.sel(x_dim_0=0), var_names=['x']).values())[0].item())
    for i in tqdm(range(n_repeat - 1)):
        fit = model.sample(
            data=parameters,
            show_progress=show_progress,
            iter_sampling=n_iter,
            chains=n_chains,
            seed=i,
            inits=inits,
            show_console=True
        )
        ess.append(list(az.ess(fit.sel(x_dim_0=0), var_names=['x']).values())[0].item())

        idata = az.concat(idata, az.from_cmdstanpy(fit), dim="chain")
    
    complete_output_dir=f'{output_dir}/sampling_results/{transform}/{evaluating_model}/'
    Path(f'{complete_output_dir}').mkdir(parents=True, exist_ok=True)

    idata.to_netcdf(f'{complete_output_dir}{pkey}_{n_repeat}.nc')

    with open(f'{complete_output_dir}time_{pkey}_{n_repeat}.txt', 'w') as f:
        f.write(str(time.time() - start_time))

    az.summary(idata).to_csv(f'{output_dir}/summary/{transform}_{pkey}_{n_repeat}.csv')

    idata.sample_stats.n_steps.to_pandas().to_csv(f'{output_dir}/sample_stats/leapfrog_{transform}_{pkey}_{n_repeat}.csv')

    np.savetxt(f'{output_dir}/sample_stats/ess_{transform}_{pkey}_{n_repeat}.csv',np.asarray(ess),delimiter =", ")
    
    if return_idata==True:
        return idata