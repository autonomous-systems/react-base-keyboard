FROM node:16.15-alpine as builder

COPY package.json ./

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build



FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]