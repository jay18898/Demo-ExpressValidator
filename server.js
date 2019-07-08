var express = require("express")
var path = require("path")
var userRoute =require("./routes/userRoute")
var bodyParser = require('body-parser');
const app = express()

// view engine setup        
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',userRoute)

app.listen(3000, () => console.log('Listning on Port 3000'))


module.exports = app;
