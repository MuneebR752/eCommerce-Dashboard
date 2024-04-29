const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const morgan = require("morgan");

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(express.static("./public", { extensions: ["html"] }));
server.get("/", (_, res) => {
  res.sendFile("./public/index");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
