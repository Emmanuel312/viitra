const mongoose = require('mongoose')

const tweet = new mongoose.Schema(
{
    descricao : String,
    data:
    {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tweet',tweet)
