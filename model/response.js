const mongoose = require("mongoose");

let responseSchema = new mongoose.Schema({
    postId: String,
    responseText: String
})

module.exports = responseSchema;