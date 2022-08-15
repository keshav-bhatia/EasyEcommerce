// const mongoose = require("mongoose")
//  mongoose.connect("mongodb://127.0.0.1:27017/easyecom", {
//    // mongoose.connect("mongodb+srv://deafen:atlasatlas1@cluster1.f1ssl.mongodb.net/another?retryWrites=true&w=majority",{
// useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })




require("dotenv").config();
const express = require("express");
const app = express();
const path =require("path");
 //require("./index");
//const router = require("./routes/signup");
//const bcrypt = require('bcrypt');

const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const mongoose= require('mongoose');


mongoose
  .connect(process.env.DB_CONNECTION_URL,
    {useNewUrlParser: true,
        useCreateIndex: true,
         useUnifiedTopology: true
    })     
  .then(() => {
    console.log("Connected to MongoDb...");
  })
  .catch((err) => {
    console.log("Could not connected to the MongoDB", err);
  });