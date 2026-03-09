const { Schema, model } = require("mongoose");

const certificateSchema = new Schema({}, { timestamps: true });

module.exports = model("Certificate", certificateSchema);
