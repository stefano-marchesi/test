FROM node
EXPOSE 80
ADD mnt/ /mnt/
run cd mnt && npm install
CMD    ["node", "mnt/app.js"]
