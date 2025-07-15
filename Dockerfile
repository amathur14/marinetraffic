FROM ghcr.io/browserless/chrome:latest

WORKDIR /app

COPY . .

RUN npm install express

CMD ["node", "server.js"]
