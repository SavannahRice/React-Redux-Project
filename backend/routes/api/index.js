// backend/routes/api/index.js
const express = require('express');
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const rentalsRouter = require('./rentals.js');
const searchRouter = require('./search.js');
const db = require('../../db/models');
const { Sequelize } = require('sequelize');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/rentals', rentalsRouter);
router.use('/search', searchRouter);


// router.post('/test', function(req, res){
//     res.json({requestBody: req.body});
// });

//Code for testing middleware

// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//           username: 'Demo-lition'
//         },
//       })
//     setTokenCookie(res, user);
//     return res.json({ user });
//   }));


module.exports = router;