PCA_, ZCA_, cholesky_ = whitening_transforms(unconstrained_draws);
PCA_nc, ZCA_nc, cholesky_nc = whitening_transforms(unconstrained_draws_nc);

hessian_df_cholesky = get_hessian_info(bs_model, cholesky_, unconstrained_draws);
hessian_df_ZCA = get_hessian_info(bs_model, ZCA_, unconstrained_draws);
hessian_df_PCA = get_hessian_info(bs_model, PCA_, unconstrained_draws);

hessian_df_cholesky_nc = get_hessian_info(bs_model, cholesky_nc, unconstrained_draws_nc);
hessian_df_ZCA_nc = get_hessian_info(bs_model, ZCA_nc, unconstrained_draws_nc);
hessian_df_PCA_nc= get_hessian_info(bs_model, PCA_nc, unconstrained_draws_nc);

CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/cholesky.csv"), hessian_df_cholesky);
CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/cholesky_nc.csv"), hessian_df_cholesky_nc);
CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/ZCA.csv"), hessian_df_ZCA);
CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/ZCA_nc.csv"), hessian_df_ZCA_nc);
CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/PCA.csv"), hessian_df_PCA);
CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/PCA_nc.csv"), hessian_df_PCA_nc);

hessian_df_cholesky=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/cholesky.csv"), DataFrame);
hessian_df_cholesky_nc=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/cholesky_nc.csv"), DataFrame);
hessian_df_ZCA=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/ZCA.csv"), DataFrame);
hessian_df_ZCA_nc=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/ZCA_nc.csv"),DataFrame );
hessian_df_PCA=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/PCA.csv"), DataFrame);
hessian_df_PCA_nc=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/eightschools/PCA_nc.csv"), DataFrame);

hessian_df = hessian_df_cholesky
hessian_df_nc = hessian_df_cholesky_nc

CN_Hessian_nc = log.(hessian_df_cholesky_nc[!, "CN_Hessian"]);
CN_Hessian_cholesky = log.(hessian_df_cholesky[!, "CN_Transformed_Hessian"]);
CN_Hessian_cholesky_nc = log.(hessian_df_cholesky_nc[!, "CN_Transformed_Hessian"]);

CN_Hessian_PCA = log.(hessian_df_PCA[!, "CN_Transformed_Hessian"]);
CN_Hessian_PCA_nc = log.(hessian_df_PCA_nc[!, "CN_Transformed_Hessian"]);

CN_Hessian_ZCA = log.(hessian_df_nc[!, "CN_Transformed_Hessian"]);
CN_Hessian_ZCA_nc = log.(hessian_df_ZCA_nc[!, "CN_Transformed_Hessian"]);

theta0_nc = unconstrained_draws_nc[:, 1]
logtau_nc = unconstrained_draws_nc[:, end]
CN_Hessian = log.(hessian_df_cholesky[!, "CN_Hessian"]);
CN_Hessian_cholesky = log.(hessian_df_cholesky[!, "CN_Transformed_Hessian"]);
theta0 = unconstrained_draws[:, 1]
logtau = unconstrained_draws[:, end]