import express from "express";
import { httpGetAllSubjects } from "./subject.routes";

const subjectRouter = express.Router();

subjectRouter.get("/", httpGetAllSubjects);

export default subjectRouter;
