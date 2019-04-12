const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/show/:id", postController.show);

module.exports = router;
