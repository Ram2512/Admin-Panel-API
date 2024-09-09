const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '..', 'logs', 'audit.log');

const logAction = (action, userId) => {
    const logMessage = `${new Date().toISOString()} - User ID: ${userId} performed action: ${action}\n`;
    fs.appendFileSync(logFile, logMessage, (err) => {
        if (err) {
            console.error('Failed to write log');
        }
    });
};

module.exports = logAction;
