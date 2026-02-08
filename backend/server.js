require('dotenv').config()
const app = require('./src/app');
const connectToDb = require('./src/db/connection.db');


connectToDb()

const PORT=process.env.PORT||3000;

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`your server ${PORT}`)
})