const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post( "/register" , async (req,res) => {
  try{
    console.log("Req has been posted.");
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch(err){
    console.log("There has been an error!");
    res.status(500).json(err);
  }
});

//LOGIN


module.exports = router;