FROM node:16
# Configuração da timezone para America/Sao_Paulo
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
# Create app directory
WORKDIR /usr/src/app
# Copy files
COPY ./dist /usr/src/app/dist
COPY ./node_modules /usr/src/app/node_modules
# Initialize app
CMD [ "node", "dist/src/main.js" ]