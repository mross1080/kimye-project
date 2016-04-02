var express = require('express');
var router = express.Router();

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

exports.gradequiz = function(req, res){
	console.log(req.body);
	// var correctAnswers = req.body.answers.split(",")
	// var choices =[];
	// var correctAnswersCount= 0;
	// var message ="Try again";
  //
	// console.log(req.body);
	// choices.push(req.body.answer0);
	// choices.push(req.body.answer1);
	// choices.push(req.body.answer2);
	// choices.push(req.body.answer3);
  //
	// for(var x=0; x < correctAnswers.length; x++ ){
	// 	if(choices[x] == correctAnswers[x]){
	// 		correctAnswersCount++;
	// 	}
	// }
  //
	// console.log("Number of correctAnswers" + correctAnswersCount);

	res.json({"count": 'quizresults'});
}
// router.post('/',function(req,res,next){
//   console.log(req.body)
//   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   console.log(ip)
//   res.json({"message":"hello"});
// })
