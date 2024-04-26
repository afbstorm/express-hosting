const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.route('/signup')
    .post(usersController.register)

router.route('/signin')
    .post(usersController.login)

module.exports = router;
