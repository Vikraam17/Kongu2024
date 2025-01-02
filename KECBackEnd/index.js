var express = require("express");
var app = express();
const PORT = 3001;
app.get('/',(req,res)=>{
  res.send("Welcome to Backend Server");
})

app.get('/JSON',(req,res)=>{
  
  res.json({server: "Welcome to Backend Server", url:"http://localhost:3001",port:3000});
})


app.listen(PORT,()=>{
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}/ `);
});