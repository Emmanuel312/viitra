const Tweet = require('../models/tweet')

class ListTweet
{
    async list(req,res)
    {
        const tweets = await Tweet.find({})
        res.json(tweets)
    }
}

module.exports = new ListTweet