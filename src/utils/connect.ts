import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("database connected successfully");
  } catch (err) {
    console.log("Something went wrong somewhere");
    process.exit(1);
  }
}

export default connect;
