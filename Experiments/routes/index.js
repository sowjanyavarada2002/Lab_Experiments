var express = require('express');
var path=require('path');
var mysql=require('../database/db');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send("<h1>Hello this is express developed by sowji</h1>");
//   // res.sendFile(path.resolve("public/loginform.html"));
// });
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // // res.send("<h1>Hello this is express developed by sowji</h1>");
  // res.sendFile(path.resolve("public/index.html"));
// });


// router.get('/signup', function(req, res, next) {
//   res.sendFile(path.resolve("public/signup.html"));
// });

// router.get('/login', function(req, res, next) {
//   res.sendFile(path.resolve("public/login.html"));
// });

// router.get('/contactus', function(req, res, next) {
//   res.sendFile(path.resolve("public/contactus.html"));
// });

// router.post('/loginsubmit', function(req, res, next) {
//   var output = "Username: "+req.body.username +"<br>Password :"+req.body.pwd
//   res.send(output);
//   // res.send(req.body);
// });

// router.get('/registrationform', function(req, res, next) {
//   res.sendFile(path.resolve("public/registrationform.html"));
// });

// router.post('/loginsubmit2', function(req, res, next) {
//   // var output = "Username: "+req.body.username +"<br>Password :"+req.body.pwd
//   // res.send(output);
//   var output = "<table><tr><td>registration number :</td><td>"+req.body.RegNo+"</td></tr><tr><td>Name :</td><td>"+req.body.Name+"</td></tr><tr><td>Gender :</td><td>"+req.body.gender+"</td></tr><tr><td>Languages : </td><td>"+req.body.language+"</td></tr><tr><td>Branch :</td><td>"+req.body.branch+"</td></tr><tr><td>Password :</td><td>"+req.body.pwd+"</td></tr></table>"
//   res.send(output);
//   // res.send(req.body);
// });

router.get('/newejs', function(req, res, next) {
  res.render('index',{title:"Embedded Java Script code template"});
});

router.get('/fbposts', function(req, res, next) {
  var posts=[
    {tilte:"HBD",message:"Happy BirthDay to you"},
    {title:"Casual",message:"Hello how are you?"},
    {title:"Announcement",message:"Chorbazar movie is releasing on june 24"},
    {title:"Greetings",message:"Greetings of the day"},
    {title:"Events",message:"Birthday party"}
  ];
  res.render('index',{title:"Facebook posts",posts:posts});
});

// router.get('/selectqry', function(req,res,next){
//   mysql.getConnection((err, connection) => {
//   if(err) throw err;
//   connection.query('SELECT * from student_details limit 2', (err, rows) => {
//     connection.release(); 
//     if(err) throw err;
//       res.render('datadisplay', {rows:rows,title:"Student Details"});
//       //res.send(rows);
//   });
// });
//})

// router.get('/exjs1', function(req, res, next) {
//   res.sendFile(path.resolve("./public/exjs.html"));
// });

// router.post('/selectqry', function(req,res,next){
//   var reg_no = req.body.db;

//   mysql.getConnection((err, connection) => {
//   if(err) throw err;
//   connection.query('SELECT * from student_details where regno='+reg_no, (err, rows) => {
//     connection.release(); 
//     if(err) throw err;
//       res.render('datadisplay', {rows:rows,title:"Student Details"});
//       //res.send(rows);
//   });
// });
// });

router.get('/insertqry1', function(req,res,next){
  mysql.getConnection((err, connection) => {
    let insertQuery = 'INSERT INTO student_details VALUES (?,?,?,?,?,?)';
    let iq = connection.format(insertQuery,[5446,'ayesha','EEE','20b01a5448@svecw.edu.in',1234561,92]);
    connection.query(iq,(err, result) => {
      if(err) { console.error(err);  }
      res.send("Rows are inserted:"+result["affectedRows"]);
  });
});

});

router.get('/updateqry1', function(req,res,next){
  mysql.getConnection((err, connection) => {
    let updateQuery = 'Update student_details set name=? Where regno=?';
    let uq = connection.format(updateQuery,['syamala',5446]);
    connection.query(uq,(err, result) => {
    if(err) { console.error(err);  }
      res.send("Rows are updated:"+result["affectedRows"]);
  });
});
    
});

router.get('/deleteqry1', function(req,res,next){
  mysql.getConnection((err, connection) => {
    let deleteQuery = 'Delete from student_details Where regno=?';
    let dq = connection.format(deleteQuery,[5448]);
    connection.query(dq,(err, result) => {
    if(err) { console.error(err);  }
      res.send("Rows are deleted:"+result["affectedRows"]);
  });
});
    
});

module.exports = router;