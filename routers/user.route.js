const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/getoneuser",userController.getoneuser);

module.exports = router;
