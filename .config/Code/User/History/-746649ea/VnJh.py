import numpy as np
import pandas as pd
import arviz as az
import pickle
import json
import os
import sys
from tqdm import tqdm
from utils import *

evaluating_model='DirichletSymmetric'
n_repeat=100
output_dir='/mnt/home/mjhajaria/ceph/sampling_results/simplex'


with open(f"target_densities/param_map_{evaluating_model}.pkl", "rb") as f:
    param_map = pickle.load(f)


parameters = dirichletsymmetricparams()[0]
transform = (list_transforms())[0]
complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
pkey=param_map[tuple(list(parameters.values())[0])]
fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"
true_var = np.asarray(parameters['alpha'])/sum(parameters['alpha'])
idata = az.from_netcdf(fstr(x="samples", fileformat="nc"))
np.savetxt(rmse(idata, 'x', 0, true_var), fstr(x="rmse", fileformat="txt"))
