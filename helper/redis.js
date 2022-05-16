const redis = require("redis")
const REDIS_PORT = 6379

var hredis = {}

hredis.client = redis.createClient(REDIS_PORT)

hredis.cacheUrl = (req, res, next) => {
  // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  // console.log("oriUrl", oriUrl)

  var oriUrl = req.originalUrl
  var exurl = oriUrl.split("/")
  exurl.splice(0, 1)
  var redisKey = exurl.join(":")

  hredis.client.get(redisKey, (err, data) => {
    if(err) throw err

    if(data !== null) {
      res.send(data)
    }
    else{
      next()
    }
  })
}


module.exports = hredis