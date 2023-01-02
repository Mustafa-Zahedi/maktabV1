import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now() },
});

const subject = mongoose.model("subject", subjectSchema);

export async function deleteSubject(sub: { name: string }) {
  return subject.deleteOne(sub);
}

export async function updateSubject(name: string, newName: string) {
  const newSubject = subject.replaceOne({ name }, { name: newName });
  return await newSubject;
}

export async function saveSubject(name: string) {
  const newSubject = new subject({ name });
  return await newSubject.save();
}

export async function getAllSubjects() {
  return subject.find();
}
