const Prod = require('../models/caloriesModel')


exports.addcalories = async (req, res) => {
    try {
        const calories = new Prod(req.body);
        const savedProd = await calories.save();
        res.status(201).json({
            message: 'Success',
            savedProd
        });
    } catch (error) {
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



    
