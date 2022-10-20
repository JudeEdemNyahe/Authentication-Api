import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("database connected successfully");
  } catch (err) {
    logger.info("Something went wrong somewhere");
    process.exit(1);
  }
}

export default connect;
