### Getting started
You can just install in your project with:

```sh
$npm install async-await-mongoclient-es6-promisify --save
```
and simply require it where you need it in your node js application:
```sh
const {DB} = require ('async-await-mongoclient-es6-promisify')
const db = new Db("DATABASE_NAME")
db.getCollection('mycollectionName')

```

https://www.npmjs.com/package/async-await-mongoclient-es6-promisify

# mongoClient-es6-promisify

mongoClient-es6-promisify is an open and clean ES6 class to connect with your
mongo database, that you can easily use and even extend, to use with async/await
features available natively in node v8.

## API of functions:
Functions are pretty descriptive by their name.

#### Functions:
  - getCollection(collectionName)
  - insertInCollection(collection, data)
  - getOneFromQuery (collection, data)
  - getAllFromQuery(collection, data)
  - listCollecton(collection)
  - dropCollection(collection)

#### Params  
 - collectionName: <String>
 - data: <Object> Any json object, use JSON.parse(obj) if needed.
 - collection:
 Collection name and connection management function, only need to be called once. Connection is also only once called by design.

  ```sh
    async getCollection(collectionName) {
      try{
        const db = await connection(process.env.MONGO_CONNECTION_STRING+this.dbName )
        return await db.collection(collectionName)
      } catch(error) { console.log("getCollection DB Error!") }
    }
  ```

### Test the module yourself
In test/test.js you can see the basic use of the app. You can run this example with:
```sh
$npm install
$npm test
```

```sh
require('dotenv').config()
console.log(process.env.MONGO_CONNECTION_STRING)
const {Db} = require("../db/db")
const db = new Db('testdatabase2')

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

```

In Production environments (or whenever) edit then .env file in the root directory of the library and change TEST variable to anything different from TEST, and no logs will appear.

### Motivation
I was just writting a node app with async/await features for fun, and find useful to have a library ready to do it (I didn't really find any useful in the web).

### Todos

 - Add more helper functions
 - Any contribution will be appreciated.

License
----

MIT
