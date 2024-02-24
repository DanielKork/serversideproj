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

exports.signin = (req, res) => {
    const { first_name, last_name } = req.body;

    // Using findOne without a callback, returns a Query object
    const query = User.findOne({ first_name });

    // Executing the query and handling the result using then
    query.then((user) => {
        if (!user) {
            return res.status(400).json({
                error: "User was not found"
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);

        res.cookie('token', token, { expire: new Date() + 1 });

        const { first_name, last_name } = user;
        return res.json({
            token,
            user: {
                first_name,
                last_name
            }
        });
    }).catch((err) => {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    });
};

exports.signout = (req,res) => {
    res.clearCookie('token')
    return res.json({
        message: "user signout successful"
    })
}
