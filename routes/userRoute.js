var express = require('express');
var router = express.Router();
var bankController = require("../controllers/userController")


router.get('/',bankController.index)
router.post('/submit',bankController.validPage,bankController.submitIndex)
module.exports = router;