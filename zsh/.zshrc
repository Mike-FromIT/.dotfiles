#Notes:
# autoload -Uz = Marks the name as being a function, -U marks function for autoloading and suppresses alias expansion, -z means run with zsh

#General settings:
#bindkey -v #Turn on vi mode
#export KEYTIMEOUT=1 #Recommended for vi mode
autoload -Uz colors
colors
PS1="%B%F{white}%n%F{cyan}@%F{red}%m:%F{magenta}%~ %F{green}$%b "
export EDITOR=vim #Sets $EDITOR environment variable to vim

#For some reason ansible likes to use cowsay, and I don't like that 
export ANSIBLE_NOCOWS=1


#History file settings:
HISTFILE=~/.cache/zsh/historyfile
HISTSIZE=1000
SAVEHIST=1000

#rclone scripts for backup
alias cryptbak="sh /home/michael/scripts/encrypted-backup.sh"
alias clearbak="sh /home/michael/scripts/google-drive-backup.sh"
alias cryptrestore="sh /home/michael/scripts/encrypted-restore.sh"

#Jellyfin NAS mount
alias jellymount="sudo mount -t cifs -o credentials=/home/michael/.nascreds //nas01.home/jellyfin remotefs"

#make nnn open editable files with vim
alias nnn="nnn -e"

#Autocomplete settings:
autoload -Uz compinit
compinit
zstyle ':completion:*' menu select #Enables arrow key use in completion menu

#Edit current line with vim
autoload -Uz edit-command-line
zle -N edit-command-line
bindkey '^e' edit-command-line

#Match previous commands when pushing Up or Down keys
autoload -Uz up-line-or-beginning-search down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search

[[ -n "${key[Up]}" ]] && bindkey -- "${key[Up]}" up-line-or-beginning-search
[[ -n "${key[Down]}" ]] && bindkey -- "${key[Down]}" down-line-or-beginning-search


#For VS Code Python extension
eval "$(direnv hook zsh)"

#Load zsh-syntax-highlighting plugin. Requires zsh-syntax-highlighting package and placed at end of .zshrc
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
