# dogs MISSING from PosteriorDB
# dogs_log MISSING from PosteriorDB
#  sample covariance is not PSD, probably because of high dimensionality and some collinearity, not sure
# anyway, so calculating cholesky factors needs more flexibility 
# `cholesky_ = cholesky(covariance_matrix; check = false).L` (in `whitening_transforms` function)
# would probably make more sense to threshold the -ve eigenvalues though.
include("utils.jl")

model_name= [
    "nes", 
    "logearn_interaction", 
    "diamonds", 
    "blr", 
    "gp_regr", 
    "gp_pois_regr", 
    "accel_gp", 
    "low_dim_gauss_mix", 
    "one_comp_mm_elim_abs", 
    "lotka_volterra", 
    "hmm_drive_0", 
    "hmm_example", 
    "hmm_drive_1", 
    "arma11", 
    "arK", 
    "garch11", 
    "eight_schools_noncentered"
];

posterior_name = [
    "nes2000-nes", 
    "earnings-logearn_interaction", 
    "diamonds-diamonds", 
    "sblrc-blr", 
    "gp_pois_regr-gp_regr", 
    "gp_pois_regr-gp_pois_regr", 
    "mcycle_gp-accel_gp", 
    "low_dim_gauss_mix-low_dim_gauss_mix", 
    "one_comp_mm_elim_abs-one_comp_mm_elim_abs", 
    "hudson_lynx_hare-lotka_volterra", 
    "bball_drive_event_0-hmm_drive_0", 
    "hmm_example-hmm_example", 
    "bball_drive_event_1-hmm_drive_1", 
    "arma-arma11", 
    "arK-arK", 
    "garch-garch11", 
    "eight_schools-eight_schools_noncentered"
];

using ProgressBars
for (arg1, arg2) in ProgressBar(zip(model_name, posterior_name))
    get_hessian_script((arg1, arg2)...);
end


model_name=="eight_schools_centered"
            mu, tau = unc_sample_array[:, end-1], unc_sample_array[:, end]
            for i in 1:8
                unc_sample_array[:, i] = (unc_sample_array[:, i] - mu) ./ tau