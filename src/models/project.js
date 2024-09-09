const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
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

module.exports = Project;
