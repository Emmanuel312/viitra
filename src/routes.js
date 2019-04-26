const express = require('express')
const routes = express.Router()
const addTweet = require('./controllers/addTweet')
const listTweet = require('./controllers/listTweet')
const delTweet = require('./controllers/delTweet')
const searchTweet = require('./controllers/searchTweet')
const changeTweet = require('./controllers/changeTweet')

routes.post('/tweet', addTweet.add)
routes.get('/tweet', listTweet.list)
routes.delete('/tweet/:id', delTweet.del)
routes.get('/tweet/:id', searchTweet.search)
routes.put('/tweet/:id', changeTweet.change)

module.exports = routes