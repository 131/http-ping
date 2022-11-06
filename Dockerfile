FROM node:12
COPY index.js .
ENTRYPOINT ["node", "index.js"]
