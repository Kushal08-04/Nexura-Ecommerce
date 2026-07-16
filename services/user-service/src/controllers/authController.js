const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register function
exports.register = async(req,res)=>{

    try{

        const {name,email,password,phone,address}=req.body;

        const existingUser=await User.findOne({email});

        if(existingUser){

            return res.status(400).json({
                success:false,
                message:"User already exists"
            });

        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({

            name,
            email,
            password:hashedPassword,
            phone,
            address

        });

        const token=jwt.sign(

            {
                id:user._id,
                role:user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"7d"
            }

        );

        res.status(201).json({

            success:true,
            message:"Registration Successful",

            token,

            user

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

//login function
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};