cd tigerlist
source ~/.bashrc
cd ../..
sudo chown -R l_flanagan /home/l_flanagan/tigerlist
sudo chmod -R 777 l_flanagan
cd l_flanagan/tigerlist
npm install
npm install pg
npm run dev
