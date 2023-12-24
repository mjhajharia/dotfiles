function funnel_plots(theta, tau, CN_Hessian, CN_Hessian_cholesky, model)
    scatter(theta, tau, alpha=0.1, label=L"$model Model")
    xaxis!(L"\Theta[0]")
    yaxis!(L"\mathrm{log\tau}")
    x = plot(fontfamily="Palatino")

    Plots.theme(:mute)
    scatter(theta, tau, alpha=0.1, zcolor=CN_Hessian, label=L"\mathrm{$model: \kappa(H)}");
    xaxis!(L"\Theta[0]")
    yaxis!(L"\mathrm{log\tau}")
    y = plot(fontfamily="Palatino")

    scatter(theta, tau, alpha=0.1, zcolor=CN_Hessian_cholesky, label=L"\mathrm{$model: \kappa(H_T)}");
    xaxis!(L"\Theta[0]")
    yaxis!(L"\mathrm{log\tau}")
    z = plot(fontfamily="Palatino")

    return x, y, z