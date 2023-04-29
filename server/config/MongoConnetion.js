import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/twitter_backend")
  .then(() => {
    console.log({ "database status": "connected" });
  })
  .catch((e) => {
    console.log({ "database status": "not connected" }, { "error-Status": e });
  });
