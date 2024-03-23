exports.getAbout = (req, res) => {
    try {
        const developers = [
            { firstname: "Daniel", lastname: "Korkus", id: 314629692, email: "daniel.korkus@icloud.com" },
            { firstname: "Tamir", lastname: "Razon", id: 207421322, email: "tamir@gmail.com" }
            // Add more developers as needed
        ];
        
        res.json(developers);
    } catch (error) {
        console.error('Error getting developers information:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
