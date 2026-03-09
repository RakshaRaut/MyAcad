const { Schema, model } = require("mongoose");

const collegeSchema = new Schema({}, { timestamps: true });

module.exports = model("College", collegeSchema);
