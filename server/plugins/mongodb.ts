import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();
  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Successfully connected to MongoDB.");
  } catch (e) {
    console.error("Failed to connect to MongoDB:", e);
  }
});
