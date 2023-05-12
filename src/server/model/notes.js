const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userDescription: { type: String, required: true },
});

exports.Notes = mongoose.model("Notes", notesSchema);
