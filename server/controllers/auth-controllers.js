// controllers
const User = require("../models/user-model");
const bcrypt = require('bcrypt');

const home = async(req, res) => {
    try {
        res.send("response get from home page")
    } catch (error) {
        console.log("error");
    }
}

const register = async(req, res) => {

    
    try {
        
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email:email});

        if (userExist) {
            return res.status(400).json({msg : "email already exist"});

        }
        console.log("data", req.body);
        const userCreated = await User.create({username, email, phone, password});
        res.status(201).json({msg : "User registration successfully", 
                              token : await userCreated.generateToken(),
                              userId:userCreated._id.toString(),
                            });
        
    } catch (error) {
        res.status(500).json({message : "Internal server error"});
    }
}

// const login = async(req, res) => {
//     try {
//         const {email, password} = req.body;

//         const userExist = await User.findOne(({email}));
//         console.log(userExist);
//         if(!userExist){
//             res.status(400).json({message:"Invalid Credentials"});

//         }

//         const user = await bcrypt.compare(password, userExist.password);

//         if(!user){
//             return res.status(401).json({message : "Invalid email or password"});
//         }
//         res.status(201).json({
//             msg : "Login Successful", 
//             token : await userExist.generateToken(),
//             userId:userExist._id.toString(),
//         });

//         }else{
//             res.status(401).json({message : "Invalid email or password"});
//         }

//     } catch (error) {
//         res.status(500).json("Internal server error");
//     }
// }

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const userExist = await User.findOne({ email });
        if (!userExist) {
            console.log("Invalid Credentials");
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (!isPasswordValid) {
            console.log("Invalid email or password");
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // If email and password are valid, generate a token
        const token = await userExist.generateToken();
        console.log("Login Successful");
        res.status(200).json({
            msg: "Login Successful",
            token: token,
            userId: userExist._id.toString()});
    } catch (error) {
        console.error("Error in login function:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ msg : userData});
    } catch (error) {
        console.log(`User error is : ${error}`);
    }
}

module.exports = { home, register, login, user };