data {
  int <lower=0> N;
}
parameters {
  real <lower=0> sigma[N];
  real theta[N];
}
model {
  sigma ~ normal(0, 1);
  theta ~ normal(0, sigma);
}