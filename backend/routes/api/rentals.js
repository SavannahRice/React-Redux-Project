const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental, User } = require('../../db/models');
const { Sequelize } = require('sequelize');

router.get('', asyncHandler(async(req, res) => {
    const rentals = await Rental.findAll({
        order: [[ Sequelize.fn('RANDOM')]],
        limit: 8
    })
    return res.json(rentals);
}));

router.get('/:id', asyncHandler(async(req, res)=> {
    const rentals = await Rental.findByPk(req.params.id);
    return res.json(rentals);
}))

module.exports = router;
