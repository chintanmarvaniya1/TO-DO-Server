const TASK = require("../../models/TaskModel");

const addTask = async (req, res) => {
    try {
        const taskname = req.body.taskname;
        if (!taskname) {
            return res.status(400).json({
                success: false,
                message: 'Required fields are not supplied'
            });
        }
        await TASK.create({
            userID: req.currentUser._id,
            taskname: taskname,
            isCompleted: false
        }).then((success) => {
            return res.status(200).json({
                success: true,
                message: 'Task created!',
                taskID: success.id
            });
        })
        .catch((error) => {
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

module.exports = addTask;























// const USER= require("../../models/UserModel");
// const hashing = require("../../utilities/hashThePasword");

// const signup = async (req, res) => {
//     try {
//         const { firstname, lastname, phone, email, password } = req.body;
//         if (firstname===undefined || lastname===undefined || phone===undefined || email===undefined || password===undefined) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Required fields are not supplied'
//             });
//         }
//         if (await USER.findOne({ email: email })) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User Already Exist'
//             });
//         }
//         USER.create({
//             firstname:firstname,
//             lastname:lastname,
//             phone:phone,
//             email:email,
//             password:hashing.generateHash(password),
//         }).then((success)=>{
//             return res.status(200).json({
//                 success: true,
//                 message: 'User created!',
//                 userID:success.id
//             });
//         })
//         .catch((error)=>{
//             return res.status(500).json({
//                 success: false,
//                 message: error.message,
//                 error: error
//             });
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//             error: error
//         });
//     }
// };

// module.exports = signup;