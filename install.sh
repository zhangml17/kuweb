#!/bin/sh

#download nodejs
wget https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz 

tar -xzvf node-v8.11.3.tar.gz

#install node and express
cd node-v8.11.3

./configure && make && make install && npm install -g express-generator

#download node project from github

#run node project
