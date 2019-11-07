FROM node:latest
WORKDIR /usr/src/app

COPY . .
RUN npm install

COPY index.js .
COPY files/* ./files/
CMD [ "npm", "start" ]