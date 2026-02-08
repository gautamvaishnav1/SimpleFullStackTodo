const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    todoName:{
        required:true,
        type:String
    },
    todoCompleteDate:{
        required:true,
        type:Date,
        default:Date.now()
    },
    todoComplete:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const todoTaskModel=mongoose.model('todo',todoSchema)

module.exports=todoTaskModel;