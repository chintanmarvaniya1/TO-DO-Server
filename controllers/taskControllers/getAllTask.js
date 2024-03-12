const TASK = require("../../models/TaskModel");

const getAllTask = async (req, res) => {
    try {
        const taskList = await TASK.find({ userID: req.currentUser._id }).lean()
        if (!taskList) {
            return res.status(200).json({
                success: true,
                message: 'No Data Available for Request',
                taskList:taskList
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Data found for Current User',
            taskList:taskList
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}

module.exports = getAllTask;