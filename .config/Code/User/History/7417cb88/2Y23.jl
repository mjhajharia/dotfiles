using Revise, PosteriorDB, Random, StanLogDensityProblems, JSON, BridgeStan, DataFrames, LinearAlgebra
using Plots, ColorSchemes, LaTeXStrings, Statistics, CSV
Plots.theme(:default)
const BS = BridgeStan;
fullpath = abspath∘expanduser
BS.set_bridgestan_path!(fullpath("/home/meenaljhajharia/github/roualdes/bridgestan"));

function extract_pdb(pdb_model_name, pdb_posterior_name)
    pdb = PosteriorDB.database("/home/meenaljhajharia/github/stan-dev/posteriordb/posterior_database")
    model = PosteriorDB.model(pdb, pdb_model_name)
    post = PosteriorDB.posterior(pdb, pdb_posterior_name)
    path = PosteriorDB.path(PosteriorDB.implementation(model, "stan"))
    data = PosteriorDB.load(PosteriorDB.dataset(post), String);
    return post, path, data
end

function preprocessing_pdb_draws(model_name, posterior_name, unconstrain=true)
    post, path, data = extract_pdb(model_name, posterior_name)
    bs_model = BS.StanModel(stan_file=path, data=data);
    ref = PosteriorDB.reference_posterior(post)
    df=DataFrame(PosteriorDB.load(ref))
    constrained_draws = hcat([vcat(col...) for col in eachcol(df)]...)
        unc_sample_array = vcat([
            param_unconstrain(bs_model, collect(row))' for row in eachrow(constrained_draws)
        ]...);
        return unc_sample_array, bs_model
    else
        return constrained_draws, bs_model
    end
end;


function get_hessian_info(model, W, unc_sample_array)
    df = DataFrame(CN_Hessian = Float64[], CN_Transformed_Hessian = Float64[], 
        symmetric_hessian = Bool[], symmetric_transformed_hessian = Bool[], 
        positive_definite_hessian = Bool[], positive_definite_transformed_hessian = Bool[])

    for i in 1:10000
        lp, grad, hessian = BS.log_density_hessian(model, unc_sample_array[i, :] );
        transformed_hessian = transpose(W)*hessian*W
        h = Matrix{Float64}(hessian)
        th = Matrix{Float64}(transformed_hessian)
        row = [cond(h), cond(th), 
        issymmetric(h), issymmetric(th), 
        isposdef(-h), isposdef(-th)]
        push!(df, row)
    end

    return df
end;

function whitening_transforms(unc_sample_array)
    covariance_matrix = cov(unc_sample_array);
    F = svd(covariance_matrix);
    PCA_ = F.U * Diagonal(sqrt.(F.S));
    ZCA_ = F.U * Diagonal(sqrt.(F.S)) * transpose(F.U);
    cholesky_ = cholesky(covariance_matrix).L;
    return PCA_, ZCA_, cholesky_
end

function get_hessian_script(model_name, posterior_name)
    unc_sample_array, bs_model = preprocessing_pdb_draws(model_name, posterior_name, true);
    PCA_, ZCA_, cholesky_ = whitening_transforms(unc_sample_array);
    cholesky_hessian_df = get_hessian_info(bs_model, cholesky_, unc_sample_array);
    ZCA_hessian_df = get_hessian_info(bs_model, ZCA_, unc_sample_array);
    PCA_hessian_df = get_hessian_info(bs_model, PCA_, unc_sample_array);
    CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/pdb_unc_sample_array.csv"), Tables.table(unc_sample_array));
    CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/cholesky.csv"), cholesky_hessian_df);
    CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/ZCA.csv"), ZCA_hessian_df);
    CSV.write(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/PCA.csv"), PCA_hessian_df);
end;

function retrieve_data_all(posterior_name)
    fullpath = abspath∘expanduser
    unc_sample_array = CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/pdb_unc_sample_array.csv"), DataFrame);
    hessian_df_cholesky=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/cholesky.csv"), DataFrame);
    hessian_df_ZCA=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/ZCA.csv"), DataFrame);
    hessian_df_PCA=CSV.read(fullpath("~/github/mjhajharia/diagnosing-hmc/data/$posterior_name/PCA.csv"), DataFrame);
    return unc_sample_array, hessian_df_cholesky, hessian_df_ZCA, hessian_df_PCA
end;


function funnel_plots(scatterplot, title="")
    return plot(scatterplot, yaxis=L"\mathrm{log\tau}", xaxis=L"\Theta[0]", fontfamily="Palatino", title=title, fmt = :png)
end