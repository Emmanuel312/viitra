const Tweet = require('../models/tweet')

class searchTweet
{
    async search(req,res)
    {
        const tweet = await Tweet.findById(req.params.id)
        res.json(tweet)
    }
}

module.exports = new searchTweet