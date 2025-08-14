FROM node:20-alpine

RUN corepack enable

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prefer-offline

COPY . .

RUN rm -rf dist
RUN pnpm build

RUN ls -la dist

EXPOSE 3000


CMD ["pnpm", "start:prod"]
