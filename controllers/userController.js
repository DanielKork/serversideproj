const User = require('../models/userModel')

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