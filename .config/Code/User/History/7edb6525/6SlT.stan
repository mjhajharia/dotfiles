data {
  int <lower=0> J;
}
parameters {
  real sigma[J];
  real theta;
}
model {
  log(sigma) ~ normal(0, 1);
  theta ~ normal(0, sigma);
}