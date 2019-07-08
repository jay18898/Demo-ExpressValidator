var bankController = {};
const { check, validationResult } = require('express-validator');

bankController.index = (req, res) => res.render(`../views/index`)
bankController.validPage = [
    // username must be an email
    check('emailID', "Invalid email address").isEmail(),
    // password must be at least 5 chars long
    check('password', 'Password is atleast five character').isLength({ min: 5 }),
    check('contactNo',"Invalid contact no").isLength({max:10,min:10})
];
bankController.submitIndex = (req, res) => {

    const errors = validationResult(req);
    

    console.log(errors.array())

    return res.render('../views/index', { errors: errors.array().map((value, key) => value.msg)})


};
module.exports = bankController