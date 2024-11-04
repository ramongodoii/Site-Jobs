const Sequelize = require('sequelize');

// Verifica se o ambiente é de produção
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = isProduction
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // necessário para muitos serviços de hospedagem
        }
      }
    })
  : new Sequelize({
      dialect: 'sqlite',
      storage: './db/app.db'
    });

module.exports = sequelize;
