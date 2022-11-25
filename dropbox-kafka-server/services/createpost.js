var Post = require('../models/post');
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;

//new code
var mongo = require("../config/mongo");

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

    posts.find({
    }).toArray(function (err, results) {

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

    posts.findOne({
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