import http from "http";
import app from "./app";

const PORT = 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
