FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

FROM node:20-alpine

RUN corepack enable

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prefer-offline

COPY . .

EXPOSE 3000


CMD ["pnpm", "start:dev"]
