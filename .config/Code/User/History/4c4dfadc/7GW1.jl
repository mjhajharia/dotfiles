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

mu, tau = constrained_draws_nc[:, end-1], constrained_draws_nc[:, end]

for i in 1:8
    constrained_draws_nc[:, i] = (constrained_draws_nc[:, i] - mu) ./ tau
end

unc_sample_array_nc = vcat([
           param_unconstrain(bs_model_nc, collect(row))' for row in eachrow(constrained_draws_nc)
       ]...);

unc_sample_array = vcat([
           param_unconstrain(bs_model, collect(row))' for row in eachrow(constrained_draws)
       ]...);