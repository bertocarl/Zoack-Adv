const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        Destination: {
            Name: 'Watamu',
            Description: 'Its Coast!',
            Photo: 'this link',
            Location:'gps'
        },
        Itenary: {
            Name: '',
            Cost: '',
            Description: '',
        },
    });
});

module.exports = app;