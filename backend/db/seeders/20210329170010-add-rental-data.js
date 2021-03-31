'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      
      return queryInterface.bulkInsert('Rentals', [
        {
        title: 'Black Bear Run',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Idaho',
        city: 'Ucon',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bridger View Bunkhouse',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Idaho',
        city: 'Malad City',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        photoThree: faker.image.city(250, 250),
        photoFour: faker.image.city(250, 250),
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chill cottage close to city A',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Idaho',
        city: 'Osburn',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1518889778-5111daad1bda',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Million Dollar View Country Getaway',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Idaho',
        city: 'Priest River',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Rustic Private Cottage w/ King Bed + Oceanside View',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Idaho',
        city: 'Shoshone',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Spacious 4 BR Near Eiffel Tour – 7 Min Walk',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Idaho',
        city: 'New Plymouth',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury Beach House Perfect for Romantic Weekend Getaway',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.' ,
        state: 'Idaho',
        city: 'Gooding',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Enjoy Sunsets at Fully Equipped 2BR Condo',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Idaho',
        city: 'Rexburg',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Modern Artistic Cabin Close to Creek',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.' ,
        state: 'Idaho',
        city: 'Wallace',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1616046080409-a7c37f84ce15',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Historic Vineyard Cottage',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Idaho',
        city: 'Idaho City',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        title: 'Enjoy 3600 Views at Sleek Penthouse on South Beach',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Idaho',
        city: 'Parma',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Enjoy a secluded and exotic beach from a secluded oasis.',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Idaho',
        city: 'Ponderay',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Contemporary Studio Apartment with all Amenities',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Idaho',
        city: 'Paris',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        mainPhoto: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Secluded Countryside Cottage by the Lake',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Idaho',
        city: 'Moscow',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Old Town Apartment with Sauna and Fireplace',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Idaho',
        city: 'Montpelier',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1616046386594-c152babc9e15',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury 1BR Apartment with a Contemporary Kitchen',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Idaho',
        city: 'Driggs',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Hidden 3BR, 2BA Gem w/Pool & Gym',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Idaho',
        city: 'Soda Springs',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lovely 1 BR, APT w/AC & stunning mountain views',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Idaho',
        city: 'Wilder',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stylish Walkout Apartment Close to Metro',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Idaho',
        city: 'Rathdrum',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1567201084856-b53427a34c94',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Eco-friendly Country House for a Romantic Getaway',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Idaho',
        city: 'Kuna',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '1BR Guest House Just 2 Steps from the Festival',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'California',
        city: 'San Gabriel',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1523688471150-efdd09f0f312',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cozy 3BR APT in DT for Easy Access to Shops',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'California',
        city: 'Manteca',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Waterfront Ballard Cottage',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'California',
        city: 'Cutten',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1604237895456-7cba8c9cc59f',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'mountain/water view w/private level & master suite',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.' ,
        state: 'California',
        city: 'Corte Madera',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cozy Rustic Lake Front Cabin on a Private Lake',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.' ,
        state: 'California',
        city: 'Apple Valley',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1599149687740-6c9f9cb8bda8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Modern Waterfront Cottage',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'California',
        city: 'Laguna Hills',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury Modern Home with a Pool & Gym',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'California',
        city: 'Fair Oaks',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1498409454240-d9139b0430e7',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Minimalist Historic Penthouse with Roof Deck',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Utah',
        city: 'Liberty',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stylish Luxe Apartment Steps from Broadway Market',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Utah',
        city: 'Cottonwood Heights',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1584008186374-977c41c84b43',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury Apartment Minutes Away from Times Square',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Utah',
        city: 'Kearns',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sovereign Cottage – Self Check-in & Parking',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Utah',
        city: 'Benjamin',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587845663512-afc8b2deb693',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Executive Apartment with Free Parking & Wifi',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Utah',
        city: 'Nephi',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Explore the City from the Sweetest Cottage in Venice',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Utah',
        city: 'Tooele',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1580753579264-6d5b0776618e',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury 2BR Villa with Pool',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Washington',
        city: 'Seattle',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vintage Airstream Near Deep Ellum & Fair Park',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Washington',
        city: 'Redmond',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1561133676-e2c1c0502aca',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Elegant Art Deco Home with Garden in Condesa',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Washington',
        city: 'Toppenish',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxury City Center Loft on a Traffic-Free Street',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Washington',
        city: 'Highland',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1574221114300-7041bae57687',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Romantic Stone House with Ocean Views ',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Washington',
        city: 'Marietta',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Quirky & Modern Flat in Downtown LA.',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Wyoming',
        city: 'Mountain View',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1527368717868-ff088cc80d0a',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Charming Beach House with Sea View, 5 mins Walk to Beach!',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.' ,
        state: 'Wyoming',
        city: 'Wright',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Spacious Home for Families, Opposite Play Park',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Wyoming',
        city: 'Lander',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1564047046531-fe7ceae81291',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Two story cedar home with incredible oceanview.',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Wyoming',
        city: 'Hoback',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cozy Redmond Home',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Wyoming',
        city: 'Thermopolis',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1601071999131-f26821c0fedf',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Little Luxe Retreat',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Wyoming',
        city: 'Jackson Hole',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nature House: Woods, Wildlife and a Tub for Two!',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'New Mexico',
        city: 'Santa Clara',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1566160768330-4a2bd9b60f2b',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cozy waterfront home',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'New Mexico',
        city: 'Anthony',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Pacific Northwest Getaway',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Oregon',
        city: 'Bend',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1561191838-0ab637332f6e',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vista View Retreat on Netarts Bay',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.',
        state: 'Oregon',
        city: 'Netarts',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1590534373947-1a002db338d9',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Maison des Sirènes-Beach House on Whidbey Island',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Enjoy your stay in this cozy, newly remodeled studio! This studio is centrally located, a short drive from downtown and the beaches. Wifi and parking are included.',
        state: 'Washington',
        city: 'Whidbey Island',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1606523080761-cf2d4d1959ef',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sunset View Retreat',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'Brand new, very clean, studio apartment with a private bathroom, kitchenette and private work space. The studio is renovated with natural stone floors, high end finishings and closets, throughout the apartment.',
        state: 'Palmer Lake',
        city: 'Colorado',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'NW Modern w/ Hot Tub and Billiards Table',
        numBeds: faker.random.number({
          'min': 1,
          'max': 6
        }),
        numBaths: faker.random.number({
          'min': 1,
          'max': 3
        }),
        nightPrice: faker.random.number({
          'min': 50,
          'max': 500
        }),
        description: 'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
        state: 'Washington',
        city: 'Seattle',
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: 'https://images.unsplash.com/photo-1580023623488-85554c8c5d74',
        photoOne: 'https://images.unsplash.com/photo-1616048056617-93b94a339009',
        photoTwo: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
        photoThree: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e',
        photoFour: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        userId: faker.random.number({
          'min': 1,
          'max': 20, 
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Rentals', null, {});
  }
};
