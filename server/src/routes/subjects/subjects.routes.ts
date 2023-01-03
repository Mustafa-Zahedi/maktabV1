import { log } from "console";
import express from "express";
import { body, param, query } from "express-validator";
import {
  httpDeleteSubject,
  httpGetAllSubjects,
  httpGetSubject,
  httpPostSubject,
  httPutSubject,
} from "./subject.controller";

const subjectRouter = express.Router();

subjectRouter.get(
  "/",
  query("pageNumber").custom((value) => {
    if (Number(value) < 1) {
      throw new Error("pageNumber must be positive");
    }
    return true;
  }),
  query("pageSize").custom((value) => {
    if (Number(value) < 1)
      throw new Error("pageSize must be a positive interger");
    return true;
  }),
  httpGetAllSubjects
);

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
