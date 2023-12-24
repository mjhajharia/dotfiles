using Revise, DynamicHMC, PosteriorDB, Random, StanLogDensityProblems, JSON, BridgeStan, DataFrames, LinearAlgebra, StatsBase, Distributions
using Plots, ColorSchemes, LaTeXStrings, Statistics, CSV
Plots.theme(:default)
const BS = BridgeStan;

pdb = PosteriorDB.database()
model = PosteriorDB.model(pdb, "eight_schools_centered")
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_centered")
impl = PosteriorDB.implementation(model, "stan")
path = PosteriorDB.path(impl)
data = PosteriorDB.dataset(post)
s = PosteriorDB.load(data, String);
model_nc = PosteriorDB.model(pdb, "eight_schools_noncentered")
post_nc = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_noncentered")
impl_nc = PosteriorDB.implementation(model_nc, "stan")
path_nc = PosteriorDB.path(impl_nc)
data_nc = PosteriorDB.dataset(post_nc)
s_nc = PosteriorDB.load(data_nc, String);

fullpath = abspath∘expanduser
BS.set_bridgestan_path!(fullpath("~/github/roualdes/bridgestan"))
bs_model = BS.StanModel(stan_file=path, data=s);
bs_model_nc = BS.StanModel(stan_file=path_nc, data=s_nc);

ref = PosteriorDB.reference_posterior(post)
df=DataFrame(PosteriorDB.load(ref))
constrained_draws = hcat([vcat(col...) for col in eachcol(df)]...)
ref_nc = PosteriorDB.reference_posterior(post_nc)
df_nc=DataFrame(PosteriorDB.load(ref_nc))
constrained_draws_nc = hcat([vcat(col...) for col in eachcol(df_nc)]...);

unc_sample_array_nc = vcat([
           param_unconstrain(bs_model_nc, collect(row))' for row in eachrow(constrained_draws_nc)
       ]...);

unc_sample_array = vcat([
           param_unconstrain(bs_model, collect(row))' for row in eachrow(constrained_draws)
       ]...);

mu, tau = constrained_draws_nc[:, end-1], constrained_draws_nc[:, end]
for i in 1:8
    unc_sample_array[:, i] = (unc_sample_array_nc[:, i] - mu) ./ tau
end

covariance_matrix = cov(unc_sample_array)
covariance_matrix_nc = cov(unc_sample_array_nc)

cholesky_ = cholesky(covariance_matrix).L;
cholesky_nc = cholesky(covariance_matrix_nc).L;

Lambda, U = eigen(covariance_matrix);
Lambda_nc, U_nc = eigen(covariance_matrix);

PCA = Diagonal(1 ./ sqrt.(Lambda)) * transpose(U);
PCA_nc = Diagonal(1 ./ sqrt.(Lambda_nc)) * transpose(U_nc);

ZCA = U *PCA;
ZCA_nc = U_nc * PCA_nc;

function get_hessian_info(model, W, unc_sample_array)
    df = DataFrame(CN_Hessian = Float64[], CN_Transformed_Hessian = Float64[], symmetric_hessian = Bool[], symmetric_transformed_hessian = Bool[], positive_definite_hessian = Bool[], positive_definite_transformed_hessian = Bool[])

    for i in 1:10000
        lp, grad, hessian = BS.log_density_hessian(model, unc_sample_array[i, :] );
        transformed_hessian = adjoint(W)*hessian*W
        h = Matrix{Float64}(hessian)
        th = Matrix{Float64}(transformed_hessian)
        row = [cond(hessian), cond(th), issymmetric(h), issymmetric(hessian), isposdef(-hessian), isposdef(-transformed_hessian)]
        push!(df, row)
    end

    return df
end;

cholesky_hessian_df = get_hessian_info(bs_model, cholesky_, unc_sample_array);
cholesky_hessian_df_nc = get_hessian_info(bs_model_nc, cholesky_nc, unc_sample_array_nc);

ZCA_hessian_df = get_hessian_info(bs_model, ZCA, unc_sample_array);
ZCA_hessian_df_nc = get_hessian_info(bs_model_nc, ZCA_nc, unc_sample_array_nc);

PCA_hessian_df = get_hessian_info(bs_model, PCA, unc_sample_array);
PCA_hessian_df_nc = get_hessian_info(bs_model_nc, PCA_nc, unc_sample_array_nc);

CSV.write("cholesky_ref_draws_centered_julia_df.csv", cholesky_hessian_df);
CSV.write("cholesky_ref_draws_non_centered_julia_df.csv", cholesky_hessian_df_nc);
CSV.write("zca_ref_draws_centered_julia_df.csv", ZCA_hessian_df);
CSV.write("zca_ref_draws_non_centered_julia_df.csv", ZCA_hessian_df_nc);
CSV.write("pca_ref_draws_centered_julia_df.csv", PCA_hessian_df);
CSV.write("pca_ref_draws_non_centered_julia_df.csv", PCA_hessian_df_nc);

plot= scatter(unc_sample_array_nc[:, 1], unc_sample_array_nc[:, end], alpha=0.1, label="Non Centered")
xaxis!(L"\Theta[0]")
yaxis!(L"\mathrm{log(\tau)}")
plot!(plot, fontfamily="Palatino")

plot=scatter(unc_sample_array[:, 1], unc_sample_array[:, end], alpha=0.1, label="Centered")
xaxis!(L"\Theta[0]")
yaxis!(L"\mathrm{log(\tau)}")
plot!(plot, fontfamily="Palatino")


