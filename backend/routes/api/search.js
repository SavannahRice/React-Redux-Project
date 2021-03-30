const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental } = require('../../db/models');
const { Sequelize } = require('sequelize');
const { Op } = require("sequelize");

router.post('', asyncHandler(async(req, res) => {
    const { searchInput } = req.body
    console.log('test')
    const rentals = await Rental.findAll({
        where: {
            state: {[Op.iLike]: `%${searchInput}%`}
        }
    })
    return res.json(rentals);
}))

module.exports = router;