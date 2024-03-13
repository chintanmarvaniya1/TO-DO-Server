const getStatus = async(req,res)=>{
    try{
        return res.status(200).json({
            success: true,
            Routes:[
                {
                    name:"sign-up",
                    path:"api/user/signup",
                    method:"POST",
                    type:"PUBLIC"
                },
                {
                    name:"login",
                    path:"/api/user/login",
                    method:"POST",
                    type:"PUBLIC"
                },
                {
                    name:"add-task",
                    path:"/api/task/addtask",
                    method:"POST",
                    type:"PRIVATE"
                },
                {
                    name:"get-all-task",
                    path:"api/task/getalltask",
                    method:"GET",
                    type:"PRIVATE"
                },
                {
                    name:"get-single-taskk",
                    path:"/api/task/gettask/:id",
                    method:"GET",
                    type:"PRIVATE"
                },
                {
                    name:"update-task",
                    path:"/api/task/updatetask/:id",
                    method:"PUT",
                    type:"PRIVATE"
                },
                {
                    name:"delete-task",
                    path:"/api/task/deletetask/:id",
                    method:"DELETE",
                    type:"PRIVATE"
                }
            ]
        });
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}

module.exports = getStatus