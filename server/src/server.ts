import http from "http";
import app from "./app";
import { mongoConnect } from "./services/mongo";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await mongoConnect();
  console.log("server is running on port " + PORT);
});
