const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const { User, Role } = require('../models');
const {User}= require('../models/user');
const {Role}= require('../models/role');
const config = require('../config/config');

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const role = await Role.findOne({ where: { name: 'Admin' } });
        if (!role) return res.status(400).json({ error: 'Role not found' });

        const user = await User.create({ username, email, password: hashedPassword, roleId: role.id });
        const token = jwt.sign({ id: user.id, role: role.name }, config.jwtSecret);

        res.status(201).json({ message: 'Admin registered', token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const role = await Role.findByPk(user.roleId);
        const token = jwt.sign({ id: user.id, role: role.name }, config.jwtSecret);
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
