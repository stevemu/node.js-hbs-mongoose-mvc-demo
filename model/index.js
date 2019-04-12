// const mongoose = require("../db/connection.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

module.exports = {
  Post: mongoose.model("post", require("./post")),
  Response: mongoose.model("response", require("./response"))
};
