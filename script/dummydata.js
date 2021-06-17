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
    price: 6.42,
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
    price: 7.95,
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
    price: 7.42,
  },
  {
    name: "Texas Pete - Hotter Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/430/texas_pete_hotter.jpg",
    pepper: "Tabasco",
    description: "Three times hotter than Texas Pete's original sauce.",
    userRating: 4.5,
    SHU: 1000,
    price: 5.95,
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
    price: 4.42,
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
    price: 10.0,
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
    price: 12.49,
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
    price: 6.95,
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
    price: 4.95,
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
    price: 6.95,
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
    price: 6.95,
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
    price: 8.95,
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
    price: 8.95,
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
    price: 4.0,
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
    price: 12.0,
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
    price: 20.0,
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
    price: 60.0,
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
    price: 8.93,
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
    price: 4.45,
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
    price: 12.99,
  },
  {
    name: "Louisiana Fish Fry - Cravin' Cajun Hot Sauce",
    imageURL:
      "https://hotsaucefever.com/images/sauces/539/cravin_cajun_hot_sauce.jpg",
    pepper: "Cayenne",
    description: "Bring the taste of Louisiana home",
    userRating: 4.3,
    SHU: 100000,
    price: 7.95,
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
    price: 9.95,
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
    price: 10.98,
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
    price: 4.99,
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
    price: 9.83,
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
    price: 11.25,
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
    price: 14.95,
  },
];

const carts = [
  {
    isComplete: true,
    userId: 1,
  },
  {
    isComplete: false,
    userId: 1,
  },
  {
    isComplete: false,
    userId: 2,
  },
];

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
];


module.exports = { users, sauces, carts, cartItems };
