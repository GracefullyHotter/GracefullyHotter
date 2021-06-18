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
]

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
]

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
]

const cartItems = [
	{
		cartId: 1,
		sauceId: 1,
		quantity: 2,
		price: 642,
	},
	{
		cartId: 1,
		sauceId: 2,
		quantity: 3,
		price: 795,
	},
	{
		cartId: 2,
		sauceId: 2,
		quantity: 2,
		price: 795,
	},
	{
		cartId: 3,
		sauceId: 2,
		quantity: 12,
		price: 795,
	},
]

module.exports = { users, sauces, carts, cartItems }
