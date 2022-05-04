const router = require('express').Router();

const userRoutes = require('./user-routers.js');

router.use('/users', userRoutes);

module.exports = router;