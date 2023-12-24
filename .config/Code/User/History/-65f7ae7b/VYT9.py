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


for parameters in dirichletsymmetricparams():
    for transform in tqdm(list_transforms()):
        complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
        pkey=param_map[tuple(list(parameters.values())[0])]
        fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"
        true_var = parameters['alpha']/sum(paramters['alpha'])
        try:
            idata = az.from_netcdf(fstr(x="samples", fileformat="nc"))
            rmse(idata, 'x', 0, true_var).to_csv(fstr(x="rmse", fileformat="csv"))


        except:
            print(f' no sampler data for parametrization {parameters} and transform {transform}')

