    stan_filename=f'stan_models/{transform}_{evaluating_model}.stan'
    Path("stan_models").mkdir(parents=True, exist_ok=True)

    with open(stan_filename, 'w') as f:
        f.write(f'#include ../target_densities/{evaluating_model}.stan{os.linesep}#include ../transforms/{transform_category}/{transform}.stan{os.linesep}')
        f.close()


           complete_output_dir=f'{output_dir}/{transform}/{evaluating_model}'
    Path(f'{complete_output_dir}').mkdir(parents=True, exist_ok=True)
    fstr = lambda *, x, fileformat: f"{complete_output_dir}/{x}_{pkey}_{n_repeat}.{fileformat}"

    az.summary(idata).to_csv(fstr(x="summary", fileformat="csv"))

    idata.sample_stats.n_steps.to_pandas().to_csv(fstr(x="leapfrog", fileformat="csv"))

    np.savetxt(fstr(x="ess", fileformat="txt"), np.asarray(ess), delimiter =", ")
    

            # ess.append(list(az.ess(fit.sel(x_dim_0=0), var_names=['x']).values())[0].item())
    # ess.append(list(az.ess(idata).values())[0].item())
