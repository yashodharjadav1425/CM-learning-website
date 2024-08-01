const express = require("express");
const router = express.Router();
// const {home} = require("../controllers/auth-controllers");
const auth = require("../controllers/auth-controllers");
const validate = require("../middleware/validate-middleware");
const signupSchema = require("../validators/auth-validator");  
const authMiddleware = require("../middleware/auth-middleware"); 
// first method
// router.get("/", (req, res) =>{
//     res.status(200).send("response get from home page.");
// });


// second method

// router.route("/").get(
//     (req, res) => {
//         res.status(200).send("response get from another method using second method");

//     }
// );

// router.route('/register').get( (req, res) => {
//     res.status(200).send('GET request to the register of our MERN');
//   });

// router.route('/login').get((req, res) => {
//     res.status(200).send('GET request to the help of our MERN');
//   });

// router.route('/find').get((req, res) => {
//     res.status(200).send('GET request to the find of our MERN');
//   });

// using controllers

router.route("/").post(auth.home);

router.route("/register").post(validate(signupSchema), auth.register);

router.route("/login").post(auth.login);

router.route("/user").get(authMiddleware, auth.user);

module.exports = router;