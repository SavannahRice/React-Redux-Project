const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const asyncHandler = require('express-async-handler');

router.use('/api', apiRouter);

// router.get('/', asyncHandler(async(req, res) => {
//   console.log('test')
//   // const rentals = await Rental.findAll({
//   //     order: [[ Sequelize.fn('RANDOM')]],
//   //     limit: 8
//   // })
//   // console.log(rentals);
// }))

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      return res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });
// Serve the static assets in the frontend's build folder
router.use(express.static(path.resolve("../frontend/build")));

// Serve the frontend's index.html file at all other routes NOT starting with /api
router.get(/^(?!\/?api).*/, (req, res) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  return res.sendFile(
    path.resolve(__dirname, '../../frontend', 'build', 'index.html')
  );
});
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      res.status(201).json({});
    });
  }


module.exports = router;

