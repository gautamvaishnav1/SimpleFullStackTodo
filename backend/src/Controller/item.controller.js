const todoTaskModel=require('../model/task.model')

exports.createTask= async(req,res)=>{
    try {
    const{todoName,todoCompleteDate,todoComplete}=req.body;
    const result=await todoTaskModel.create({todoName,todoCompleteDate,todoComplete})
        res.status(201).json({
            message:"todo created successFully",
            todo:{
                id:result._id,
                todoName:result.todoName,
                todoComplete:result.todoComplete,
                todoCompleteDate:result.todoCompleteDate
            },
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
        
    }

}