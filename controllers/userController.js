const User = require('../models/userModel')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

exports.signup = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json({
            message: 'Success',
            savedUser
        });
    } catch (error) {
        res.status(400).json({
            error: 'Unable to add user'
        });
    }
};

exports.signin = async (req, res) => {
    try {
        const { first_name, password } = req.body;
        const user = await User.findOne({ first_name, password });

        if (!user) {
            return res.status(400).json({
                error: "User was not found"
            });
        }

        console.log(first_name);

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);

        res.cookie('token', token, { expire: new Date() + 1 });

        const { firstname, lastname, passwordU } = user;
        return res.json({
            token,
            user: {
                firstname,
                lastname,
                passwordU
            }
        });
    } catch (err) {
        console.error('Error in signin route:', err);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


exports.signout = (req,res) => {
    res.clearCookie('token')
    return res.json({
        message: "user signout successful"
    })
}
