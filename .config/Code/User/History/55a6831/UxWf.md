---
title: "Whitening"
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

#### Whitening Hessians
- Sample Covariance Matrix: $\Sigma$
- Eigendecomposition: $\Sigma = U\Lambda U^{H}$, where $U$,  $\Lambda$ consist of eigenvectors and eigenvalues of $\Sigma$.
- Cholesky Decomposition: $\Sigma^{-1} = LL^{H}$, where ^{H} is the conjugate transpose or adjoint, for real matrices this is just $^{T}$
- Also, $\Sigma^{-1} = U \Lambda^{-1} U^{-1}$, so the unique inverse matrix square root of $\Sigma$ is defined as  $\Sigma^{−\frac{1}{2}} = U\Lambda^{-\frac{1}{2}}U^{T}$
- We assume that the eigenvalues are sorted in order from largest to smallest value
- For a whitening matrix $W$, the Transformed Hessian is constructed as $H_{T} = W^{T}HW$
- $W_{ZCA} = \Sigma^{\frac{1}{2}}$, can also be rewritten as $(\Sigma^{\frac{1}{2}} L) L^{T}$ (QR Decomposition)
- $W_{PCA} = \Lambda^{\frac{1}{2}}U_{T}$
- $W_{Cholesky} = L$