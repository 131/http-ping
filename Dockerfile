FROM node:4-slim
COPY index.js .
ENTRYPOINT ["node", "index.js"]
LABEL "org.opencontainers.image.version"="1.0.0"
