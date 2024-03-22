FROM node:20.11.1-slim

COPY package*.json ./

# Install npm production packages 
RUN npm install --production

COPY ./dist .

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "index.js"]