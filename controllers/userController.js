const User = require('../models/userModel')

// exports.signup = (req,res) => {
//     const user = new User(req.body)
//     user.save((err, user) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "unable to add user"
//             })
//         }
//         return res.json({
//             message: "Success",
//             user: user
//         })
//     })
// }

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