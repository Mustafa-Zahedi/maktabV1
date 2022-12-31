import express from "express";
import subjectRouter from "./subjects/subjects.routes";

const api = express.Router();

api.use("/subject", subjectRouter);

export default api;
