# fig, axs = plt.subplots(3, 3, figsize=(10, 10), sharex=true, sharey=true)

# for (i, title) in enumerate(posterior_names[1:9])
#     # Replace this with your logic to retrieve data
#     unc_sample_array, x, hessian_df_ZCA, hessian_df_PCA = retrieve_data_all("$title");
#     hessian_df_cholesky = x[:, :CN_Hessian]
#     hessian_df_transformed =  x[:, :CN_Transformed_Hessian]

#     row_idx = (i - 1) ÷ 3 + 1
#     col_idx = (i - 1) % 3 + 1
#     print(row_idx, " " ,col_idx, ",")
#     ax = axs[row_idx, col_idx]
#     scatter_plot = ax.scatter(
#         hessian_df_cholesky,
#         hessian_df_transformed,
#         alpha=0.1,
#         label=title
#     )
#     ax.set_xscale("log")
#     ax.set_yscale("log")
#     ax.set_title(title)
    
#     x_min, x_max = minimum(hessian_df_cholesky), maximum(hessian_df_cholesky)
#     y_min, y_max = minimum(hessian_df_transformed), maximum(hessian_df_transformed)
    
#     xticks = LinRange(x_min, x_max, 3)  # Adjust the number of ticks if needed
#     yticks = LinRange(y_min, y_max, 3)  # Adjust the number of ticks if needed
    
#     ax.set_xticks(xticks)
#     ax.set_yticks(yticks)
#     ax.set_xticklabels([string(tick) for tick in xticks])
#     ax.set_yticklabels([string(tick) for tick in yticks])
# end

# fig.add_subplot(111, frameon=false)
# xlabel("Common X Label")
# ylabel("Common Y Label")
# suptitle("Common Title", fontsize=14)

# plt.tight_layout()
# plt.show()