#!/bin/bash

npm install pm2
npm run build
pm2 start npm --name "TigerList" -- start
pm2 start tigerlist


### USEFUL COMMANDS ONCE STARTED: ###
#: pm2 status - checks which apps are running
#: pm2 restart tigerlist - restart the process manager to update any pushed changes
#: pm2 stop tigerlist - stop running the app through the process manager
#: pm2 start tigerlist - run it again after stopping
#: pm2 delete tigerlist - remove tigerlist from the process manager