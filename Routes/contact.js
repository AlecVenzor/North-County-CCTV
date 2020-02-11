const express  = require("express");
const mongoose = require("mongoose");
const { check, validationResult } = require('express-validator');
const router = express.Router();
// load User Model
require("../Models/contact")
const contact = mongoose.model('contact')

router.get('/', (req, res) =>
  {
    res.render('contact')
  })
  router.get("/submit",(req,res) =>
  {
    res.render('submit')
  })
  router.post('/',
  [
    check('First_Name').isLength({min:3}).trim().escape().isAlpha(),
    check('Last_Name').isLength({min:3}).trim().escape().isAlpha(),
    check('Email').isEmail().normalizeEmail(),
    check('Phone').isLength({min:10}).trim().escape().isMobilePhone(),
    check('Message').trim().escape().isLength({min:3}),

  ],(req,res) =>
  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    let formData = new contact( 
    {
      First_Name:req.body.First_Name,
      Last_Name:req.body.Last_Name,
      Email:req.body.Email,
      Phone:req.body.Phone,
      Message:req.body.Message
    })
    formData.save((err) =>
    {
      if(err)
      {
        console.log("Their was a Error Saving the data")
      }
      console.log("Save Successful")
      res.redirect("/contact/submit",)
    })
  })
module.exports = router; 