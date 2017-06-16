#!/bin/bash

#Custom made script to download my config files and move them to the correct places
#Created 17 April 2017
#Last updated 19 April 2017
#Reason: Fix issue with moving diretories

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

mv .cinnamon $HOME
mv .config $HOME
mv .vimrc $HOME

mv PEBack.png $HOME/Pictures

echo "Restore is complete"

