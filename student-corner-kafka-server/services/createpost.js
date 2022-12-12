var Post = require('../models/post');
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;

//new code
var mongo = require("../config/mongo");
var Comment = require('../models/comment');

exports.createPost = function (data, callback) {
    console.log("KAFKA SERVER createPOst data:", data);
    var post = new Post();
    post.title = data.title;
    post.body = data.body;
    post.author = data.author;
    post.selectedFile = data.selectedFile;

    console.log("KAFKA SERVER createPOst post variable:", post);

    post.save(function (err) {
        if (err) {
            console.log("error in create post");
            console.log(JSON.stringify(err));
            callback(err);
        }
        else {
            console.log("KAFKA SERVER: createPost", post);
            callback(null, post);
        }
    }
    );
};


//added new code
exports.listPosts = function (message, callback) {
    console.log("list Posts in server");
    console.log("list Posts message in server", message);

    var posts = mongo.collection('posts');

    var mysort = { _id: -1 };
    posts.find({
    }).sort(mysort).toArray(function (err, results) {

        console.log("Posts from mongo collection", JSON.stringify(results));

        if (err) {
            callback(err, null)
        }
        else {

            if (results.length === 0) {
                callback(null, null)
            } else {
                callback(null, results)
            }
        }
    })
};


exports.fetchPostData = function (data, callback) {
    console.log("fetchPostData in server");
    console.log("KAFKA SERVER fetchPostData data:", data.id);

    var posts = mongo.collection('posts');

    /* posts.findOne({
         _id: ObjectId(data.id)
    }, function (err, results) {

        console.log("Post from mongo collection", JSON.stringify(results));

        if (err) {
            callback(err, null)
        }
        else {

            if (results.length === 0) {
                callback(null, null)
            } else {
                callback(null, results)
            }
        }
    }) */

    var comment = mongo.collection('comments');
    var postsAndComments = {};
    posts.findOne({ _id: ObjectId(data.id) })
    .then(data => {
        console.log("posts: ")
        console.log(data);        
        postsAndComments._id = data._id;
        postsAndComments.selectedFile = data.selectedFile
        postsAndComments.author = data.author
        postsAndComments.body = data.body
        postsAndComments.title = data.title
  
        Comment.find({ postId: data._id })
            .then(comments => {
                console.log("comments under a post")
                console.log(JSON.stringify(comments));
                postsAndComments.comments = comments;
                console.log("postsAndComments==>",JSON.stringify(postsAndComments))
                if (postsAndComments.length === 0) {
                    callback(null, null)
                } else {
                    callback(null, postsAndComments);
                }
            })
            .catch(error => {
                console.log(error);
            })
    })
    .catch(error => {
        console.log(error);
    })
};

exports.deletePostData = function (data, callback) {
    console.log("deletePostData in server");
    console.log("KAFKA SERVER deletePostData data:", data.id);

    var posts = mongo.collection('posts');

    posts.deleteOne({
         _id: ObjectId(data.id)
    }, function (err, results) {

        console.log("Post delete from mongo collection", JSON.stringify(results));

        if (err) {
            callback(err, null)
        }
        else {

            if (results.length === 0) {
                callback(null, null)
            } else {
                callback(null, results)
            }
        }
    })
};