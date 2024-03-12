const TASK = require("../../models/TaskModel");

const getTask = async(req,res)=>{
    try{
        const currentTask = await TASK.findOne({$and:[{userID:req.currentUser._id},{_id: req.params.id}]});
        if(!currentTask){
            return res.status(404).json({
                success: false,
                message: 'Task is deleted by user',
            });
        }
        return res.status(200).json({
            success: true,
            message: currentTask.taskname,
        });
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}

module.exports = getTask