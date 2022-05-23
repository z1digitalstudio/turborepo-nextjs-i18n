FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000
ENV PORT_TWO 3001

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

COPY . /usr/src/app
RUN yarn
RUN yarn run build

EXPOSE 3000 3001
CMD [ "yarn", "run", "dev" ]