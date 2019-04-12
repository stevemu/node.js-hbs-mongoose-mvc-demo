const express = require('express')
const hbs = require('hbs')
const mongoose = require("mongoose");

const app = express()
const port = 3000
app.set('view engine', 'hbs');

mongoose.connect("mongodb://localhost/test")
let db = mongoose.connection;
db.once("open", async function () {

    // Post

    // let postSchema = new mongoose.Schema({
    //     name: String,
    //     type: String
    // })
    // postSchema.methods.speak = function() {
    //     console.log("post scheme speak");
    // }
    // let Post = mongoose.model("Post", postSchema);
    // let post1 = new Post({name: "aa", type: "bb"});
    // post1.speak();
    // await post1.save();
    // let posts = await Post.find();
    // let posts = await Post.find({name: "aa"});
    // console.log(posts);

    // Response

    // let responseSchema = new mongoose.Schema({
    //     postId: String,
    //     responseText: String
    // })
    // let Response = new mongoose.model("Response", responseSchema);
    // let response1 = new Response({postId: "5c88380614ca965440e31a4e", responseText: "hello I am"});
    // let response2 = new Response({postId: "5c8838c140210154933f85cb", responseText: "hello you are"});
    // await response1.save();
    // await response2.save();

    app.use(require("./routes/index"));
    // app.get('/', (req, res) => res.render('index'));
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})


