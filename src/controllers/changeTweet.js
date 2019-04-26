const Tweet = require('../models/tweet')

class changeTweet
{
    async change(req,res)
    {
        const tweet = await Tweet.findByIdAndUpdate(req.params.id,{descricao : req.body.descricao})
        res.json(tweet)
    }
}

module.exports = new changeTweet