const TASK = require("../../models/TaskModel");

const deleteTask = async(req,res)=>{
    try {
        await TASK.findOneAndDelete({$and:[{userID:req.currentUser._id},{_id: req.params.id}]})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                message: `Task With id ${result.id} Deleted Succesfully`,
            });
        })
        .catch((error)=>{
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

module.exports = deleteTask;