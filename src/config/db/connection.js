import mongoose from "mongoose";
import { MONGO_URL_TEST_LOCAL, MONGO_PROD_TEST } from "..";

mongoose
  .connect(MONGO_URL_TEST_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("No connection" + err);
  });
