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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        title: 'Enjoy Sunsets at Fully Equipped 2BR Condo at the Beach',
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        title: 'Hidden 3BR, 2BA Gem w/Pool & Gym in DT',
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        title: 'Cozy ocean shores waterfront home',
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
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
        title: 'NW Modern w/ Hot Tub and Billiards Table | Rosario',
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
        description: faker.lorem.sentence() ,
        state: faker.address.stateAbbr(),
        city: faker.address.city(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude(),
        mainPhoto: faker.image.city(500, 500),
        photoOne: faker.image.city(250, 250),
        photoTwo: faker.image.city(250, 250),
        photoThree: faker.image.city(250, 250),
        photoFour: faker.image.city(250, 250),
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
