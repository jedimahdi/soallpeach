FROM node:13.12.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build-ts

EXPOSE 80
CMD [ "node", "dist/index.js" ]
