const config = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  db: {
    db_host: process.env.DB_HOST || "localhost",
    db_name: process.env.DB_NAME || "postgres",
    db_user: process.env.DB_User || "root",
    db_pass: process.env.DB_PASS || "root",
    db_port: process.env.DB_PORT || 5432,
  },
  log: {
    appenders: {
      cheese: { type: "file", filename: "logs/cheese.log" },
      access: { type: "file", filename: "logs/access.log" },
    },
    categories: {
      default: { appenders: ["cheese"], level: "info" },
      access: { appenders: ["access"], level: "info" },
    },
  },
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: process.env.JWT_EXPIRE,
  },
};

export default config;
