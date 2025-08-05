const Redis = require("ioredis");

const dotenv = require("dotenv");

const redis = new Redis();
module.exports = redis;
