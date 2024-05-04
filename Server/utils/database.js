const mongoose = require("mongoose");

const connectionDB = (url) => {
  console.log("Trying to connect Database");
  mongoose.set("debug", true);
  return mongoose.connect(url);
};

module.exports = connectionDB;
