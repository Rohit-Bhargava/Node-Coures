const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();


router.post("/signup", UserController.createUser
//  (req, res, next)=>{
//     bcrypt.hash(req.body.password, 10)
//     .then(hash=>{
//         const user = new User({
//             email: req.body.email,
//             password: hash, 
//         });
//         user.save().then(result=>{
//             res.status(201).json({
//                 message: 'save succesfully',
//                 result: result
//             });
//         }).catch(err=>{
//             res.status(500).json({
//                error: err
//             })
//         })
//     })

// }
);
router.post("/login", UserController.userLogin);

module.exports = router;