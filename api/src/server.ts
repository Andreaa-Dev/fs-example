import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";
const port = 8000;

dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running at http://localhost:${port}`);
      console.log("Press CTRL-C to stop\n");
    });
  })
  .catch((err: Error) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit(1);
  });
