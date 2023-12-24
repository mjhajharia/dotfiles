function get_draws(posterior)
    ref = PosteriorDB.reference_posterior(posterior)
    df=DataFrame(PosteriorDB.load(ref))
    draws = hcat([vcat(col...) for col in eachcol(df)]...)
    return draws
end

function unconstrain_draws(bs_model, constrained_draws)
    unc_sample_array = vcat([
           param_unconstrain(bs_model, collect(row))' for row in eachrow(constrained_draws)
       ]...);
    return unc_sample_array
end

function extract_pdb(pdb_model_name, pdb_posterior_name)
    pdb = PosteriorDB.database()
    model = PosteriorDB.model(pdb, pdb_model_name)
    post = PosteriorDB.posterior(pdb, pdb_posterior_name)
    path = PosteriorDB.path(PosteriorDB.implementation(model, "stan"))
    data = PosteriorDB.load(PosteriorDB.dataset(post), String);
    return post, path, data
end

function whitening_transforms(unconstrained_draws)
    covariance_matrix = cov(unconstrained_draws);
    Lambda, U = eigen(covariance_matrix);
    PCA_ = U * Diagonal(sqrt.(Lambda));
    ZCA_ = U * Diagonal(sqrt.(Lambda)) * transpose(U);
    cholesky_ = cholesky(covariance_matrix).L;
    return PCA_, ZCA_, cholesky_
end

function get_hessian_info(bs_model, W, unconstrained_draws)
    df = DataFrame(CN_Hessian = Float64[], CN_Transformed_Hessian = Float64[], symmetric_hessian = Bool[], symmetric_transformed_hessian = Bool[], positive_definite_hessian = Bool[], positive_definite_transformed_hessian = Bool[])

    for i in 1:10000
        lp, grad, hessian = BS.log_density_hessian(bs_model, unconstrained_draws[i, :] );
        transformed_hessian = transpose(W)*hessian*W
        h = Matrix{Float64}(hessian)
        th = Matrix{Float64}(transformed_hessian)
        row = [cond(h), cond(th), 
        issymmetric(h), issymmetric(h), 
        isposdef(-h), isposdef(-th)]
        push!(df, row)
    end

    return df
end;

function funnel_plots(scatterplot)
    return plot(scatterplot, yaxis=L"\mathrm{log\tau}", xaxis=L"\Theta[0]", fontfamily="Palatino")
end


function hessian_transformed_plot(scatterplot, whitening_str)
    return plot(scatterplot, 
    yaxis=L"\mathrm{\kappa(\mathbf{H_{T}})}", 
    xaxis=L"\mathrm{\kappa(\mathbf{H})}", 
    title = "$whitening_str Whitening\n\n Condition Number of Hessian vs Transformed Hessian (on a log scale)", 
    titlefontsize=10,
    fontfamily="Palatino")
end