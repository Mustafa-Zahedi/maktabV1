import { error, log } from "console";
import mongoose from "mongoose";

mongoose.connection.once("open", () => log("mongo connection is ready!"));

mongoose.connection.on("error", (err) =>
  error("connection to mongodb failed", err)
);

export async function mongoConnect() {
  const MONGO_URL = process.env.MONGO_URL;
  mongoose.set("strictQuery", false);
  mongoose.connect(MONGO_URL!);
}
export async function mongoDisConnect() {
  mongoose.disconnect();
}
