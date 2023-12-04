#!/bin/bash

# Add SSH key and set permissions
chmod 600 fullstack_blog.pem
ssh-add fullstack_blog.pem

# SSH into your EC2 instance and deploy
ssh -o StrictHostKeyChecking=no ubuntu@ec2-54-234-80-14.compute-1.amazonaws.com << 'ENDSSH'
cd /home/blog

# Pull the latest code
git pull

# Install dependencies
yarn install

# Build the app
yarn build

# Start or restart the application using PM2
pm2 restart your-app-name || pm2 start /dist/server/index.cjs --name your-app-name
ENDSSH
