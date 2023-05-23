const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const uri = 'mongodb+srv://jos3:p3p3@cluster0.0xkotzd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri)
.then((result) => {
console.log("conectado")
})
.catch((error) => {
console.log("tu error es :"+ error);
});


