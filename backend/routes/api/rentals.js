const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Rental, User, Reservation, Review } = require('../../db/models');
const { Sequelize, Op } = require('sequelize');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateDates = [
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a start date')
        .custom((value, req) => Date.parse(value) >= new Date())
        .withMessage('Start date must not be before current date'),
    check('endDate')
        .exists({checkFalsy: true})
        .withMessage('Please provide an end date')
        .custom((value, {req}) => Date.parse(value) > Date.parse(req.body.startDate))
        .withMessage('End date must be after start date'),
    handleValidationErrors,
]

router.get('', asyncHandler(async(req, res) => {
    const rentals = await Rental.findAll({
        order: [[ Sequelize.fn('RANDOM')]],
        limit: 8
    })
    return res.json(rentals);
}));

router.get('/:id', asyncHandler(async(req, res)=> {
    const rentals = await Rental.findByPk(req.params.id, {
        include: [User, Review, Reservation]
    });
    return res.json(rentals);
}));

router.post('/:rentalId', validateDates, asyncHandler(async(req, res) => {
    const { userId, startDate, endDate } = req.body;
    
    const reservation = await Reservation.create({
        userId,
        rentalId: req.params.rentalId,
        start_date: startDate,
        end_date: endDate,
    });

    return res.json({reservation})
}));

// router.get('/:rentalId', asyncHandler(async(req, res) => {
//     const reservations = await Reservation.findByPk(req.params.rentalId)
//     return res.json(reservations);
// }))

router.post('/:rentalId/review',  asyncHandler(async(req, res) => {
    console.log('inside review backend route')
    const { userId, description, rating } = req.body;
    const review = await Review.create({
        userId,
        rentalId: req.params.rentalId,
        description,
        rating,
    });

    return res.json({review})
}));

router.get('/:rentalId/review', asyncHandler(async(req, res) => {
    
    // console.log(req.params.rentalId)
    const reviews = await Review.findAll({
        where: {
            rentalId: {
                [Op.eq]: req.params.rentalId
            }
        },
    });
    return res.json(reviews);
}));

router.delete('/:rentalId/review/:reviewId', asyncHandler(async(req, res) => {
    
    const reviewId = req.params.reviewId;
    console.log('THIS IT THE REVIEWID',reviewId)
    const review = await Review.findByPk(reviewId);
    review.destroy();
    return res.json(null);
}));

router.patch('/:rentalId/review/:reviewId', asyncHandler(async(req, res) => {
    const { description, rating } = req.body;
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId);
    await review.update({
        description,
        rating,
    });

    return res.json(review);
}))

module.exports = router;
