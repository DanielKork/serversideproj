//Daniel Korkus 314629692
//Tamir Razon 207421322


const Prod = require('../models/caloriesModel')


exports.addcalories = async (req, res) => {
    try {
        // Creating a new instance of the Prod model with request body data
        const calories = new Prod(req.body);
        // Saving the new calorie data to the database
        const savedProd = await calories.save();
        // Sending a success response with the saved product details
        res.status(200).json({
            message: 'Success',
            savedProd
        });
    } catch (error) {
        // Handling errors and sending an appropriate error response
        res.status(400).json({
            error: 'Unable to add product'
        });
    }
};



    
