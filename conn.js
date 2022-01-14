const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hotel-data")
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log(`error:${e}`);
  });
