const userRouter = require('express').Router()
const UserController = require('../controllers/User.controller')

userRouter.get('/', UserController.getUserData)

module.exports = userRouter
