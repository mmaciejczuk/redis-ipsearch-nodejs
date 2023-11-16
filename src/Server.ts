import express from "express";
import http from "http";
import router from "../src/routes/Index";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const app = express();

const APP_PORT = process.env.APP_PORT;

const server = http.createServer(app);

server.listen(`${APP_PORT}`, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}/`);
});

app.use("/", router());
