import { Request, Response } from "express";
import {
  getAllSubjects,
  saveSubject,
} from "../../services/subjects/subject.service";

export async function httpGetAllSubjects(req: Request, res: Response) {
  console.log("req:", req.body);
  const Subjects = await getAllSubjects();
  console.log("Subjects:", Subjects);
  res.status(200).json({ Subjects, message: "welcome" });
}

export async function httpPostSubject(req: Request, res: Response) {
  console.log("req:", req.body);
  const name = req.body?.name;
  if (!req.body) {
    return res.status(400).json({ message: "There is no data to insert" });
  } else if (!name)
    return res.status(401).json({ message: "subject name is required" });
  else {
    const result = await saveSubject(name);
    res.status(200).json({ message: "subject inserted", result });
  }
}
