const Prod = require('../models/caloriesModel')

exports.getReport = async (req, res) => {
    try {
        // Query the database for calorie consumption items
        const items = await Prod.find(req.query);
        
        // Create an object to store the report
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };
        
        // Iterate through the calorie consumption items
        items.forEach(item => {
            // Push each item to the corresponding category array in the report
            report[item.category].push({
                userid: item.user_id,
                year: item.year,
                month: item.month,
                day: item.day,
                description: item.description,
                amount: item.amount
            });
        });
        
        // Send the report as JSON response
        res.json(report);
    } catch (error) {
        console.error('Error getting report:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};



// exports.getReport = async (req, res) => {
//     try {
//         const { userid, year,month } = req.body;
//         const savedProd = await calories.find(userid,year,month);
//         res.status(201).json({
//             message: 'Success',
//             savedProd
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: 'Unable to add product'
//         });
//     }
// };