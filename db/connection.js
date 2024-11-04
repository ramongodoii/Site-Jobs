const Sequelize = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = isProduction ? new Sequelize('postgresql://postgres:QCFUbWfjPxmWteAEklWUAgpgRnZOLREV@postgres.railway.internal:5432/railway', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}) : new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});

module.exports = sequelize;