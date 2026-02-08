const express=require('express')
const cors=require('cors')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('hii')
})

module.exports=app