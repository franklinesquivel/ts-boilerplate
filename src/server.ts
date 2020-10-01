import express from "express";

const server = express();

server.use(express.static(__dirname + '/../public'));

export default server;
