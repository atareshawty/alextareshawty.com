FROM node:11.1.0

RUN npm i -g gatsby-cli yarn

WORKDIR /gatsby-build

COPY package.json yarn.lock /gatsby-build/
RUN yarn install

ADD . /gatsby-build
RUN gatsby build

FROM nginx:1.15.7

WORKDIR /blog

COPY --from=0 /gatsby-build/public /blog/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
