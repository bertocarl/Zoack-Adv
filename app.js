const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({

            "Destinations":{
            "1": {
                "name": "Watamu",
                "description": "Watamu offers many different area to enjoy the white Indian Ocean beaches. From the bay of 7 island to Mida creek.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/watamu-beach/",
                "location": "Watamu",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            
            "2": {
                "name": "Diani Beach",
                "description": "Diani Beach is a major beach resort on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in the nearby Kwale County. It has been voted Africa’s leading beach destination for the third time running since 2015.The beach is about 17 kilometres (11 mi) long, from the Kongo river to the north and Galu beach to the south (the southern point of reference is an old Baobab tree). With a population of over 100,000 inhabitants, the Diani/Ukunda urban area is one of the largest at the Kenyan coast and forms part of the larger Mombasa metropolitan region. A small airstrip is located between the beach area and the Mombasa-Lunga Lunga road. The water remains shallow near shore, with some underwater sandbars near the surface which allow wading with a clear view of the sandy bottom.The general area is known for its coral reefs, black-and-white colobus monkeys, and for the closely located Shimba Hills National Reserve, a wildlife reserve which looks out over the Indian Ocean. Diani Beach has restaurants, hotels, supermarkets, and several shopping centres.Diani Beach is also a popular kitesurfing, sky diving, jet skiing, and snorkelling location.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/diani-beach/",
                "location": "Diani",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "3": {
                "name": "Ngorongoro Crater",
                "description": "The Ngorongoro Crater is a breathtakingly beautiful setting and the best place in Tanzania to see the Big Five.  However, as one of the world’s most astonishing and renowned natural wonders, the Ngorongoro Crater does get busy, and at times very busy.  Due to the crowds we recommend a two-night stay only here, then moving on to the Serengeti for a quieter, more private safari experience.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/ngoro-ngoro-creature/",
                "location": "Tanzania",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "4": {
                "name": "Mt Kenya Hike",
                "description": "Standing at 5,199 meters above sea level, Mt Kenya is the second highest mountain in Africa and, in the eyes of African Ascents; this is the most beautiful mountain in Africa. Mt Kenya is riddled with pioneering history, with some of the most amazing stories in mountaineering history. To name one ‘No picnic on mount Kenya’, the scene of the famous Italian prisoners of war who escaped to climb the Teleki Valley to attempt to summit Point Batian in hot pursuit from their captures. Since then many mountaineering legends established themselves on Mt Kenya, Halford Mackinder, Eric Shipton and Arthur Firmin, to name a few. Modern day legends in Ian Howell and Ian Allen are also very evident, establishing many of the technical routes on Batian (5,199m) and Nelion (5,188m). ”Howell Hut” was built by Ian Howell who soloed Point Nelion 13 times to establish the hut on the summit; this hut is still used today and is incorporated in African Ascents itinerary’s. The highest peaks of the mountain are Batian (5,199 metres (17,057  ft.)), Nelion (5,188 metres (17,021  ft.)) which are technical ascents, and Point Lenana (4,985 metres (16,355  ft.)). Mount Kenya is located in central Kenya, just south of the equator near the African Ascents home of Nanyuki, around 150 kilometres (93 miles) north-northeast of the capital Nairobi. Mount Kenya is the source of the name of the Republic of Kenya",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/kilimambogo-hike/",
                "location": "Nanyuki",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "5": {
                "name": "Sweet Water Nanyuki",
                "description": "The Sweetwaters Chimpanzee Sanctuary was established with an agreement between the Ol Pejeta Conservancy, the Kenya Wildlife Service (KWS) and the Jane Goodall Institute. The aim – to provide lifelong refuge to orphaned and abused chimpanzees from West and Central Africa. Over the last decade, Sweetwaters Chimpanzee Sanctuary has been compelled to keep accepting chimpanzees rescued from traumatic situations – bringing the total number of chimpanzees in the Sanctuary to 37. Many are confiscated from cramped and unnatural living conditions, and many arrive with horrific injuries sustained from abuse at the hands of humans. Here at Sweetwaters, they get a chance to start over",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/sweet-waters-nanyuki/",
                "location": "Nanyuki",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "6": {
                "name": "Longonot National Park",
                "description": "Longonot Gate is the premier holiday, golf, leisure and conference resort city in East Africa. The city is set in 2400 acres of prime land at the foot of Mt Longonot.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/longonot-national-park/",
                "location": "Longonot",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "7": {
                "name": "Meru National Park",
                "description": "Meru is a savanna National Park, 35 km east of Maua town in the north eastern lowlands below the Nyambeni hills. Meru is part of a complex of protected areas along the Tana river that includes the adjacent Bisanadi and Mwingi National Reserves, Kora National Park and Rahole National Reserve. The wetter North Western sector is hilly, with rich volcanic soils. The land flattens towards the east, where grey alluvial volcanic soils appear. The area is crossed by numerous permanent streams, draining from the Nyambenes and flowing in parallel between tongues of lava, south eastwards towards the Tana River. As well as the many streams that cross it, the park is bounded by three large rivers: the Tana to the South, the Ura to the South West and the Rojeweru to the East. There are several prominent inselbergs of basement rock, notably Mughwango and Leopard Rock. A section of the park has been designated as a wilderness area in which there are no roads. The park is part of the domain made famous by the writings of Joy Adamson. Major attractions – Former home of Joy and George Adamson and Elsa the lioness, spectaculor views of Mount Kenya, rivers and riverine habitats, Tana River and Adamson’s Falls. Wildlife – Grevy’s zebra, elephant, eland, bush pig, common waterbuck, cheetah, leopard, reticulated giraffe, hippopotamus, bohor reedbuck, hartebeest, python, puff adder, cobra, buffalo, gerenuk and more than 300 recorded species of birds. Activities – Unspoilt, natural wildlife viewing, camping Access –  By road: From Nairobi (348 km) is via Nyeri-Nanyuki-Meru or via Embu all weather roads. Access into the park from Maua to Murera Gate (35 km) and 348 km from Nairobi. The other access is via Embu to Ura Gate (120 km), 290 km from Nairobi – inaccessible at the moment. By Air via the main airstrip at Kina, Mulika next to Meru Mulika Lodge and Elsa’s Kopje airstrip. Where to stay – Meru has a choice of basic campsites with small bandas (huts) for hire. The park also has  lodges offering well-appointed accommodation.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/meru-national-park/",
                "location": "Meru",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }                
            },
            "8": {
                "name": "Kerieta Forest",
                "description": "The Kereita Forest shares the Aberdares range ecosystem and features many interesting hiking trails established by Kijabe Environment Volunteers (KENVO). This is a very serene and pristine area and is a designated birding site. It is very serene and pristine.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/kereita-forest/",
                "location": "Kijabe",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "9": {
                "name": "Lake Bogoria",
                "description": "Lake Bogoria is a saline, alkaline lake that lies in a volcanic region in a half-graben basin south of Lake Baringo, Kenya, a little north of the equator. Lake Bogoria, like Lake Nakuru, Lake Elmenteita, and Lake Magadi further south in the Rift Valley, and Lake Logipi to the north, is home at times to one of the world’s largest populations of lesser flamingos. The lake is a Ramsar site and Lake Bogoria National Reserve has been a protected National Reserve since November 29, 1973. Lake Bogoria is shallow (about 10 m depth), and is about 34 km long by 3.5 km wide, with a drainage basin of 700 km2. It is home to many flamingoes and offers bird watching lovers this unique experience. ",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/lake-bogoria-flamingos/",
                "location": "Nakuru",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },
            "10": {
                "name": "Nairobi National Park",
                "description": "A short drive out of Nairobi’s central business district is the Nairobi National Park. Wide open grass plains and backdrop of the city scrapers, scattered acacia bush play host to a wide variety of wildlife including the endangered black rhino, lions, leopards, cheetahs, hyenas, buffaloes, giraffes and diverse birdlife with over 400 species recorded. Visitors can enjoy the park’s picnic sites, three campsites and the walking trails for hikers.",
                "photo": "http://zoackadventures.co.ke/zoack-adventures-tours/nairobi-national-park/",
                "location": "Nairobi",
                "Itenary":{
                    "name":"",
                    "cost":"",
                    "description":""
                }
            },

            }
    });
});


module.exports = app;