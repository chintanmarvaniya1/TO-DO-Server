const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const USER = {
    firstname: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase: true },
    phone:{type:String,required:true},
    email: {type: String,unique: true,lowercase: true,trim: true,required: true},
    password: {type: String,required: true},
    isLoggedIn: { type: Boolean,default:false },
}
const userSchema = new Schema(USER)


module.exports = mongoose.model('USER', userSchema);
