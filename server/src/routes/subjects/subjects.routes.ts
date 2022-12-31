import express from "express";
import { body } from "express-validator";
import { httpGetAllSubjects, httpPostSubject } from "./subject.controller";

const subjectRouter = express.Router();

subjectRouter.get("/", httpGetAllSubjects);
subjectRouter.post(
  "/",
  body("name").notEmpty().withMessage("subject name is required"),
  httpPostSubject
);

export default subjectRouter;
