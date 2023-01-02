import { Request, Response } from "express";
import { validationResult } from "express-validator/src/validation-result";
import {
  deleteSubject,
  getAllSubjects,
  saveSubject,
  updateSubject,
} from "../../services/subjects/subject.service";

// Read subject
export async function httpGetAllSubjects(req: Request, res: Response) {
  const Subjects = await getAllSubjects();
  res.status(200).json({ Subjects, message: "welcome" });
}

// Create subject
export async function httpPostSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const result = await saveSubject(name);
  res.status(200).json({ message: "subject inserted", result });
}

// Update subject
export async function httPutSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const { newName } = req.body;
  const result = await updateSubject(name, newName);
  res.status(200).json({ result });
}

// Delete subject
export async function httpDeleteSubject(req: Request, res: Response) {
  const subject = req.body;
  const Subjects = await deleteSubject(subject);
  res.status(200).json({ Subjects, message: "welcome" });
}
