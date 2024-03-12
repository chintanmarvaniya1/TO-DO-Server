const USER = require("../../models/UserModel");
const hashing = require("../../utilities/hashThePasword");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === undefined || password === undefined) {
      return res.status(409).json({
        success: false,
        message: 'Missing credentials.',
      });
    }
    const isValidUser = await USER.findOne({ email: email }).lean();
    if (!isValidUser) {
      return res.status(404).json({
        success: false,
        message: 'No account with this email has been registered.',
      });
    }
    const isMatching = hashing.validPassword(password, isValidUser.password);
    if (!isMatching) {
      return res.status(403).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    const result = await USER.findOneAndUpdate(
      { _id: isValidUser._id },
      { $set: { isLoggedIn: true }},
    ).lean();

    const token = jwt.sign(
      {
        id: isValidUser._id,
      },
      process.env.JWT_TOKEN,
      { expiresIn: '10m' }
    );

    return res.status(200)
      .cookie('token', token)
      .json({
        success: true,
        message: 'Login Successfull',
        result: {
          _id: result._id,
          firstname: result.firstname,
          lastname: result.lastname,
          phone: result.phone,
          email: result.email,
          isLoggedIn: true,
          token:token
        },
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error
    });
  }
};

module.exports = login;
