### Distances to Normality
- KL Divergence ends up being difficult to compute for Multivariate cases

- Other Approaches ([Divergence Estimation for Multidimensional Densities Via -Nearest-Neighbor Distances](https://www.princeton.edu/~kulkarni/Papers/Journals/j068_2009_WangKulVer_TransIT.pdf), [package](https://pypi.org/project/universal-divergence/))

- `scipy.stats.entropy` provides [mutual information](https://en.wikipedia.org/wiki/Mutual_information), which is equivalent to KL Divergence  for jointly discrete or jointly continous pairs. The relationship is:
$$
\displaystyle \operatorname {I} (X;Y)=\mathbb {E} _{Y}\left[D_{\text{KL}}\!\left(p_{X\mid Y}\parallel p_{X}\right)\right]
$$