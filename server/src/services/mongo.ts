import { error, log } from "console";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/maktab";

mongoose.connection.once("open", () => log("mongo connection is ready!"));

mongoose.connection.on("error", (err) =>
  error("connection to mongodb failed", err)
);

export async function mongoConnect() {
  MONGO_URL ? mongoose.connect(MONGO_URL) : log("please set the url");
}
export async function mongoDisConnect() {
  mongoose.disconnect();
}
