FROM node:14.16.0-alpine3.12

WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
RUN npm run build
CMD ["npm", "run", "start"]