const { Schema, model } = require("mongoose");

const projectSchema = new Schema({}, { timestamps: true });

module.exports = model("Project", projectSchema);
