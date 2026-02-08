const mongoose=require('mongoose')

const connectToDb=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`mongo connected`)
    })
    .catch((err)=>{
        console.log('error while mongo connected',err)
    })
}
module.exports=connectToDb