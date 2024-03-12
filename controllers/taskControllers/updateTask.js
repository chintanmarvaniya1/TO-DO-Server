const TASK = require("../../models/TaskModel");

const updateTask = async(req,res)=>{
    try {
        const currentStatus =await TASK.findOne({$and:[{userID:req.currentUser._id},{_id: req.params.id}]});
        await TASK.findOneAndUpdate(
            {$and:[{userID:req.currentUser._id},{_id: req.params.id}]},
            {$set : { isCompleted: !currentStatus.isCompleted}}
        ).then((result)=>{
            return res.status(200).json({
                success: true,
                message: `Task With id ${result.id} updated Succesfully`,
            });
        }).catch((error)=>{
            return res.status(500).json({
                success: false,
                message: error.message,
                error: error
            });
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}

module.exports = updateTask;