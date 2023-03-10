FROM node:14

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y wget \
curl
RUN npm install -g @angular/cli@9.1.0 \ 
npm audit fix --force

EXPOSE 4200 4400

CMD "npm install"