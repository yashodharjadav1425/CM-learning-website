const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,

    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

// secure your password

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }catch(error){
        next(error)
    }
})

// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
                expiresIn : "30d",
                
        }
    );
    } catch (error) {
        console.error(error);
    }
}
// define model or collection name

const User = new mongoose.model("User", userSchema, 'registers');
module.exports = User;