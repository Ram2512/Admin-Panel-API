const express = require('express');
const routes = require('./src/routes');
const sequelize = require('./src/config/config');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', routes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }).catch(err => {
    console.error('Failed to sync database:', err);
  });
  