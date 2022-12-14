var ejs = require("ejs");
var mysql = require('../config/MySQL');
var bcrypt= require('bcrypt-nodejs');
var uuidv4 = require("uuid/v4");

exports.checkInput = function(req, res){
    console.log("Check Input");

    var id = 'ady@test.com';//req.body.userEmail;
    var pwd = bcrypt.hashSync('ady@test.com');
    var fn = 'ady@test.com';//req.body.firstName;
    var ln = 'ady@test.com';//req.body.lastName;
    var bdate = 'ady@test.com';//req.body.dob;
    var gender = 'ady@test.com';//req.body.gender;
    var edu = 'ady@test.com';//req.body.edu;
    var work = 'ady@test.com';//req.body.work;
    var inter = 'ady@test.com';//req.body.inter;

    /* var id = req.param("userEmail");
    var pwd = bcrypt.hashSync(req.param("password"));
    var fn = req.param("firstName");
    var ln = req.param("lastName");
    var bdate = req.param("dob");
    var gender = req.param("gender"); */
    var pk_Id = uuidv4();
    console.log("User wants to register with email - "+id);
    console.log("User wants to register with fname - "+fn);
    console.log("User wants to register with password hash - "+pwd);
    console.log("User wants to register with lname - "+ln);
    console.log("User wants to register with bdate - "+bdate);
    console.log("User wants to register with gender - "+gender);

    var sqlQuery = "insert into users (userId, userEmail, userPassword, userFirstName, userLastName, userBDate, userGender) values ('"+pk_Id+"', '"+id+"', '"+pwd+"', '"+fn+"', '"+ln+"', '"+bdate+"', '"+ gender +"')";

    mysql.saveData(sqlQuery, function(err,results) {
        console.log('results while saving in mqsql',results);
        if(err){
            throw err;
        }

         {
            if (results.affectedRows === 1) {
                req.aaj.username = id;
                req.aaj.isLoggedIn = true;

                console.log("valid registration");
                res.status(200).json({"results": results});
            }
            else {
                req.aaj.destroy();
                console.log('Session Destroyed');
                console.log("Error occurred");
                res.status(400).send(err);
            }
        }
    });
}