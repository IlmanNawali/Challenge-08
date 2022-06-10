const DB_USER = prosecc.env.DB_USER || "hgqkizfmpgcnbq";
const DB_PASSWORD = prosecc.env.DB_PASSWORD || "0a362bdf5906ee4ba528a271979e36c44e6c647f13693a470ee49e128829dba1";
const DB_NAME = prosecc.env.DB_NAME || "d6bh8j0a3c56vg";
const DB_HOST = prosecc.env.DB_HOST || "ec2-3-226-163-72.compute-1.amazonaws.com";
const DB_PORT = prosecc.env.DB_PORT || "5432";



module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl:{
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
