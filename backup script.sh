#!/bin/bash

#Custom made script to download my config files and move them to the correct places
#Created 17 April 2017
#Last updated 18 April 2017

#Move to home directory
cd $HOME

#Clone the backup files into a local directory

git clone https://github.com/Mike-FromIT/backup.git

#Move into the cloned backup directory

cd ./backup

#Unpackage all the backup files and directories

tar -zxvf backup.tgz

#Move into the unpacked backup directory

cd ./backup

#Start moving dotfiles into home folder

mv -r .cinnamon $HOME
mv -r .config $HOME
mv .vimrc $HOME

mv PEBack.png $HOME/Pictures

echo "Backup is complete"

