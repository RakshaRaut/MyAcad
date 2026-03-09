const { Schema, model } = require("mongoose");

const studentSchema = new Schema({}, { timestamps: true });

module.exports = model("Student", studentSchema);
