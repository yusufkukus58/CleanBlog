const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    detail: String,
    name: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

// Model
const Post = mongoose.model('Post', PostSchema);

// Exports
module.exports = Post;