const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//let nav_content=['materials','disciplines','squad','video','students','abitur','science','contacts'];
//let n,i; 
//n=nav_content.length;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/materials',function(req,res){
  res.sendFile(path.join(__dirname+'/materials/index.html'));
});

router.get('/trophies',function(req,res){
  res.sendFile(path.join(__dirname+'/trophies/index.html'));
});

router.get('/squad',function(req,res){
  res.sendFile(path.join(__dirname+'/squad/index.html'));
});

router.get('/video',function(req,res){
  res.sendFile(path.join(__dirname+'/video/index.html'));
});
 
router.get('/students',function(req,res){
  res.sendFile(path.join(__dirname+'/students/index.html'));
});

router.get('/abitur',function(req,res){
  res.sendFile(path.join(__dirname+'/abitur/index.html'));
});

router.get('/science',function(req,res){
  res.sendFile(path.join(__dirname+'/science/index.html'));
});

router.get('/contacts',function(req,res){
  res.sendFile(path.join(__dirname+'/contacts/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8084);
 
console.log('Running at Port 8084');