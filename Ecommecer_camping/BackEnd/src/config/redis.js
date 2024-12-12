const redis = require('redis');
require("dotenv").config();

const client= redis.createClient({
    port: process.env.PORT_REDIS ? process.env.PORT_REDIS : 6379,
    host: process.env.REDIS_URL ? process.env.REDIS_URL : localhost,
});
client.ping(function (err, pong) {
    console.log(pong);
})

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on("error", (error) => {
    console.error(error);
});

module.exports = client