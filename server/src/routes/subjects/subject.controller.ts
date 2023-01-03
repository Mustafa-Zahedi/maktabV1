import { Request, Response } from "express";
import { validationResult } from "express-validator/src/validation-result";
import {
  deleteSubjects,
  getAllSubjects,
  getSubjects,
  saveSubject,
  updateSubject,
} from "../../services/subjects/subject.service";

// Read subject
export async function httpGetAllSubjects(req: Request, res: Response) {
  const pageNumber = req.query.pageNumber ? +req.query.pageNumber : undefined;
  const pageSize = req.query.pageSize ? +req.query.pageSize : undefined;
  console.log(pageNumber, pageSize);

  const Subjects = await getAllSubjects(pageNumber, pageSize);
  return res.status(200).json({ Subjects, message: "welcome" });
}

export async function httpGetSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const { maxPrice } = req.body;
  const { minPrice } = req.body;
  const { price } = req.body;
  const subjects = await getSubjects(name, price, minPrice, maxPrice);
  return subjects.length > 0
    ? res.status(200).json({ subjects })
    : res.status(404).json({ message: "subject not found!" });
}

// Create subject
export async function httpPostSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, price } = req.body;
  const result = await saveSubject({ name, price });
  return res.status(200).json({ message: "subject inserted", result });
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

  if (result.modifiedCount > 0) return res.status(200).json({ result });
  return res.status(404).json({ message: "subject not found" });
}

// Delete subject
export async function httpDeleteSubject(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const subject = req.body;
  const deletedSubject = await deleteSubjects(subject);

  return deletedSubject
    ? res.status(200).json({ subject: deletedSubject })
    : res.status(404).json({ message: "subject not found" });
}
