const users = [
  {
      name: "Joe Schmo",
      email: "something@gmail.com",
      password: "password1",
      isAdmin: true,
      orderHistory: [10, 5, 3],
      cart: [
          { hotSauceId: 1, quantity: 2 },
          { hotSauceId: 2, quantity: 1 },
      ],
  },
  {
    name: "Jane Schmo",
    email: "anything@gmail.com",
    password: "password2",
    isAdmin: true,
    orderHistory: [4, 10, 7],
    cart: [
        { hotSauceId: 1, quantity: 2 },
        { hotSauceId: 2, quantity: 1 },
    ],
},
      ],


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
];
