import http from "http";
import * as dotenv from "dotenv";
import app from "./app";
import { mongoConnect } from "./services/mongo";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await mongoConnect();
  console.log("server is running on port " + PORT);
});
