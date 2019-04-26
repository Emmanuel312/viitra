const Tweet = require('../models/tweet')

class addTweet
{
    async add(req,res)
    {
        const tweet = await Tweet.create(req.body)
        res.json(tweet)
    }
}

module.exports = new addTweet