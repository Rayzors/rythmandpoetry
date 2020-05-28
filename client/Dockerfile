FROM node:latest as app

ARG REACT_APP_API_URL 

ENV REACT_APP_API_URL $REACT_APP_API_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY  --from=app /app/build  .

EXPOSE 80