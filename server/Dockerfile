FROM node
EXPOSE 3000
ADD mnt/ /mnt/
run cd mnt && npm install
CMD    ["node", "mnt/app.js"]
