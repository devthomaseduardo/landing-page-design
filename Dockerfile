FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.2.0 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["npx", "next", "dev", "-H", "0.0.0.0"]
