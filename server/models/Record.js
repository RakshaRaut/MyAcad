const { Schema, model } = require("mongoose");

const recordSchema = new Schema({}, { timestamps: true });

module.exports = model("Record", recordSchema);
