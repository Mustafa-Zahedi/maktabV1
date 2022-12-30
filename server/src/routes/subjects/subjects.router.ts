import express from "express";
import { httpGetAllSubjects, httpPostSubject } from "./subject.routes";

const subjectRouter = express.Router();

subjectRouter.get("/", httpGetAllSubjects);
subjectRouter.post("/", httpPostSubject);

export default subjectRouter;
