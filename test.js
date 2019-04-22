const MongoClient = require("mongodb").MongoClient
require("dotenv").config()

console.log(process.env.MFLIX_NS)
;(async function() {
  try {
    const conn = await MongoClient.connect(process.env.MFLIX_DB_URI, {
      useNewUrlParser: true,
    })
    const movies = await conn.db(process.env.MFLIX_NS).collection("movies")

    const countries = ["Russia", "Japan", "Mexico"]
    const cursor = await movies.find(
      { countries: { $in: countries } },
      { projection: { title: 1 } },
    )
    const result = await cursor.toArray()
    console.log(result.length)

    const cursor2 = await movies.find(
      { countries: { $in: countries } },
      { projection: { _id: 0, title: 1, cast: 1 } },
    )
    const result2 = await cursor2.toArray()
    console.log(result2.length)
  } catch (err) {
    console.log(err.message)
  }
})()
