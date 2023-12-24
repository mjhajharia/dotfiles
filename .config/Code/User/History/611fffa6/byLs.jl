scatter(unconstrained_draws_nc[:, 1], unconstrained_draws_nc[:, end], alpha=0.1, label="Non Centered Model")
xaxis!(L"\Theta[0]")
yaxis!(L"\mathrm{log\tau}")
plot!(fontfamily="Palatino")

Plots.theme(:mute)
scatter(unconstrained_draws[:, 1], unconstrained_draws[:, end], alpha=0.1, zcolor=CN_Hessian, label=L"\mathrm{Centered: \kappa(H)}");
xaxis!(L"\Theta[0]")
yaxis!(L"\mathrm{log\tau}")
plot!(fontfamily="Palatino")

scatter(unconstrained_draws[:, 1], unconstrained_draws[:, end], alpha=0.1, zcolor=CN_Hessian_cholesky, label=L"\mathrm{Centered: \kappa(H_T)}");
xaxis!(L"\Theta[0]")
yaxis!(L"\mathrm{log\tau}")
plot!(fontfamily="Palatino")