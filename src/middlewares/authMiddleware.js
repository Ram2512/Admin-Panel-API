const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authenticate;
