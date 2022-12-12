var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: {type: String, required: true},
    postId: {type: String, required: true},
    author: {type: String},
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;