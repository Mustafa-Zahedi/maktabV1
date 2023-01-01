import express from "express";
import { body } from "express-validator";
import {
  httpGetAllSubjects,
  httpPostSubject,
  httPutSubject,
} from "./subject.controller";

const subjectRouter = express.Router();

subjectRouter.get("/", httpGetAllSubjects);
subjectRouter.post(
  "/",
  body("name").notEmpty().withMessage("subject name is required"),
  httpPostSubject
);
subjectRouter.put(
  "/",
  body("name").notEmpty(),
  body("newName").notEmpty(),
  httPutSubject
);

export default subjectRouter;
