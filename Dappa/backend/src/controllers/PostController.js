const Post = require('../models/Post');

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const post = await Post.create({
            author,
            place,
            description, 
            hashtags
        });
        return res.json(post);
    },
} 