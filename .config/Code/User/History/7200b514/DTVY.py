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

def sample(
    transform_category,
    transform,
    evaluating_model,
    data,
    output_file_name,
    n_repeat,
    n_iter=1000,
    n_chains=4,
    show_progress=True,
    resample=False,
    return_idata=False,
    inits=None
):
    """
    Sample from the given dictionary containing the models, transform_categories, and parameters.
    It saves the results in a json file which is named with n_chains.

    Parameters
    ----------
    transform_category: str
        The transform category to use.

    transform: str
        The transform name to use.

    evaluating_model: str
        The model to use.

    data: dict
        Dictionary of data for CmdStanPy Model. 

    output_file_name: str
        Custom filename to save the results.

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
    """
    stan_filename=f'stan_models/{transform}_{evaluating_model}.stan'
    Path("stan_models").mkdir(parents=True, exist_ok=True)
    start_time = time.time()

    with open(stan_filename, 'w') as f:
        f.write(f'#include ../target_densities/{evaluating_model}.stan{os.linesep}#include ../transforms/{transform_category}/{transform}.stan{os.linesep}')
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
        fit = az.from_cmdstanpy(model.sample(
            data=parameters,
            show_progress=show_progress,
            iter_sampling=n_iter,
            chains=n_chains,
            seed=i,
            inits=inits,
            show_console=True
        ))
        ess.append(list(az.ess(fit.sel(x_dim_0=0), var_names=['x']).values())[0].item())

        idata = az.concat(idata, fit, dim="chain")
    
    complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
    Path(f'{complete_output_dir}').mkdir(parents=True, exist_ok=True)
    fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"


    idata.to_netcdf(fstr(x="samples", fileformat="nc"))

    with open(fstr(x="time", fileformat="txt"), 'w') as f:
        f.write(str(time.time() - start_time))

    az.summary(idata).to_csv(fstr(x="summary", fileformat="csv"))

    idata.sample_stats.n_steps.to_pandas().to_csv(fstr(x="leapfrog", fileformat="csv"))

    np.savetxt(fstr(x="ess", fileformat="txt"), np.asarray(ess), delimiter =", ")
    
    if return_idata==True:
        return idata