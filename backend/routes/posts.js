const express = require("express");
const PostController = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");



const router = express.Router();

router.post( "", checkAuth, extractFile, PostController.createPost
  // multer({ storage: storage }).single("image"),
  // (req, res, next) => {
  //   const url = req.protocol + "://" + req.get("host");
  //   const post = new Post({
  //     title: req.body.title,
  //     content: req.body.content,
  //     imagePath: url + "/images/" + req.file.filename
  //   });
  //   post.save().then(createdPost => {
  //     res.status(201).json({
  //       message: "Post added successfully",
  //       post: {
  //         ...createdPost,
  //         id: createdPost._id
  //       }
  //     });
  //   });
  // }
);

router.put("/:id", checkAuth, extractFile, PostController.updatePost
  // multer({ storage: storage }).single("image"),
  // (req, res, next) => {
  //   let imagePath = req.body.imagePath;
  //   if (req.file) {
  //     const url = req.protocol + "://" + req.get("host");
  //     imagePath = url + "/images/" + req.file.filename
  //   }
  //   const post = new Post({
  //     _id: req.body.id,
  //     title: req.body.title,
  //     content: req.body.content,
  //     imagePath: imagePath
  //   });
  //   console.log(post);
  //   Post.updateOne({ _id: req.params.id }, post).then(result => {
  //     res.status(200).json({ message: "Update successful!" });
  //   });
  // }
);

router.get("", PostController.getPosts
// (req, res, next) => {
//   Post.find().then(documents => {
//     res.status(200).json({
//       message: "Posts fetched successfully!",
//       posts: documents
//     });
//   });
);

router.get("/:id", PostController.updatePost
//  (req, res, next) => {
//   Post.findById(req.params.id).then(post => {
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(404).json({ message: "Post not found!" });
//     }
//   });
// }
);

router.delete("/:id", PostController.deletePost
//  (req, res, next) => {
//   Post.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Post deleted!" });
//   });
// }
);

module.exports = router;
