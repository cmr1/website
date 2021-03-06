FROM node:7

ENV APP_DIR /app

RUN mkdir -p $APP_DIR

WORKDIR $APP_DIR

COPY package.json .

RUN npm install --production --silent

COPY . .

CMD [ "npm", "start" ]