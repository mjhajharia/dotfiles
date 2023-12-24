---
title: "Distances to Normality"
version: 0.0
author: ""
date: ""
execute: 
  enabled: true
  daemon: 99999
  cache: false
toc: true
monobackgroundcolor: "#FFFFFF"
mainfont: "Palatino"
---

### Distances to Normality
- KL Divergence ends up being difficult to compute for Multivariate cases

- Other Approaches ([Divergence Estimation for Multidimensional Densities Via -Nearest-Neighbor Distances](https://www.princeton.edu/~kulkarni/Papers/Journals/j068_2009_WangKulVer_TransIT.pdf), [package](https://pypi.org/project/universal-divergence/)). This is an improvement on [Pérez-Cruz, F. Kullback-Leibler divergence estimation of
continuous distributions IEEE International Symposium on Information
Theory, 2008.](https://www.tsc.uc3m.es/~fernando/bare_conf3.pdf) which is [often used by people with some corrections](https://gist.github.com/atabakd/ed0f7581f8510c8587bc2f41a094b518) 

- **For Discrete Distributions** `scipy.stats.entropy` provides [mutual information](https://en.wikipedia.org/wiki/Mutual_information), which is equivalent to KL Divergence  for jointly discrete or jointly continous pairs. The relationship is:
$$
\displaystyle \operatorname {I} (X;Y)=\mathbb {E} _{Y}\left[D_{\text{KL}}\!\left(p_{X\mid Y}\parallel p_{X}\right)\right]
$$

So essentially if one uses normalized pdf p, q and then gets relative entropy using scipy, and sums it up, that can be taken as KL divergence. It would be useful to mask the values of p,q that are 0 or too close to 0 to avoid infs (this is a problem that happened a couple of times, which lead us to think there was something wrong with the implementation.)

Note that `scipy.stats.entropy` also normalizes the values given, so even if a proper pdf is not provided it works.
