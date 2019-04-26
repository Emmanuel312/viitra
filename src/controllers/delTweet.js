const Tweet = require('../models/tweet')

class delTweet
{
    async del(req,res)
    {
        const tweet = await Tweet.findByIdAndDelete(req.params.id)
        res.json(tweet)
    }
}

module.exports = new delTweet