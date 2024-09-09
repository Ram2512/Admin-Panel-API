const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', authenticate, authorizeRole('Admin'), createUser);
router.get('/', authenticate, authorizeRole('Admin'), getUsers);

module.exports = router;
