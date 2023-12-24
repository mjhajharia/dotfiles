function get_hessian_info(model, W, unc_sample_array)
    df = DataFrame(CN_Hessian = Float64[], CN_Transformed_Hessian = Float64[], symmetric_hessian = Bool[], symmetric_transformed_hessian = Bool[], positive_definite_hessian = Bool[], positive_definite_transformed_hessian = Bool[])

    for i in 1:10000
        lp, grad, hessian = BS.log_density_hessian(model, unc_sample_array[i, :] );
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