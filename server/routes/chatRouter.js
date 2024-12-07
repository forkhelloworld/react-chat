const chatRouter = require('express').Router()
const ChatController = require('../controllers/Chat.controller')

chatRouter.get('/', ChatController.getAllUserChats)

module.exports = chatRouter
