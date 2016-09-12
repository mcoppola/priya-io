#!/bin/sh

## CHANGE 'WEBSITE' to project name
## CHANGE port number

echo ""
echo "Deploying priya.io on prod server 104.236.220.177"
echo "-------------------------------------------------"
ssh nodeapps@104.236.220.177 '
eval `ssh-agent` && ssh-add ~/.ssh/id_rsa
cd ~/sites/priya
git pull origin master
forever stop "priya"
npm install
forever --uid "priya" start -a app.js -p 3007
'
