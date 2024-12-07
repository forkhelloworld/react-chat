const apiRouter = require('express').Router()
const userRouter = require('./userRouter')
const chatRouter = require('./chatRouter')

apiRouter.use('/users', userRouter)
apiRouter.use('/chats', chatRouter)

module.exports = apiRouter
