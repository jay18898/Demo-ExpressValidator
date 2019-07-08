var express = require('express');
var router = express.Router();
var bankController = require("../controllers/userController")

router.get('/',bankController.index)
module.exports = router;