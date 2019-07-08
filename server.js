var express = require("express")
var path = require("path")
const app = express()

// view engine setup        
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
