const login = require('./login');
const signup = require('./signup');

const authJwtController = {
    login,
    signup
  };


module.exports = authJwtController;
  