import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now() },
});

const subject = mongoose.model("subject", subjectSchema);

export async function saveSubject(name: string) {
  const newSubject = new subject({ name });
  return await newSubject.save();
}

export async function getAllSubjects() {
  return subject.find();
}
