pdb = PosteriorDB.database()
model = PosteriorDB.model(pdb, "eight_schools_centered")
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_centered")
impl = PosteriorDB.implementation(model, "stan")
path = PosteriorDB.path(impl)
data = PosteriorDB.dataset(post)
s = PosteriorDB.load(data, String);

#non centered eight schools
model_nc = PosteriorDB.model(pdb, "eight_schools_noncentered")
post_nc = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_noncentered")
impl_nc = PosteriorDB.implementation(model_nc, "stan")
path_nc = PosteriorDB.path(impl_nc)
data_nc = PosteriorDB.dataset(post_nc)
s_nc = PosteriorDB.load(data_nc, String);