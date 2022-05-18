const redis = require("redis")
const config = require("../configs/config")
const REDIS_ADDRESS = config.redis_address
const REDIS_PORT = config.redis_port

const redis_url = `redis://${REDIS_ADDRESS}:${REDIS_PORT}`

var hredis = {}

hredis.client = redis.createClient({
  url: redis_url
})

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