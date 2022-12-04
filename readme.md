# Dotfiles

Sync alias in `.zshrc`

```
alias sync-config="rsync -av --progress --delete ~/.config/ ~/dotfiles/.config; rsync -av --progress --delete ~/.local/ ~/dotfiles/.local; pacman -Qqem > ~/dotfiles/foreignpkglist.txt; pacman -Qn > ~/dotfiles/pkglist.txt"
```

## Other stuff

- [theme files](https://github.com/mjhajharia/colors)
- [.zshrc](https://github.com/mjhajharia/zshrc)
- To add
  - configs in `.local`
