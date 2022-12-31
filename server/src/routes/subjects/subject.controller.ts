import { Request, Response } from "express";
import { validationResult } from "express-validator/src/validation-result";
import {
  getAllSubjects,
  saveSubject,
} from "../../services/subjects/subject.service";

export async function httpGetAllSubjects(req: Request, res: Response) {
  const Subjects = await getAllSubjects();
  res.status(200).json({ Subjects, message: "welcome" });
}

export async function httpPostSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const result = await saveSubject(name);
  res.status(200).json({ message: "subject inserted", result });
}
