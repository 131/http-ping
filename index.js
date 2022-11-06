"use strict";

const http = require('http');

let port = process.env["HTTP_PORT"] || 80;

let server = http.createServer(function(req, res) {
  console.log("Incoming", req.url);

  if(req.url == "/ping")
    return res.end("pong");

  if(req.url == "/date")
    return res.end(String(new Date()));

  if(req.url == "/time")
    return res.end(String(new Date()));

  if(req.url == "/timestamp")
    return res.end(String(Date.now()/1000));

  res.end("Hi");
});

server.listen(port, function() {
  console.log("Server bound to port", this.address().port);
});