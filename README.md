This is a very simple /ping echo http server
Usefull to test you docker / swarm / whatever setup



# Usage

```
docker run -p 8080:8080 -e HTTP_PORT=8080 ghcr.io/131/http-ping

curl "http://127.0.0.1:8080/ping"
> pong


```

