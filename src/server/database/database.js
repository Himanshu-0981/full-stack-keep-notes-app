const mongoose = require("mongoose");

async function dbConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/keepnotes");
    console.log("dbConnected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  dbConnection,
};
