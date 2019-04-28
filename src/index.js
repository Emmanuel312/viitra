const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb+srv://viitra:<viitra>@cluster0-pqrut.mongodb.net/test?retryWrites=true', {useNewUrlParser : true})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

app.listen(process.env.PORT  || 3000)