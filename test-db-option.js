const MongoClient = require("mongodb").MongoClient
require("dotenv").config()

console.log(process.env.MFLIX_DB_URI)

/**
 * Simulate the situation in Final Question 3
 * connectTimeoutMS = 100 is not long enough
 */
;(async function() {
  try {
    const testClient = await MongoClient.connect(process.env.MFLIX_DB_URI, {
      connectTimeoutMS: 10000, // instead of 100
      retryWrites: true,
      useNewUrlParser: true,
    })
    const clientOptions = testClient.s.options
    const {
      ssl,
      authSource,
      retryWrites,
      user,
      connectTimeoutMS,
    } = clientOptions
    console.log(ssl)
    console.log(authSource)
    console.log(retryWrites)
    console.log(user)
    console.log(connectTimeoutMS)
  } catch (err) {
    console.log(err.message)
  }
})()
