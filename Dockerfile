FROM node:11.1.0 AS test
RUN npm i -g yarn
WORKDIR /gatsby-build
COPY package.json yarn.lock /gatsby-build/
RUN yarn install
ADD . /gatsby-build

FROM node:11.1.0 AS build
WORKDIR /gatsby-build
COPY --from=0 /gatsby-build /gatsby-build
RUN yarn build

FROM nginx:1.15.7 AS production
WORKDIR /blog
COPY --from=1 /gatsby-build/public /blog/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
