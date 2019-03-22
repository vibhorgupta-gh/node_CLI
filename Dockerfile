FROM node:8

WORKDIR /app

COPY package.json app/
COPY yarn.lock app/

RUN cd app/ && yarn install

COPY . /app

EXPOSE 4000

ENTRYPOINT ["node"]
CMD ["server.js"]