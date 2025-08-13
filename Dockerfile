FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

FROM docker.elastic.co/logstash/logstash:8.15.2

COPY logstash.conf /usr/share/logstash/pipeline/logstash.conf

FROM node:20-alpine

RUN corepack enable

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prefer-offline

COPY . .

RUN pnpm build

EXPOSE 3000


CMD ["pnpm", "start:prod"]
