const express = require('express');
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const projectRoutes = require('../routes/projectRoutes');
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
