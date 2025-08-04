const mongoose = require('mongoose');

// FIX: Import the schema directly, without destructuring
const HoldingsSchema = require('../schemas/HoldingsSchema'); 

const HoldingsModel = mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };