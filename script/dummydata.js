const users = [
  {
    name: "Joe Schmo",
    email: "something@gmail.com",
    password: "password1",
    isAdmin: true,
  },
  {
    name: "Jane Schmo",
    email: "anything@gmail.com",
    password: "password2",
    isAdmin: true,
  },
  {
    name: "Adam Sandler",
    email: "sandman@gmail.com",
    password: "password3",
    isAdmin: false,
  },
  {
    name: "John Cena",
    email: "cenaman@gmail.com",
    password: "password4",
    isAdmin: false,
  },
  {
    email: "iceicebaby@onehitwonder.com",
    name: "Vanilla Ice",
    password: "1fakerapper",
    isAdmin: false,
  },
  {
    email: "babybabybabyoh@bielieber.com",
    name: "Justin Bieber",
    password: "canada15",
    isAdmin: false,
  },
  {
    email: "kimk@richerthanyou.com",
    name: "Kim Kardashian",
    password: "gucci21",
    isAdmin: false,
  },
  {
    email: "mike@tython.com",
    name: "Mike Tyson",
    password: "earBiter1",
    isAdmin: false,
  },
  {
    email: "neo@thematrix.com",
    name: "Keanu Reeves",
    password: "thisisnotreal",
    isAdmin: false,
  },
];

