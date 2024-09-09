const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'id',
        },
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
}, {
    paranoid: true, // Enables soft delete
    timestamps: true,
});

module.exports = User;
