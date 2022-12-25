import express from "express";
import subjectRouter from "./subjects/subjects.router";

const api = express.Router();

api.use("/subject", subjectRouter);

export default api;
