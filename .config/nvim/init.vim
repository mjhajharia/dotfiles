let $NVIM_TUI_ENABLE_TRUE_COLOR=1
syntax enable
set background=dark
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set autoindent
set copyindent
set cursorline
set incsearch
set hlsearch
command W :execute ':silent w !sudo tee % > /dev/null' | :edit!
