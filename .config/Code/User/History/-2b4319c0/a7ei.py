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


for parameters in [dirichletsymmetricparams()[x] for x in (3)]:
	for transform in tqdm(list_transforms()):
		complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
		pkey=param_map[tuple(list(parameters.values())[0])]
		fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"
		idata = az.from_netcdf(fstr(x="samples", fileformat="nc"))
		ess=[]
		for k in tqdm(range(100)):
			ess.append(list(az.ess(idata.sel(chain=[k*4, k*4+1, k*4+2, k*4+3], x_dim_0=0), var_names=['x']).values())[0].item())

		idata.sample_stats.n_steps.to_pandas().to_csv(fstr(x="leapfrog", fileformat="csv"))
		np.savetxt(fstr(x="ess", fileformat="txt"), np.asarray(ess), delimiter =", ")
		

def get_summ(transform, parameters, output_dir, evaluating_model, n_repeat):
	complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
	pkey=param_map[tuple(list(parameters.values())[0])]
	fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"
	idata = az.from_netcdf(fstr(x="samples", fileformat="nc"))
	ess=[]
	for k in tqdm(range(100)):
		ess.append(list(az.ess(idata.sel(chain=[k*4, k*4+1, k*4+2, k*4+3], x_dim_0=0), var_names=['x']).values())[0].item())

	idata.sample_stats.n_steps.to_pandas().to_csv(fstr(x="leapfrog", fileformat="csv"))
	np.savetxt(fstr(x="ess", fileformat="txt"), np.asarray(ess), delimiter =", ")