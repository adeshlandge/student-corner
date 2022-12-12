var Post = require('../models/post');
var Comment = require('../models/comment');
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;
var mongo = require("../config/mongo");

exports.createComment = function (data, callback) {
    console.log("KAFKA SERVER create comment data:", data);
    var comment = new Comment();
    comment.comment = data.comment;
    comment.postId = data.postId;
    comment.author = data.author;

    console.log("KAFKA SERVER create comment variable:", comment);

    comment.save(function (err) {
        if (err) {
            console.log("error in create comment");
            console.log(JSON.stringify(err));
            callback(err);
        }
        else {
            console.log("KAFKA SERVER: createcomment", comment);
            callback(null, comment);
        }
    }
    );
};


//added new code
exports.listComments = function (message, callback) {
    console.log("list Comments in server");
    console.log("list Comments message in server", message);

    var comment = mongo.collection('comments');

    comment = comment == null ? [] : comment;


    comment.findOne({
        postId: message.id
    }, function (err, results) {

        console.log("comments from mongo collection", JSON.stringify(results));

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