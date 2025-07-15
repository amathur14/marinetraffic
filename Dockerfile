FROM alixaxel/chrome

WORKDIR /app

# Install express only (Puppeteer is already built-in)
RUN npm install express

COPY . .

CMD ["node", "server.js"]
