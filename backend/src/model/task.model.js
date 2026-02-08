const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    todoWork:{
        required:true,
        type:String
    },
    todoDate:{
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

const todoModel=mongoose.model('todo',todoSchema)

module.exports=todoModel;