const sauces = [
  {
    name: "El Yucateco - Black Label Reserve Chile Habanero",
    imageURL:
      "https://hotsaucefever.com/images/sauces/654/el-yucateco-black-label-chile-habanero.jpg",
    pepper: "habanero",
    description:
      "Salsa picante negra (black hot sauce). Previously labeled with the title ‘Black Hot Sauce Chile Habanero’.",
    userRating: 4.0,
    SHU: 2500,
    price: 642,
  },
  {
    name: "Walkerswood - Jamaican Firestick Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/653/walkerswood-jamaican-firestick-pepper-sauce.jpg",
    pepper: "hot peppers",
    description:
      "The saying goes...‘Old firestick is easy to catch’. Once you have had a flame in your heart it is easy to rekindle. This sauce should warm up all kinds of things. Go easy!",
    userRating: 3.5,
    SHU: 2000000000,
    price: 795,
  },
  {
    name: "Fancy Sauce - Hot & Spicy",
    imageURL:
      "https://hotsaucefever.com/images/sauces/431/fancy_sauce_hot_spicy.jpg",
    pepper: "Jalapeño",
    description:
      "All you need is Fancy Sauce. Brings the heat and compliments food at the same time.",
    userRating: 5.0,
    SHU: 3500,
    price: 742,
  },
  {
    name: "Texas Pete - Hotter Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/430/texas_pete_hotter.jpg",
    pepper: "Tabasco",
    description: "Three times hotter than Texas Pete's original sauce.",
    userRating: 4.5,
    SHU: 1000,
    price: 595,
  },
  {
    name: "Southern Soul Barbeque - Hot Red Cayenne Table Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/427/southern_soul_red_hot_cayenne.jpg",
    pepper: "Cayenne",
    description:
      "A traditional cayenne chili pepper pepper table sauce. Not to hot, not to mild. Garlic, & earthy, with tangy vinegar kick.",
    userRating: 3.3,
    SHU: 2000,
    price: 442,
  },
  {
    name: "Dashelito Enterprises - Bourbonaro: Sweet Potato Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/426/bourbanero_sweet_potato_sauce.jpg",
    pepper: "Habanero",
    description:
      "Sweet potato sauce with undertones of raisin, brown sugar and bourbon with a habanero kick to finish it off! Goes great with everything from fish to pork and chicken. Mix with mayo for a fabulous dipping sauce.",
    userRating: 4.8,
    SHU: 1000000000,
    price: 1000,
  },
  {
    name: "HazMat Foods - Tomatoxin",
    imageURL:
      "https://hotsaucefever.com/images/sauces/421/hazmat_tomatoxin_sauce.jpg",
    pepper: "Habanero, Carolina Reaper",
    description:
      "Tomatoxin is a very aromatic chilli sauce made of tomatoes and habanero peppers. Its uniqueness comes from an incredibly fragrant spice mixture that gives the sauce a very fresh, distinctive flavour. It is perfect for making dips, hamburgers or marinades. Tomatoxin doesn't contain any artificial additives or animal products.",
    userRating: 5.0,
    SHU: 30000000,
    price: 1249,
  },
  {
    name: "Hoss Soss - Bi-Bim",
    imageURL:
      "https://hotsaucefever.com/images/sauces/410/hoss_soss_bi-bim_bottle.jpg",
    pepper: "Cayenne",
    description:
      "Enjoy the exotic sweet and bold Korean flavors of toasted sesame, lime, fish sauce, and rice wine vinegar with a lick of red chili pepper heat! Pour Bi-Bim Soss on everything from global fusion to scrambled eggs to leftover pizza. We promise you'll love it.",
    userRating: 3.5,
    SHU: 15000,
    price: 695,
  },

  {
    name: "Bullwhip - Kelp Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/645/bullwhip-kelp-hot-sauce.jpg",
    pepper: "Peri Peri",
    description:
      "This hot sauce is flavor first, heat second. A deep savory flavor from the kelp paired with heat from piri piri pepper will ignite your taste buds and leave your mouth warm.",
    userRating: 4.5,
    SHU: 10000,
    price: 495,
  },
  {
    name: "Truff Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/641/truff-hot-sauce-bottle.jpg",
    pepper: "Chili",
    description:
      "Enjoy the exotic sweet and bold Korean flavors of toasted sesame, lime, fish sauce, and rice wine vinegar with a lick of red chili pepper heat! Pour Bi-Bim Soss on everything from global fusion to scrambled eggs to leftover pizza. We promise you'll love it.",
    userRating: 4.6,
    SHU: 2500,
    price: 695,
  },
  {
    name: "Men-Pa'w - Umami",
    imageURL:
      "https://hotsaucefever.com/images/sauces/639/men-paw-umami-sauce.jpg",
    pepper: "Habanero, Cayenne, Jalapeno",
    description:
      "Men Pa'w is a new natural and ORGASMIC Gourmet Hot Sauce, a must have in the kitchen and the dining room table. Men Pa'w will revolutionize the way you eat and cook.",
    userRating: 4.9,
    SHU: 12000,
    price: 695,
  },
  {
    name: "Tropical Pepper Co - Scorprion Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/274/tropical_pepper_scorpion.jpg",
    pepper: "Cayenne",
    description:
      "Unforgiving as the scorpion's sting, this deadly pepper sauce will ignite the fire of your senses.",
    userRating: 5.0,
    SHU: 780000,
    price: 895,
  },
  {
    name: "Manofuel - Inferno's Ghost Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/562/manofuel-infernos-ghost.jpg",
    pepper: "Habanero, Ghost Chili",
    description:
      "Enjoy the exotic sweet and bold Korean flavors of toasted sesame, lime, fish sauce, and rice wine vinegar with a lick of red chili pepper heat! Pour Bi-Bim Soss on everything from global fusion to scrambled eggs to leftover pizza. We promise you'll love it.",
    userRating: 3.5,
    SHU: 500000,
    price: 895,
  },
  {
    name: "Cholula - Green Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/263/cholula_green_pepper_sauce_bottle.jpg",
    pepper: "Jalapeño",
    description:
      "Cholula Green Pepper Hot Sauce adds a robust blend of jalapeño and poblano flavors with a touch of slight sweetness. The burst of zesty heat will be sure to awaken any palette. Cholula Green Pepper sauce is perfect for adding a tangy twist to meat, seafood, vegetables and especially dressings and marinades",
    userRating: 2.0,
    SHU: 200,
    price: 400,
  },
  {
    name: "JLD Hot Sauce & Knives - Bhut Jolokia Extra Hot",
    imageURL:
      "https://hotsaucefever.com/images/sauces/576/jld-bhut-jolokia-extra-hot.jpg",
    pepper: "Bhut Jolokia (Ghost Chili)",
    description:
      'It has double the Bhut Jolokias of the "Hot" sauce and gives a good heat with full flavor.',
    userRating: 3.5,
    SHU: 20000,
    price: 1200,
  },
  {
    name: "Gourmet Hemp Foods - Hemp Hottie Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/570/hemp_hottie_sauce.jpg",
    pepper: "Habanero, Jalapeño, Serrano, Arbol",
    description:
      "With five peppers and domestic hempseed oil our Hemp Hottie Sauce has an unforgettable kick and longlasting flavor. Our peppers are sourced locally from Browntown farms, one of Virginia's oldest black owned farms and our hemp comes from a grower and processor in Pennsylvania. Moreover, Hemp Hottie sauce is fat free, sugar free, and loaded with perfectly balanced Omegas 3,6 & 9!",
    userRating: 5.0,
    SHU: 15000,
    price: 2000,
  },
  {
    name: "Blair's - 3 A.M. Reserve",
    imageURL:
      "https://hotsaucefever.com/images/sauces/233/blairs_3am_reserve.jpg",
    pepper: "Cayenne, Red Savina",
    description:
      "The Original-One of the Finest Chile head Gifts In the World with 2,000,000 Scoville units. 3 a.m. Reserve is the Second in the Series of Blair's A.M Items and is always a sought after Chili head Collector Piece... The name Originates from when Blair was in the Bar Biz. 2 a.m. was the closing time and this was the closest thing to legal he could use to get the drunks out of the bar. This always worked...He made 4 Wings with this potion if the patron could eat all four they could hang out all night...Needless to say no one stayed...Feel Alive!",
    userRating: 4.0,
    SHU: 2000000,
    price: 6000,
  },
  {
    name: "Tropical Pepper Co. - Scorpion Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/274/tropical_pepper_scorpion.jpg",
    pepper: "Trinidad Scorpion",
    description:
      "Unforgiving as the scorpion's sting, this deadly pepper sauce will ignite the fire of your senses.",
    userRating: 5.0,
    SHU: 780000,
    price: 893,
  },
  {
    name: "Feisty Tiger - Fruity Fire Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/543/feisty-tiger-fruity-fire-sauce.jpg",
    pepper: "Naga Morich",
    description:
      "This arranged marriage of pineapple and naga morich is a solid one. We start by fermenting roasted Naga chilies from Sylhet with roasted red chilies from Chittagong, and roasted pineapple from Gazipur. As always, we finish off this well-loved sauce with our raw apple cider vinegar.",
    userRating: 5.0,
    SHU: 350000,
    price: 445,
  },
  {
    name: "Professor Phardtpounder's Colon Cleaner",
    imageURL:
      "https://hotsaucefever.com/images/sauces/197/professor_phardtpounders.jpg",
    pepper: "Cayenne",
    description:
      "Elixir of Capsaicin Extremus. People say our new & improved all natural Colon Cleaner Hot Sauce works better than the original formula.",
    userRating: 3.4,
    SHU: 320000,
    price: 1299,
  },
  {
    name: "Louisiana Fish Fry - Cravin' Cajun Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/539/cravin_cajun_hot_sauce.jpg",
    pepper: "Cayenne",
    description: "Bring the taste of Louisiana home",
    userRating: 4.3,
    SHU: 100000,
    price: 795,
  },
  {
    name: "South Devon Chilli Farm - Scorpion Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/379/south_devon_scorpion_chilli.jpg",
    pepper: "Trinidad Scorpion",
    description:
      "The Scorpion Chilli Sauce is one of our new range of Super chilli sauces. (launched in Dec 2015). Like its namesake this sauce will Sting you! ",
    userRating: 4.2,
    SHU: 700000,
    price: 995,
  },
  {
    name: "Elijah's Xtreme - Ghost Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/210/elijahs_xtreme_hotsauce_bottle.jpg",
    pepper: "Habanero, Bhut Jolokia (Ghost Chili)",
    description:
      "A perfect balance of heat and great flavor... and delicious on just about everything! Elijah’s Xtreme was born from a father and son’s love of hot peppers and passion to create a more flavorful, thicker, hotter, hot sauce.",
    userRating: 3.8,
    SHU: 500000,
    price: 1098,
  },
  {
    name: "Cholula - Chipotle Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/11/cholula_chipotle_bottle_chili.jpg",
    pepper: "Chipotle, Piquin, Arbol, Guajillo",
    description:
      "Cholula Chipotle Hot Sauce...featuring a savory blend of Cholula's original 'Flavorful Fire' and the smokey and slightly sweet flavor notes or real Chipotle peppers. It brings sensational new flavor to soups, ranch dressing, steaks, chicken and more.",
    userRating: 3.5,
    SHU: 500000,
    price: 499,
  },
  {
    name: "Marie Sharp's Belizean Heat - Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/42/marie_sharp_belizean_heat_habanero_pepper_sauce.jpg",
    pepper: "Habanero",
    description:
      "Marie Sharp's Belizean Heat Habanero Pepper Sauce is great for cooking. Flavor Soups, Sauces and Stir Fries or add to boiling water for rice, pasta or broiled seafood",
    userRating: 4.5,
    SHU: 17000,
    price: 983,
  },
  {
    name: "Mia's Kitchen - Calabrian Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/554/mias_kitchen_calabrian_chili_pepper_sauce.jpg",
    pepper: "Calabrian Chili Peppers",
    description:
      "Italian foods' favorite hot sauce! This tomato based hot sauce is rich and meaty with just the perfect amount of spice from authentic Calabrian chili peppers.",
    userRating: 4.3,
    SHU: 180000,
    price: 1125,
  },
  {
    name: "Endorphin Rush Beyond Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/14/endorphin_rush_beyond_hot_sauce_bottle.jpg",
    pepper: "Pepper Extract",
    description:
      "Powerful heat here. A few drops will do the trick. Fine smoky taste as well.",
    userRating: 4.1,
    SHU: 190000,
    price: 1495,
  },
  {
    name: "Puckerbutt Pepper Co. - Reaper Squeezins",
    imageURL:
      "https://hotsaucefever.com/images/sauces/506/puckerbutt-reaper-squeezins-sauce.jpg",
    pepper: "Carolina Reaper",
    description:
      "The hottest and most dangerous sauce we offer. This is the hottest sauce we can produce, using all-natural Ingredients.",
    userRating: 4.5,
    SHU: 1000000,
    price: 1800,
  },
  {
    name: "Nando's - Garlic Peri Peri Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/52/nandos_garlic_pepper_sauce_peri_peri.jpg",
    pepper: "Cayenne, Peri Peri, Serrano",
    description:
      "A traditional Garlic Peri-Peri sauce. Blended with Peri-Peri & Serrano chilies, bold garlic pieces, and a dash of lemon.",
    userRating: 4.2,
    SHU: 800000,
    price: 895,
  },
  {
    name: "Ass Kickin' - Wasabi Horseradish Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/22/ass_kickin_wasabi_horseradish_chile_pepper_sauce.jpg",
    pepper: "Habanero, Jalapeño",
    description:
      "Ass Kicking Horseradish Hot Sauce - Kick Yo' Ass Hot! w/ Habanero peppers. Japanese Wasabi horseradish blended with Habanero pepper will bring a tear to your eye.",
    userRating: 3.3,
    SHU: 300000,
    price: 1045,
  },
  {
    name: "CaJohns - Reaper Sling Blade Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/190/reaper_sling_blade_hotsauce_bottle.jpg",
    pepper: "Bhut Jolokia (Ghost Chili)",
    description:
      "Enjoy the exotic sweet and bold Korean flavors of toasted sesame, lime, fish sauce, and rice wine vinegar with a lick of red chili pepper heat! Pour Bi-Bim Soss on everything from global fusion to scrambled eggs to leftover pizza. We promise you'll love it.",
    userRating: 4.4,
    SHU: 800000,
    price: 845,
  },
  {
    name: "Matouk's Calypso Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/98/matouks_hot_salsa_calypso.jpg",
    pepper: "Scotch Bonnet",
    description: "Salsa Calypso. HOT HOT HOT Piquante",
    userRating: 3.5,
    SHU: 18000,
    price: 665,
  },
  {
    name: "TryMe - Yucatan Sunshine Habanero Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/253/yucatan_sunshine_habanero.jpg",
    pepper: "Habanero",
    description:
      "Used as a flavoring throughout the Yucatan for over 2,500 years, the habanero pepper today is fast becoming a worldwide favorite as an exciting and exotic touch to all kinds of dishes, both in the kitchen and at the table",
    userRating: 4.0,
    SHU: 400000,
    price: 545,
  },
  {
    name: "Satan's Rage Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/57/satans_rage_saucehot_lg.jpg",
    pepper: "Cayenne, Peri Peri, Chipotle",
    description:
      "Satan's Rage Hot Sauce - Made with Ghost Peppers.When you indulge in this sauce you will surely encounter the wrath of Satan's Rage.Moments after you taste this sinfully delicious sauce you will pay the price.",
    userRating: 4.1,
    SHU: 500000,
    price: 1195,
  },
  {
    name: "Tabanero - Hot Sauce Pìcante",
    imageURL: "https://hotsaucefever.com/images/sauces/129/tabanero_bottle.jpg",
    pepper: "Habanero",
    description:
      "In pursuit of the most flavorful, All Natural & downright Best Hot Sauce in the world, we have found ourselves in the fertile fields of Tabasco, Mexico; which receives the most rainfall in all of Mexico. ",
    userRating: 4.3,
    SHU: 3000,
    price: 395,
  },
  {
    name: "Dunn's River - Jamaican Style Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/408/dunns_river_jamaican_style.jpg",
    pepper: "Habanero, Cayenne",
    description:
      "A spicy and piquant sauce to add heat and flavour to any dish - also fantastic in cocktails especially Bloody and Virgin Marys.",
    userRating: 3.2,
    SHU: 5000,
    price: 1055,
  },
  {
    name: "Flying Goose Sriracha Hot Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/71/sriracha_hot_chilli_goose.jpg",
    pepper: "Chili",
    description:
      "Sriracha Hot Chilli Sauce is made from sun ripened chillies. Read to use with roasted meat, cold meat, cutlet fish, egg roll or salad or whatever takes your fancy",
    userRating: 4.1,
    SHU: 500000,
    price: 350,
  },
  {
    name: "Beehive Brothers - Jalapeno Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/435/beehive_brothers_jalapeno_hot_sauce.jpg",
    pepper: "Jalapeno",
    description:
      "Small batch artisan hot sauce made with pride in Bozeman, Montana using produce grown by small farmers [sic] in Montana, Wyoming, and Idaho. ",
    userRating: 5.0,
    SHU: 1000000,
    price: 645,
  },
  {
    name: "Butterfly Bakery - Maple Wood Smoked Onion Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/422/butterfly_bakery_smoked_onion.jpg",
    pepper: "Habanero, Jalapeno, Carolina Reaper",
    description:
      "This started as a one off batch flavor. Then folks wanted another batch. And another. It was around the fourth 'one of batch' that we realized that maple wood smoked on ions and Vermont grown chili peppers makes for some fabulous hot sauce.",
    userRating: 4.0,
    SHU: 600000,
    price: 740,
  },
  {
    name: "Valentina - Salsa Picante",
    imageURL:
      "https://hotsaucefever.com/images/sauces/122/valentina-salsa-picante-mexico-chile-sauce.jpg",
    pepper: "Chili peppers",
    description:
      "The 'Best Selling Hot Sauce in Mexico!'. This typically comes in a larger than average bottle holding 12.5oz, with a flip cap. It is also available in 1 Liter (34 oz).",
    userRating: 3.8,
    SHU: 900000,
    price: 450,
  },
  {
    name: "Hog's Breath Red Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/74/hogs_breath_red_sauce_bottle.jpg",
    pepper: "Peppers",
    description: "Hog's breath is better than no breath at all!",
    userRating: 4.9,
    SHU: 500000,
    price: 895,
  },
  {
    name: "Crazy Bastard Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/187/crazy_bastard_sauce_tomatillo.jpg",
    pepper: "Habanero",
    description:
      "Roasted tomatillo and habanero with caramelised onion and garlic. Notes of lime and apple. Heat that doesn't overwhelm or mask the flavour. Thick, red and fruity",
    userRating: 3.6,
    SHU: 220000,
    price: 985,
  },
  {
    name: "Ass Kickin' - Roasted Garlic Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/19/ass_kickin_roasted_garlic_hotsauce_chilli.jpg",
    pepper: "Habanero, Jalapeno",
    description:
      "With Habanero peppers. Garlic lovers delight. Fresh roasted garlic and Habanero peppers, What a treat!",
    userRating: 3.6,
    SHU: 500000,
    price: 850,
  },
  {
    name: "Arizona Gunslinger - Chipotle Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/389/arizona_gunslinger_chipotle_habaner_sauce_bottle.jpg",
    pepper: "Chipotle",
    description:
      "We've combined the smokey flavor of the chipotle pepper with the hot habanero pepper to give you a truly superior flavor!",
    userRating: 3.0,
    SHU: 1000000,
    price: 1295,
  },
  {
    name: "BOOEY'S Gourmet - Original Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/169/booeys_gourmet_pepper_sauce_bottle_@2x.jpg",
    pepper: "Cayenne",
    description:
      "We consider our sauces a finishing sauce. Our goal is the 'Perfect balance between Heat and Flavor'",
    userRating: 5.0,
    SHU: 550000,
    price: 675,
  },
  {
    name: "Byron Bay - Heavenly Habanero Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/246/byron_bay_chilli_with_mango.jpg",
    pepper: "Habanero",
    description:
      "For those who like it hot...our Australian version of Carribbean style hot sauce. Chillies first came to the rest of the world from the West Indies.",
    userRating: 4.3,
    SHU: 250000,
    price: 575,
  },
  {
    name: "Ass Blaster Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/64/ass_blaster_sauce_hot-copy-1.jpg",
    pepper: "Habanero",
    description:
      "Be warned and be prepared: The ASS BLASTER is not for the 'uninitiated' and has well earned its highly esteemed name among connoisseurs of fine quality condiments.",
    userRating: 3.5,
    SHU: 1000000,
    price: 850,
  },
  {
    name: "Triiifecto - Ra Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/110/trifecto_jolokia_habanero_savina_sauce.jpg",
    pepper: "Ghost Chili, Red Savina",
    description:
      "Ra Pepper Sauce - One sauce to rule them all.... A hot sauce with jolokia (ghost), red savina & habanero peppers, sure to put the heat on for you. Plus every serving has a significant percentage of daily recommended vitamins A, B6, B12 & C.",
    userRating: 4.5,
    SHU: 2000000,
    price: 1250,
  },
  {
    name: "Born to Hula - Cayenne",
    imageURL:
      "https://hotsaucefever.com/images/sauces/375/born_to_hula_natural_hot_sauce_bottle.jpg",
    pepper: "Cayenne",
    description:
      "All Natural Hot Sauce: Born To Hula's take on a Louisiana style hot sauce is Cayenne Pepper Sauce. Made with fresh red bell peppers, garlic, lime juice, vinegar and perfectly aged cayenne mash, the versatility of this 'highly addictive' everyday sauce will blow you away!",
    userRating: 4.5,
    SHU: 350000,
    price: 1050,
  },
  {
    name: "Sam & Oliver - Stoke Chipotle Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/222/stoke_chipotle_pepper_sauce.jpg",
    pepper: "Chipotle",
    description:
      "Sam & Oliver's Stoke Chipotle pepper sauce brings everyday food to life with our quality ingredients. This robust blend of chipotle peppers and butternut squash adds a delicious smoked pepper flavor to any dish, marinade or dip.",
    userRating: 4.3,
    SHU: 600000,
    price: 1295,
  },
  {
    name: "Jack Daniel's BBQ Sauce - Extra Hot Habanero",
    imageURL:
      "https://hotsaucefever.com/images/sauces/333/jack_daniels_xtra_hot_habanero_bbq.jpg",
    pepper: "Habanero",
    description:
      "Made with real Jack Daniel’s Tennessee Whiskey, this unique recipe has been specially blended with habanero chillies to create a smokey flavour with a fiery hot kick.",
    userRating: 4.2,
    SHU: 800000,
    price: 955,
  },
  {
    name: "Avila Gorilla - Pineapple Mango Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/472/avila_gorilla_pineapple_hot_sauce.jpg",
    pepper: "Fatalii, Peri Peri",
    description:
      "These two classic fruits have been brought together once again to bring your palate to life. This sauce collaborates well with pizza, eggs, wings and great on fish (especially fish tacos).",
    userRating: 5.0,
    SHU: 450000,
    price: 995,
  },
  {
    name: "Devil's Duel: Habanero Hot Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/247/devils_due_habanero.jpg",
    pepper: "Habanero",
    description:
      "Fiendishly Hot...brings hellfire to your tongue. Gluten Free & All Natural.",
    userRating: 3.9,
    SHU: 500000,
    price: 885,
  },
  {
    name: "Dua Belibis - Saus Cabe",
    imageURL:
      "https://hotsaucefever.com/images/sauces/108/dua_belibis_saus_cabe.jpg",
    pepper: "Peri-Peri",
    description: "Chilli Sauce",
    userRating: 4.7,
    SHU: 510000,
    price: 785,
  },
  {
    name: "Lingham's Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/107/lingham_chilli_sauce.jpg",
    pepper: "Tabasco Pepper",
    description: "The World's Finest Multi-Use Condiment",
    userRating: 3.8,
    SHU: 470000,
    price: 485,
  },
  {
    name: "Ayam Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/106/ayam_hot_chilli_sauce.jpg",
    pepper: "Poblano",
    description:
      "Recommendation: A versatile, thick hot Chilli Sauce which is ideal as a dipping sauce for spring rolls, roasted meats, fried fish and chicken. Just add a few tablespoons to your favourite stir fry noodles to enhance flavour.",
    userRating: 3.8,
    SHU: 670000,
    price: 775,
  },
  {
    name: "ABC - Sambal Manis Pedas (Hot & Sweet)",
    imageURL:
      "https://hotsaucefever.com/images/sauces/105/abc_manic_pedas_sambal_chilli.jpg",
    pepper: "Bell Pepper",
    description: "Hot & sweet chilli sauce.",
    userRating: 3.0,
    SHU: 370000,
    price: 565,
  },
  {
    name: "ABC - Sambal Ayam Goreng",
    imageURL:
      "https://hotsaucefever.com/images/sauces/104/abc_sambal_ayam_goreng_chilli_sauce.jpg",
    pepper: "Poblano",
    description: "Dipping chilli sauce for fried chicken.",
    userRating: 4.0,
    SHU: 490000,
    price: 665,
  },
  {
    name: "Pun Chun - Yum Cha",
    imageURL:
      "https://hotsaucefever.com/images/sauces/103/pun_chun_yum_cha_hot_chilli_sauce.jpg",
    pepper: "Locoto",
    description: "Yum Cha Hot Chilli Sauce. Full Rich Flavour.",
    userRating: 3.0,
    SHU: 790000,
    price: 555,
  },
  {
    name: "Lucky Dog - Red - Fire-Roasted Hot Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/102/lucky_dog_red_fire_roasted_hot_pepper_sauce.jpg",
    pepper: "Tabasco",
    description:
      "Red Label: Habanero, jalapeno and serrano peppers with roasted garlic. Foods Best Friend: A delicious addition to any dish, adding savory heat without overpowering food. Use Lucky Dog Hot Sauce on meat, eggs, pizza, sandwiches, fish & pretty much anything!",
    userRating: 4.0,
    SHU: 550000,
    price: 777,
  },
  {
    name: "Zulu Fire Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/99/zulu_fire_sauce_chilli.jpg",
    pepper: "Jalapeno",
    description:
      "This hot sauce from the famous Zulu tribe in South Africa gets it’s wonderful color and flavor from a combination of carrots, sweet potato, chili peppers, spices and herbs. The favorite",
    userRating: 2.0,
    SHU: 10000,
    price: 499,
  },
  {
    name: "Matouk's Calypso Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/98/matouks_hot_salsa_calypso.jpg",
    pepper: "Scotch Bonnet",
    description: "Salsa Calypso. HOT HOT HOT Piquante",
    userRating: 3.5,
    SHU: 20000000,
    price: 990,
  },
  {
    name: "Boomslang Ghost Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/97/boomslang_ghost_pepper_sauce_mad_dog.jpg",
    pepper: "Jalapeño, Bhut Jolokia (Ghost Chili), Thai",
    description:
      "Boomslang Peri Peri Ghost Pepper Hot Sauce. See the snake? It's the Boomslang, one of Africa's most lethal. See the pepper? It's the ominous and infamous Ghost Pepper. Put the two together and you have Boomlsang Hot Sauce, a unique blend of alll natural ingredients from the makers of the world's hottest and most flavorful sauces, Ashley Foods. One taste and you'll see why this is a sauce to die for!",
    userRating: 3.5,
    SHU: 1000000,
    price: 780,
  },
  {
    name: "Mad Dog - Inferno Reserve",
    imageURL:
      "https://hotsaucefever.com/images/sauces/94/mad_dog_reserve_inferno_ghost_pepper_sauce.jpg",
    pepper: "Jalapeño, Bhut Jolokia (Ghost Chili)",
    description:
      "Like the blonde in the old detective movies, Mad Dog Reserved hot sauce is both beautiful and deadly. A unique blend of Caribbean spices, peppers, garlic, onions, red wine vinegar, and imported cloves",
    userRating: 3.5,
    SHU: 7000000,
    price: 1000,
  },
  {
    name: "St. Pete Heat - Pineapple Habanero Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/93/st_pete_heat_pineapple_habanero_sauce_chili.jpg",
    pepper: "Habanero",
    description:
      "Give your dinner a doze of solar power from the home of the Skyway Bridge. Just as the glorious gulf waters intensify the heat of the sun, this sauce delivers tropical flavor intensified with habanero heat that burns so good! Treat your tongue to a hot pineapple paradise",
    userRating: 3.8,
    SHU: 500000,
    price: 1200,
  },
  {
    name: "Hot Licks Serrano Extra Hot",
    imageURL:
      "https://hotsaucefever.com/images/sauces/89/hot_licks_serrano_pepper_sauce_extra_hot.jpg",
    pepper: "Serrano",
    description:
      "We added more Serranos for more heat! Smooth Serrano bite it plays well with all foods.",
    userRating: 3.3,
    SHU: 540000,
    price: 500,
  },
  {
    name: "Louisiana Swamp Scum Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/87/louisiana_swamp_scum_hot_sauce.jpg",
    pepper: "Red Pepper",
    description:
      "Award winning! Louisiana Style hot sauce with a delicious smoke flavor and swamp green color.",
    userRating: 5.0,
    SHU: 510000,
    price: 700,
  },
  {
    name: "Iguana - Gold Island Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/86/iguana_gold_island_pepper_sauce.jpg",
    pepper: "Habanero, Cayenne",
    description:
      "Iggy... our reptilian product development guru returned from a trip thru Barbados & the West Indies with the most peculiar souvenirs.",
    userRating: 3.0,
    SHU: 10000,
    price: 600,
  },
  {
    name: "Melinda's - Garlic Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/85/melindas_habanero_pepper_sauce_garlic.jpg",
    pepper: "Habanero",
    description:
      "Melinda's Garlic Habanero Hot Sauce blends the habanero chile with fresh garlic, carrots, onions, more garlic and a hint of lime juice for a truly fiery taste that enhances the original flavor of your foods without overpowering. Melinda's Garlic Habanero Hot Sauce is a garlic lover's dream.",
    userRating: 3.4,
    SHU: 3000000,
    price: 870,
  },
  {
    name: "Mad Dog - Liquid Fire",
    imageURL:
      "https://hotsaucefever.com/images/sauces/84/mad_dog_liquid_fire.jpg",
    pepper: "Jalapeño, Peri Peri",
    description:
      "The Original Peri-Peri Hot Sauce. Get back to the roots of heat...the original that started it all. Mad Dog Liquid Fire, a super rich and super flavorful peri-peri sauce that has won the favor of heat seekers for nearly two decades.",
    userRating: 4.9,
    SHU: 3200000,
    price: 840,
  },
  {
    name: "Dave's Roasted Garlic Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/83/daves_roasted_garlic_spicy_sauce.jpg",
    pepper: "Tabasco",
    description:
      "This sauce has a great roasted garlic flavor. Try it on everything from pasta to potatoes. Even vampires love this sauce.",
    userRating: 3.9,
    SHU: 1200000,
    price: 440,
  },
  {
    name: "Bee Sting Honey n' Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/82/bee_sting_honey_habanero_pepper_sauce.jpg",
    pepper: "Habanero, Cayenne",
    description:
      "This is an Asian/Thai influenced, pan-cultural sweet-hot pepper sauce with a hint of garlic, onion & lemon. Excellent with rice dishes, curries, chicken, shrimp and steak, with vegetables & tofu or anywhere you want a bit of Asian-style excitement.",
    userRating: 4.1,
    SHU: 1260000,
    price: 790,
  },
  {
    name: "Smack My Sweet Ass & Call Me Sally Sweet Chili Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/81/smack-ass-call-me-sally-hot-sauce.jpg",
    pepper: "Cayenne",
    description:
      "Who knew getting smacked could be so sweet? Getting smacked to many times can be painful& possibly drive a person insane!! After all of these years of smacking heat, this new smacking will be sweet relief.",
    userRating: 4.4,
    SHU: 2365,
    price: 800,
  },
  {
    name: "Tahiti Joe's - Tahitiaki Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/75/tahiiti_joes_hot_sauce.jpg",
    pepper: "Habanero, Jalapeño",
    description:
      "While Tahiti's Hot Sauces was hanging ten in Japan (actually, he was just surfing the net), he realized that he could take Japan's famous Teriyaki sauce and make it Tahiti's Hot Sauces style for all the chili-heads to crave and sweat for!",
    userRating: 3.5,
    SHU: 2305,
    price: 750,
  },
  {
    name: "Hog's Breath Red Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/74/hogs_breath_red_sauce_bottle.jpg",
    pepper: "Habanero",
    description: "Hog's breath is better than no breath at all!",
    userRating: 4.9,
    SHU: 211305,
    price: 550,
  },
  {
    name: "Flying Goose Sriracha Hot Chilli Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/71/sriracha_hot_chilli_goose.jpg",
    pepper: "Red Pepper",
    description:
      "Sriracha Hot Chilli Sauce is made from sun ripened chillies. Read to use with roasted meat, cold meat, cutlet fish, egg roll or salad or whatever takes your fancy.",
    userRating: 4.1,
    SHU: 29931,
    price: 750,
  },
  {
    name: "Dave's Total Insanity Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/69/daves_total_insanity_sauce_hot.jpg",
    pepper: "Jalapeño",
    description:
      "Insane heat with a garlicky flavor! Winner of National Fiery Foods Challenge and featured on The Food Network. Insanity Sauce is a cooking ingredient and this sauce can go right on your plate, but one drop at a time.",
    userRating: 4.8,
    SHU: 48700,
    price: 947,
  },
  {
    name: "Tropical Pepper Co. - Curry Delight Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/68/tropical_chile_curry_delight_bottle.jpg",
    pepper: "Jalapeño",
    description:
      "Caribbean Flavor, Caribbean Heat, Caribbean Memories, Caribbean Love.",
    userRating: 4.5,
    SHU: 48500,
    price: 537,
  },
  {
    name: "The Brutal Bajan",
    imageURL:
      "https://hotsaucefever.com/images/sauces/67/brutal_bajan_review.jpg",
    pepper: "Habanero",
    description:
      "Get brutalized! - This island inspired recipe combines the hurricane force of the habanero with tropical spices and the best damn mustard on the planet. A snappy sauce that offers a nice lingering burn. [Offered and sold at Tijuana Flats.",
    userRating: 2.5,
    SHU: 44500,
    price: 724,
  },
  {
    name: "Georgia Peach & Vidalia Onion Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/66/georgia_peach_vidalia_onion_bottle.jpg",
    pepper: "Cayenne, Jalapeño",
    description:
      "The famous sauce with the red velvet top goes well with all food groups. Labeled as International Champion, National Award Winner: 2001, 2000, 1999, 1998, 1996.",
    userRating: 4.7,
    SHU: 33500,
    price: 524,
  },
  {
    name: "Ass Blaster Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/64/ass_blaster_sauce_hot-copy-1.jpg",
    pepper: "Habanero",
    description:
      "Be warned and be prepared: The ASS BLASTER&reg; is not for the uninitiated and has well earned its highly esteemed name among connoisseurs of fine quality condiments.",
    userRating: 3.5,
    SHU: 999500,
    price: 999,
  },
  {
    name: "Waha Wera Kiwifruit & Habanero Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/63/waha_wera_kiwi_habanero_sauce.jpg",
    pepper: "Green Pepper",
    description:
      "We grow our habaneros, the world's hottest pepper, in New Zealand's Far North. Their unique tropical fruit flavor is an ideal supplement to the kiwifruit and manuka honey.",
    userRating: 3.6,
    SHU: 949500,
    price: 989,
  },
  {
    name: "Melinda’s - Naga Jolokia Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/59/melindas_naga_jolokia_lg.jpg",
    pepper: "Bhut Jolokia (Ghost Chili)",
    description:
      "Melinda’s Naga Jolokia Hot Sauce will thrill the most seasoned hot sauce lover. Fire and flavor is what this sauce is all about!",
    userRating: 4.2,
    SHU: 449500,
    price: 1189,
  },
  {
    name: "CaJohns - Nagasoreass",
    imageURL:
      "https://hotsaucefever.com/images/sauces/58/naga_soreass_spicy_sauce_lg.jpg",
    pepper: "Bhut Jolokia (Ghost Chili)",
    description:
      "Nagasoreass Hot Sauce Warning! This fiery sauce is as vicious as the creature portrayed on the label! It's a tasty blend, made with the World's two hottest chiles!",
    userRating: 5.0,
    SHU: 999900,
    price: 1500,
  },
  {
    name: "Satan's Rage Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/57/satans_rage_saucehot_lg.jpg",
    pepper: "Cayenne, Bhut Jolokia (Ghost Chili), Peri Peri, Chipotle",
    description:
      "Satan's Rage Hot Sauce - Made with Ghost Peppers.When you indulge in this sauce you will surely encounter the wrath of Satan's Rage.Moments after you taste this sinfully delicious sauce you will pay the price.",
    userRating: 4.1,
    SHU: 40000000,
    price: 900,
  },
  {
    name: "Mad Dog 357 - Pure Ghost Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/56/mad_dog_357_pure_ghost_chili.jpg",
    pepper: "Habanero, Bhut Jolokia (Ghost Chili), Peri Peri",
    description:
      "Mad Dog 357 Pure Ghost Hot Sauce - No Extract Added To This Edition. Made with the Naga Jolokia Ghost Pepper, The Worlds Hottest Pepper.",
    userRating: 3.8,
    SHU: 300000,
    price: 800,
  },
  {
    name: "Mad Dog 357 - Ghost Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/55/mad_dog_357_ghost_pepper_sauce.jpg",
    pepper: "Habanero, Bhut Jolokia (Ghost Chili), Peri Peri",
    description:
      "Ever seen a ghost? One taste of 357 Mad Dog Ghost Pepper Hot Sauce, and you will!...your own! Made with the world's hottest chile pepper, the Bhut Jolokia, this isn't just super hot.",
    userRating: 3.8,
    SHU: 900000,
    price: 760,
  },
  {
    name: "Mad Dog 357 - Ghost Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/55/mad_dog_357_ghost_pepper_sauce.jpg",
    pepper: "Habanero, Bhut Jolokia (Ghost Chili), Peri Peri",
    description:
      "Ever seen a ghost? One taste of 357 Mad Dog Ghost Pepper Hot Sauce, and you will!...your own! Made with the world's hottest chile pepper, the Bhut Jolokia, this isn't just super hot.",
    userRating: 3.8,
    SHU: 900000,
    price: 760,
  },
  {
    name: "Grace - Scotch Bonnet Hot Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/54/grace_scotch_bonnet_pepper_sauce_bottle.jpg",
    pepper: "Scotch Bonnet",
    description: "Scotch bonnet hot sauce.",
    userRating: 3.9,
    SHU: 50000,
    price: 700,
  },
  {
    name: "Grace - Hot Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/53/grace_original_jamaican_very_hot_pepper_sauce.jpg",
    pepper: "Scotch Bonnet",
    description:
      "Grace Hot Pepper Sauce - if you went to Jamaica and asked for hot sauce this is the one they would hand you. Grace foods since 1922 has been the number one hot sauce brand in Jamaica.",
    userRating: 4.1,
    SHU: 770000,
    price: 1700,
  },
  {
    name: "Nando's - Garlic Peri Peri Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/52/nandos_garlic_pepper_sauce_peri_peri.jpg",
    pepper: "Cayenne, Peri Peri, Serrano",
    description:
      "A traditional Garlic Peri-Peri sauce. Blended with Peri-Peri & Serrano chilies, bold garlic pieces, and a dash of lemon....A characteristic of the Peri-Peri chili is that the heat creeps up on you, thus allowing you to first enjoy the taste & then ex-peri-peri ence the African glow.",
    userRating: 4.2,
    SHU: 370000,
    price: 500,
  },
  {
    name: "Nando's - Medium Peri Peri Pepper Sauce",
    imageURL: "https://hotsaucefever.com/images/sauces/51/nandos_peri_peri.jpg",
    pepper: "Peri Peri",
    description: "South African hotsauce at its finest.",
    userRating: 4.2,
    SHU: 20000,
    price: 600,
  },
  {
    name: "Nando's - Hot Peri Peri Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/50/nandos_hot_peri_peri.jpg",
    pepper: "Cayenne, Peri Peri, Serrano",
    description: "South African hotsauce at its finest.",
    userRating: 3.7,
    SHU: 210000,
    price: 840,
  },
  {
    name: "Crazy Jerry's Devil's Brew Garlic Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/49/crazy_jerrys_devils_brew_garlic_hotsauce.jpg",
    pepper: "Habanero, Cayenne, Tabasco",
    description: "Crazy Jerry's hot sauce.",
    userRating: 4.3,
    SHU: 2130000,
    price: 515,
  },
  {
    name: "Crazy Jerry's Biker Trash D.I.L.L.I.G.A.F. Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/48/crazy_jerrys_biker_trash_habanero_garlic_sauce.jpg",
    pepper: "Habanero, Trinidad Scorpion",
    description: "Delicious hot sauce.",
    userRating: 3.3,
    SHU: 2000000,
    price: 615,
  },
  {
    name: "Crazy Jerry's Orange Rush Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/47/hot_sauce_review_crazy_jerrys_orange_rush.jpg",
    pepper: "Habanero, Chipotle",
    description: "A mandarin hot sauce that will blow your mind.",
    userRating: 5.0,
    SHU: 2900000,
    price: 500,
  },
  {
    name: "Crazy Jerry's Brain Damage Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/46/hot_sauce_brain_damage_crazy_jerrys.jpg",
    pepper: "Cayenne",
    description:
      "Crazy Jerry's Brain Damage Hot Sauce.this hot sauce ain't for wimps...it's for people with an adventurous soul looking for cheap thrills.",
    userRating: 3.0,
    SHU: 1000000,
    price: 700,
  },
  {
    name: "Trinidad - Extra Hot Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/45/trinidad_extra_hot_habanero.jpg",
    pepper: "Poblano",
    description: "A powerful punch in a tiny bottle.",
    userRating: 4.5,
    SHU: 1800000,
    price: 1000,
  },
  {
    name: "Trinidad - Hot Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/43/sauce_hot_trinidad_habanero.jpg",
    pepper: "Poblano",
    description: "A unique tasting hot-sauce, sure to please.",
    userRating: 4.7,
    SHU: 1400000,
    price: 1100,
  },
  {
    name: "Marie Sharp's Belizean Heat - Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/42/marie_sharp_belizean_heat_habanero_pepper_sauce.jpg",
    pepper: "Red Pepper",
    description:
      "Marie Sharp's Belizean Heat Habanero Pepper Sauce is great for cooking. Flavor Soups, Sauces and Stir Fries or add to boiling water for rice, pasta or broiled seafood.",
    userRating: 4.5,
    SHU: 1300000,
    price: 900,
  },
  {
    name: "Marie Sharp's - Mild Habanero Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/41/habanero_pepper_sauce_marie_sharp_mild.jpg",
    pepper: "Habanero",
    description: "A milder but still potent blend.",
    userRating: 4.5,
    SHU: 100000,
    price: 800,
  },
  {
    name: "Marie Sharp's - Grapefruit Pulp Habanero Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/40/grapefruit_pulp_habanero_pepper_sauce.jpg",
    pepper: "Habanero",
    description: "The great taste of Grapefruit and Yellow Habanero.",
    userRating: 4.1,
    SHU: 100000,
    price: 500,
  },
  {
    name: "Marie Sharp's - Orange Pulp Habanero Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/38/orange_pulp_habanero_chilli_sauce.jpg",
    pepper: "Habanero",
    description:
      "Marie Sharp's Orange Pulp Hot Sauce is a unique habanero and orange-based blend that achieves the perfect balance between flavor and heat. Nestled in the foothills of the Mayan Mountains, Marie Sharps factory still creates products the old-fashioned way.",
    userRating: 4.6,
    SHU: 110000,
    price: 750,
  },
  {
    name: "Marie Sharp's - BEWARE Habanero Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/36/marie_sharp_beware_heat_chilli_sauce.jpg",
    pepper: "Cayenne",
    description:
      "If you are in need of extreme heat (as in mouth numbing, taste nothing else kind of heat) then this is for you. This is a quality product - as all of Marie Sharp's stuff is.",
    userRating: 4.6,
    SHU: 1120000,
    price: 799,
  },
  {
    name: "Stonewall Kitchen Habanero Mango Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/34/hotsauce_stonewall_habanero_mango_lg.jpg",
    pepper: "Habanero",
    description: "A medium heat sauce.",
    userRating: 2.3,
    SHU: 1000,
    price: 499,
  },
  {
    name: "Walkerswood - Hot Jonkanoo Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/31/walkers_wood_jonkanoo_pepper_sauce.jpg",
    pepper: "Walkerswood Jamaica",
    description:
      "Walkerswood Jonkanoo Pepper Sauce captures the festive Jonkanoo spirit in this sunny and spicy hot sauce.",
    userRating: 3.6,
    SHU: 3000,
    price: 579,
  },
  {
    name: "Walkerswood - Hot Jamaican Scotch Bonnet Pepper Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/30/jamaican_scotch_bonnet_pepper_sauce_walkers.jpg",
    pepper: "Scotch Bonnet",
    description:
      "They started with the habanero pepper (just about the hottest variety on this planet) and then added sugar cane pineapple and vinegar.",
    userRating: 3.7,
    SHU: 6000,
    price: 679,
  },
  {
    name: "The Pepper Plant - Chipotle Pepper Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/29/the_pepper_plant_chipotle.jpg",
    pepper: "Jalapeño",
    description:
      "The Pepper Plant has created this chipotle sauce from a blend of jalapenos which are spiced and smoked. Use as a marinade for meats and poultry. Not too hot just medium.",
    userRating: 5.0,
    SHU: 9000000,
    price: 1400,
  },
];

const carts = [
  {
    isCompleted: true,
    userId: 1,
  },
  {
    isCompleted: false,
    userId: 2,
  },
  {
    isCompleted: false,
    userId: 3,
  },
];

const cartItems = [];

// const cartItems = [
// 	{
// 		cartId: 1,
// 		sauceId: 1,
// 		quantity: 2,
// 		price: 642,
// 	},
// 	{
// 		cartId: 1,
// 		sauceId: 2,
// 		quantity: 3,
// 		price: 795,
// 	},
// 	{
// 		cartId: 2,
// 		sauceId: 2,
// 		quantity: 2,
// 		price: 795,
// 	},
// 	{
// 		cartId: 3,
// 		sauceId: 2,
// 		quantity: 12,
// 		price: 795,
// 	},
// ]

module.exports = { users, sauces, carts, cartItems };
