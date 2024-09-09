const {User}= require('../models/user');
const {Role}= require('../models/role');
exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userRole = await Role.findOne({ where: { name: role } });

        if (!userRole) return res.status(400).json({ error: 'Role not found' });

        const user = await User.create({ username, email, password: hashedPassword, roleId: userRole.id });
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
