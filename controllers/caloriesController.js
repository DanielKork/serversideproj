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

//const MongoClient = require('mongodb').MongoClient;

// const db = client.db(serversideproj);
// const usersCollection = db.collection('users');
// const caloriesCollection = db.collection('calories');



    // const { user_id, year, month, day, description, category, amount } = req.body;
    
    // const newItem = {
    //     user_id,
    //     year,
    //     month,
    //     day,
    //     description,
    //     category,
    //     amount
    // };
    
    // caloriesCollection.insertOne(newItem)
    //     .then(result => {
    //         res.status(201).send('Calorie consumption item added successfully');
    //     })
    //     .catch(err => {
    //         console.error('Error adding calorie consumption item:', err);
    //         res.status(500).send('Internal Server Error');
    //     });



    
