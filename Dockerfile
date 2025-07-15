FROM ghcr.io/browserless/chrome:latest

WORKDIR /app

COPY package.json ./
COPY server.js ./

RUN npm install

CMD ["node", "server.js"]
