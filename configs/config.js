require("dotenv").config()
const config = {}

config.redis_address = process.env.REDIS_ADDRESS
config.redis_port = process.env.REDIS_PORT

module.exports = config