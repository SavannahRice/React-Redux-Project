const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental, sequelize } = require('../../db/models');
const { Sequelize } = require('sequelize');
const { Op } = require("sequelize");

router.post('/:id', asyncHandler(async(req, res) => {
    const {startDate, endDate} = req.body;
    const searchInput = req.params.id;
    
    if (startDate === null){
        const rentals = await Rental.findAll({
            where: {
                state: {[Op.iLike]: `%${searchInput}%`}
            }, 
        })
        return res.json(rentals);
    }

    const startSeconds = Date.parse(startDate);
    const endSeconds = Date.parse(endDate);
    
    
    const safeStartDate = new Date(startSeconds).toISOString();
    const safeEndDate = new Date(endSeconds).toISOString();

    const bookedPlacesSubquery = `(
        SELECT "Rentals"."id"
        FROM "Rentals"
        JOIN "Reservations"
        ON "Rentals"."id" = "Reservations"."rentalId"
        WHERE "Reservations"."start_date" <= '${safeEndDate}'
        AND "Reservations"."end_date" >= '${safeStartDate}'
    )`;
    
    const rentals = await Rental.findAll({
        where: {
            state: {[Op.iLike]: `%${searchInput}%`},
            id: {[Op.notIn]: Sequelize.literal(bookedPlacesSubquery)},
        }
    })
    return res.json(rentals);
}))

module.exports = router;