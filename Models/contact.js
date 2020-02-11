const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
First_Name:{
    type:String,
    required:true,
},
Last_Name:{
    type:String,
    required:true,
},
Email:
{
    type:String,
    required:true,
},
Phone:
{
    type:String,
    required:true
},
Message:
{
    type:String,
    required:true
},
Date:{
    type:Date,
    default:Date.now
}
});
const Contact = mongoose.model('contact',ContactSchema);
module.exports.Contact = Contact; 