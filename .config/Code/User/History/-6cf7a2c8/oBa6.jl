covariance_matrix = cov(unc_sample_array);
covariance_matrix_nc = cov(unc_sample_array_nc);

cholesky_ = cholesky(covariance_matrix).L;
cholesky_nc = cholesky(covariance_matrix_nc).L;

Lambda, U = eigen(covariance_matrix);
Lambda_nc, U_nc = eigen(covariance_matrix_nc);

PCA = U * Diagonal(sqrt.(Lambda));
PCA_nc = U * Diagonal(sqrt.(Lambda));

ZCA = U * Diagonal(sqrt.(Lambda)) * transpose(U);
ZCA_nc = U_nc * Diagonal(sqrt.(Lambda_nc)) * transpose(U_nc);