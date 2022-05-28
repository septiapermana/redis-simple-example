require("dotenv").config()
const config = {}

config.redis_address = process.env.REDIS_ADDRESS ? process.env.REDIS_ADDRESS : '127.0.0.1'
config.redis_port = process.env.REDIS_PORT ? process.env.REDIS_PORT : '6317' 

module.exports = config