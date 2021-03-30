const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental } = require('../../db/models');
const { Sequelize } = require('sequelize');
const { Op } = require("sequelize");

router.get('/:id', asyncHandler(async(req, res) => {
    console.log('SEARCH--------------------------------------')
    const searchInput = req.params.id
    console.log(searchInput);
    const rentals = await Rental.findAll({
        where: {
            state: {[Op.iLike]: `%${searchInput}%`}
        }
    })
    return res.json(rentals);
}))

module.exports = router;