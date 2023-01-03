import express from "express";
import { body } from "express-validator";
import {
  httpDeleteSubject,
  httpGetAllSubjects,
  httpGetSubject,
  httpPostSubject,
  httPutSubject,
} from "./subject.controller";

const subjectRouter = express.Router();

subjectRouter.get("/", httpGetAllSubjects);

subjectRouter.get("/find", httpGetSubject);

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

subjectRouter.delete("/", body("name").notEmpty(), httpDeleteSubject);

export default subjectRouter;
