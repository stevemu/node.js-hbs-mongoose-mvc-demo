const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
    name: String,
    type: String
})
postSchema.methods.speak = function () {
    console.log("post scheme speak");
}

module.exports = postSchema;