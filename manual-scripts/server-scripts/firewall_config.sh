sudo firewall-cmd --add-port=3000/tcp --permanent;
sudo firewall-cmd --runtime-to-permanent ;
iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000;
