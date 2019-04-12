const {Post, Response} = require("../model/index");

module.exports = {
    show: async (req, res) => {
        let postId = req.params.id;
        // get the post
        let post = await Post.findById(postId);

        // get the response for this post
        let responses = await Response.find({postId});

        res.render("post/show", {
            post,
            responses
        });
    }
}