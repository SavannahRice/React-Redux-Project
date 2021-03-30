const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental } = require('../../db/models');
const { Sequelize } = require('sequelize');

router.get('', asyncHandler(async(req, res) => {
    console.log('test')
    const rentals = await Rental.findAll({
        order: [[ Sequelize.fn('RANDOM')]],
        limit: 8
    })
    return res.json(rentals);
}))

module.exports = router;
