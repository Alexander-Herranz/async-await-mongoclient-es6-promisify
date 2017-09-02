require('dotenv').config()
const {Db} = require("./db/db")
const db = new Db(process.env.DB_NAME)

testMongoAPI()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function testMongoAPI() {
  try {
    const dbGetCol = await db.getCollection(process.env.COLLECTION_NAME)
    let query1 = {}
    query1.hola=getRandomInt(1,999)
    await db.insertInCollection(dbGetCol, query1)
    let query2 = {}
    query2.hola=getRandomInt(1,999)
    query2.uno="dos"
    await db.insertInCollection(dbGetCol, query2)
    let query3 = {}
    query3.hola=getRandomInt(1,999)
    query3.uno="dos"
    await db.insertInCollection(dbGetCol, query3)
    let query4 = {}
    query4.hola=getRandomInt(1,999)
    query4.uno="dos"
    await db.insertInCollection(dbGetCol, query4)
    let query5 = {}
    query5.hola=getRandomInt(1,999)
    await db.insertInCollection(dbGetCol, query5)
    let query6 = {}
    query6.hola=getRandomInt(1,999)
    await db.insertInCollection(dbGetCol, query6)
    let query7 = {}
    query7.hola=getRandomInt(1,999)
    await db.insertInCollection(dbGetCol, query7)
    await db.getOneFromQuery(dbGetCol, query2)
    let cond1 = {}
    cond1.uno="dos"
    await db.getAllFromQuery(dbGetCol, cond1)
    await db.listCollecton(dbGetCol)
    await db.dropCollection(dbGetCol)
  } catch(error){ console.log(error) }
}
