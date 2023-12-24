data {
  int <lower=0> N;
}
parameters {
  real sigma[N];
  real theta[N];
}
model {
  log(sigma) ~ normal(0, 1);
  theta ~ normal(0, sigma);
}