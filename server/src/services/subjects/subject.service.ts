import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  price: { type: Number, default: Math.random() * 10 },
  date: { type: Date, default: Date.now() },
});

const Subject = mongoose.model("subject", subjectSchema);

// Delete subject
export async function deleteSubjects(sub: { name: string }) {
  const sbj = await Subject.find(sub).select({ name: 1 });
  // console.log("😀😀😀", sbj, "😂😂😂", sub);

  if (sbj.length === 0) return;
  return Subject.deleteMany(sub).select({ name: 1 });
}

// Update subject
export async function updateSubject(name: string, newName: string) {
  const newSubject = await Subject.replaceOne({ name }, { name: newName });
  return newSubject;
}

// Create subject
type subjParamType = {
  name: string;
  price: number;
};
export async function saveSubject({ name, price }: subjParamType) {
  const newSubject = new Subject({ name, price });
  const result = await newSubject.save();
  return result;
}

// Read subject
export async function getSubjects(
  name: string,
  price: number,
  maxPrice: number,
  minPrice: number
) {
  let result: any = [];
  if (name) result = Subject.find({ name: /^js/ });

  if (maxPrice && minPrice)
    // we can get subject between lowest and greatest price by using and function or just by using find()
    // result = Subject.find().and([
    //   { price: { $lte: minPrice } },
    //   { price: { $gte: maxPrice } },
    // ]);
    result = Subject.find({ price: { $gte: maxPrice, $lte: minPrice } });
  else if (minPrice) result = Subject.find({ price: { $lte: minPrice } });
  else if (maxPrice) result = Subject.find({ price: { $gte: maxPrice } });
  else if (price) result = Subject.find({ price: { $eq: price } });

  return result.limit(3).sort({ name: 1 }).select({ name: 1, price: true });
}

// export const getSubject = async () => {};

export async function getAllSubjects(pageNumber: number, pageSize: number) {
  return Subject.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ __v: 0 });
}
