const sequelize = require('../config/connection');
const { User } = require('../models');

async function syncDatabase() {
  try {
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
