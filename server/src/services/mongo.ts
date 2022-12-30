import { error, log } from "console";
import mongoose from "mongoose";
import { saveSubject } from "./subjects/subject.service";

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/maktab";

mongoose.connection.once("open", () => log("mongo connection is ready!"));

mongoose.connection.on("error", (err) => error(err));

export async function mongoConnect() {
  MONGO_URL ? mongoose.connect(MONGO_URL) : log("please set the url");
  saveSubject();
}
export async function mongoDisConnect() {
  mongoose.disconnect();
}

// export async function connect() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/admin12");
//     log("Connected to mongodb...");
//   } catch (error) {
//     log("Cannot connect to mongodb..", error);
//   }
// }
