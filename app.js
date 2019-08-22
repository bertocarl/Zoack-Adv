const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        1: {
            Name: 'Watamu',
            Description: 'Watamu offers many different area to enjoy the white Indian Ocean beaches. From the bay of 7 island to Mida creek.',
            Photo: 'http://zoackadventures.co.ke/zoack-adventures-tours/watamu-beach/',
            Location:'gps location by google maps API key'
        },
        Itenary: {
            Name: '',
            Cost: '',
            Description: '',
        },
    
        2: {
            Name: 'Diani Beach',
            Description: 'Diani Beach is a major beach resort on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in the nearby Kwale County. It has been voted Africa’s leading beach destination for the third time running since 2015.The beach is about 17 kilometres (11 mi) long, from the Kongo river to the north and Galu beach to the south (the southern point of reference is an old Baobab tree). With a population of over 100,000 inhabitants, the Diani/Ukunda urban area is one of the largest at the Kenyan coast and forms part of the larger Mombasa metropolitan region. A small airstrip is located between the beach area and the Mombasa-Lunga Lunga road. The water remains shallow near shore, with some underwater sandbars near the surface which allow wading with a clear view of the sandy bottom.The general area is known for its coral reefs, black-and-white colobus monkeys, and for the closely located Shimba Hills National Reserve, a wildlife reserve which looks out over the Indian Ocean. Diani Beach has restaurants, hotels, supermarkets, and several shopping centres.Diani Beach is also a popular kitesurfing, sky diving, jet skiing, and snorkelling location.',
            Photo: 'http://zoackadventures.co.ke/zoack-adventures-tours/diani-beach/',
            Location:'gps location by google maps API key'
        },
        Itenary: {
            Name: '',
            Cost: '',
            Description: '',
        },
    });
});


module.exports = app;