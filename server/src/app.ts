import express from "express";
import cors from "cors";
import api from "./routes/api.route";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/v1", api);

export default app;
