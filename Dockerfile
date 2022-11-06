FROM node:4
COPY index.js .
ENTRYPOINT ["node", "index.js"]
LABEL "org.opencontainers.image.version"="0.9.1"
