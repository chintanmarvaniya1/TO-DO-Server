const jwt = require("jsonwebtoken");
const USER = require("../models/UserModel");

const validateToken = async (req, res, next) => {
    try {
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'No authentication token, authorization denied.',
                jwtExpired: true,
            });
        }
        const token = authHeader.split(" ")[1]
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        if (!verified) {
            return res.status(401).json({
                success: false,
                message: 'Token verification failed, authorization denied.',
                jwtExpired: true,
            });
        }

        const user = await USER.findOne({ _id: verified.id });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Admin doens't Exist, authorization denied.",
                jwtExpired: true,
            });
        }else{
            const currentUser = {
                _id:user._id,
                firstname:user.firstname,
                lastname:user.lastname,
                phone:user.phone,
                email:user.email,
            }
            req.currentUser = currentUser;
            next();
        }

    } catch (error) {
        return res.status(503).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}

module.exports = validateToken;