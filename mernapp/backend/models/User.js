const mongoose = require('mongoose');
const { type } = require('os');

const { Schema } =mongoose;

const UserSchema = New Schema({
    name.{
        type: String,
        required:true,
    },
    location:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
});