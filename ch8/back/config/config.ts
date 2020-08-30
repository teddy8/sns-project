import * as dotenv from 'dotenv';
dotenv.config();

type configType = {
  username: string,
  password: string,
  database: string,
  [key: string]: any
}

interface configTypeGroup {
  development: configType,
  test: configType,
  production: configType
}

const config: configTypeGroup = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD!,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD!,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD!,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  }
}

export default config;