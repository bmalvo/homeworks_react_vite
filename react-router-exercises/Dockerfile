FROM node:22-alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm install
RUN npm run build

CMD [ "npm", "run", "preview" ]

EXPOSE 4173