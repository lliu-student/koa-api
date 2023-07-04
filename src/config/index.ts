const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_port: process.env.DB_PORT,
  },
  log: {
    appenders: {
      cheese: { type: 'file', filename: 'logs/cheese.log' },
      access: { type: 'file', filename: 'logs/access.log' },
    },
    categories: {
      default: { appenders: ['cheese'], level: 'info' },
      access: { appenders: ['access'], level: 'info' },
    },
  },
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: process.env.JWT_EXPIRE,
  },
};

export default config;
