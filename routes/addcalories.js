//Daniel Korkus 314629692
//Tamir Razon 207421322



var express = require('express');
const { addcalories } = require('../controllers/caloriesController');
var router = express.Router();

router.use(express.json());

router.post('/', addcalories)

module.exports = router;



// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

// const app = express();
// const port = 3000;

// // MongoDB Connection URL
// const url = process.env.DATABASE;

// // Database Name
// const dbName = 'serversideproj';

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Connect to MongoDB
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('Error connecting to MongoDB:', err);
//         return;
//     }
    
//     console.log('Connected successfully to MongoDB');
    
//     const db = client.db(dbName);
//     const usersCollection = db.collection('users');
//     const caloriesCollection = db.collection('calories');
    
//     // Endpoint to add new calorie consumption item
//     app.post('/', (req, res) => {
//         const { user_id, year, month, day, description, category, amount } = req.body;
        
//         const newItem = {
//             user_id,
//             year,
//             month,
//             day,
//             description,
//             category,
//             amount
//         };
        
//         caloriesCollection.insertOne(newItem)
//             .then(result => {
//                 res.status(201).send('Calorie consumption item added successfully');
//             })
//             .catch(err => {
//                 console.error('Error adding calorie consumption item:', err);
//                 res.status(500).send('Internal Server Error');
//             });
//     });
    
//     // Endpoint to get detailed report
//     // app.get('/report', (req, res) => {
//     //     const { user_id, year, month } = req.query;
        
//     //     caloriesCollection.find({ user_id, year: parseInt(year), month: parseInt(month) }).toArray()
//     //         .then(items => {
//     //             const report = {
//     //                 breakfast: [],
//     //                 lunch: [],
//     //                 dinner: [],
//     //                 other: []
//     //             };
                
//     //             items.forEach(item => {
//     //                 report[item.category].push({
//     //                     day: item.day,
//     //                     description: item.description,
//     //                     amount: item.amount
//     //                 });
//     //             });
                
//     //             res.json(report);
//     //         })
//     //         .catch(err => {
//     //             console.error('Error getting report:', err);
//     //             res.status(500).send('Internal Server Error');
//     //         });
//     // });
    
//     // // Endpoint to get details of developers
//     // app.get('/about', (req, res) => {
//     //     const developers = [
//     //         { firstname: 'John', lastname: 'Doe', id: 1, email: 'john@example.com' },
//     //         { firstname: 'Jane', lastname: 'Smith', id: 2, email: 'jane@example.com' }
//     //         // Add more developers as needed
//     //     ];
        
//     //     res.json(developers);
//     // });
    
//     // Start server
//     app.listen(port, () => {
//         console.log(`Server running on http://localhost:${port}`);
//     });
// });
