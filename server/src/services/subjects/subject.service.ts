import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now() },
});

const subject = mongoose.model("subject", subjectSchema);

const math = new subject({ name: "Math" });
console.log("math", math);

export async function saveSubject() {
  const res = await math.save();
  console.log("res", res);
  const subjects = subject.find();
  console.log("subjects", subjects);
}

// saveSubject();
