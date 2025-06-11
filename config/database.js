import { Sequelize } from 'sequelize'

const config =  {
    "username": "root",
    "password": "my-secret-pw",
    "database": "leave",
    "host": "localhost",
    "dialect": "mysql",
    "timezone": "+07:00"
  }

const connectDB = {
  database: config.database,
  user: config.username,
  password: config.password,
  host: config.host,
  dialect: config.database,
}
const sequelize = new Sequelize(
  connectDB.database,
  connectDB.user,
  connectDB.password,
  {
    host: connectDB.host,
    dialect: 'mysql',
    logging: false,
    timezone: '+07:00',
  },
)

export const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default sequelize
