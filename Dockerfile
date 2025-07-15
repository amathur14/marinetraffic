FROM ghcr.io/browserless/chrome:latest

WORKDIR /app

COPY package.json ./
COPY server.js ./

RUN npm install && \
    npx puppeteer install --prefix /app

CMD ["node", "server.js"]

