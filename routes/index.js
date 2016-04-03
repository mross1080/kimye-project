var express = require('express');
var router = express.Router();
var redis = require("redis"),
  client = redis.createClient();

/* GET home page. */
exports.hello = function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)
  console.log(req.body)
  res.render("index");
};

exports.hi = function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)
  console.log(req.body)
  res.json( { title: 'Express' });
};

exports.hero = function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)
  console.log(req.body)
  res.json( { title: 'Express' });
};

exports.geturls = function(req, res){

  console.log(req.params)
  var key = req.query.q;
  console.log(req.query.q)


// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

// client.rpush(['url1', '//giphy.com/embed/VlSgY6KVDtLP2', '//giphy.com/embed/FDislOmnXSE36','//giphy.com/embed/lHWmI2pvofSEg','//giphy.com/embed/soZTCYfFYego0'], function(err, reply) {
//     console.log(reply); //prints 2
// });

client.lrange('url' + key, 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
    res.json({"urls": reply});

});


	// res.json({"count": 'quizresults'});
}
