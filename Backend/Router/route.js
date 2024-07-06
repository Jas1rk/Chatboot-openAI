const express = require('express')
const chatRouter = express.Router()
const chatController = require('../Controller/chatController')

chatRouter.get('/chat',chatController.getMessages)
chatRouter.post('/chat',chatController.postMessage)


module.exports = chatRouter
