import express from "express";
import api from "./routes/api.route";

const app = express();

app.use("/v1", api);

export default app;
