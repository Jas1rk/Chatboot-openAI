const express = require('express')
const chatRouter = express.Router()
const chatController = require('../Controller/chatController')

chatRouter.get('/',chatController.getMessages)
chatRouter.post('/',chatController.postMessage)


module.exports = chatRouter
