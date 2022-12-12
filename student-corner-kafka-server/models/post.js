var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {type: String, required: true, unique: true},
    body: {type: String},
    author: {type: String},
    selectedFile: {type: String},
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;