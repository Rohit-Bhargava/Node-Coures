const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require('./model/post');


const app = express();

mongoose.connect('mongodb://localhost:27017/MEAN').then(()=>{
  console.log('connected!');
}).catch(()=>{
  console.log('not connected!')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents=>{
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents,
    });   
  });  
});

app.put("/api/posts/:id", (req, res, next)=>{
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({message: "Update successful!"});
    
  });
});

app.delete('/api/posts/:id', (req, res, next)=>{
  Post.deleteOne({_id: req.params.id}).then(resulte=>{
    console.log(resulte);
    res.status(200).json({message: 'deleted!'});
  });
});

module.exports = app;
