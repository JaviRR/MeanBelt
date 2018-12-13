var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();


mongoose.connect("mongodb://localhost/authors2");
var xxxSchema = mongoose.Schema({
    name: {type: String, required: [true, "Name is a mandatory field."], minlength : [3, "Name mut have at least 3 characters"]}
})
var XXX = mongoose.model("XXX", xxxSchema);

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public/dist/public'));

app.all('*', (req,res,next) =>{
    res.sendFile(path.resolve("./public/dist/public/index.html"));
})
app.listen(8000, function(){
    console.log("Listening on port 8000");
})