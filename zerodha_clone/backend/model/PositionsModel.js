const mongoose = require('mongoose');

const  PositionsSchema  = require("../schemas/PositionsSchema"); // Corrected to use PositionsSchema

const PositionsModel = mongoose.model("position", PositionsSchema); // Using the imported schema

module.exports = { PositionsModel };