import { Request, Response } from "express";

export function httpGetAllSubjects(req: Request, res: Response) {
  console.log("req:", req.body);
  res.status(200).json({ message: "welcome" });
}
