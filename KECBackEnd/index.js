var express = require("express");
var app = express();
const PORT = 3001;

var path = require('path');

var mdb = require('mongoose');
mdb.connect("mongodb://localhost:27017").then(()=>{
  console.log("MongoDB Connection successful");
}).catch((err)=>{
  console.log("Check your Connection String");
  console.log(err);
})

app.get('/',(req,res)=>{
  res.send("Welcome to Backend Server");
})

app.get('/json',(req,res)=>{
  res.json({server: "Welcome to Backend Server", url:"http://localhost:3001",port:3000});
})

app.get('/static',(req,res)=>{
  console.log(__dirname);
  res.sendFile(path.join(__dirname,"index.html"));
})


app.listen(PORT,()=>{
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}/ `);
});