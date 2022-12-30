import { Request, Response } from "express";

export function httpGetAllSubjects(req: Request, res: Response) {
  console.log("req:", req.body);
  res.status(200).json({ message: "welcome" });
}

export function httpPostSubject(req: Request, res: Response) {
  console.log("req:", req.body);

  const data = req.body;
  // TODO: INSERT DATA INOT DATABASE

  res.status(200).json({ message: "welcome" });
}
