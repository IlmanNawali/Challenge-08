const {
  DB_USER = "hgqkizfmpgcnbq",
  DB_PASSWORD = "0a362bdf5906ee4ba528a271979e36c44e6c647f13693a470ee49e128829dba1",
  DB_NAME = "d6bh8j0a3c56vg",
  DB_HOST = "ec2-3-226-163-72.compute-1.amazonaws.com",
  DB_PORT = "5432",
} = process.env;

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
    username: "hgqkizfmpgcnbq",
    password: "0a362bdf5906ee4ba528a271979e36c44e6c647f13693a470ee49e128829dba1",
    database: "d6bh8j0a3c56vg",
    host: "ec2-3-226-163-72.compute-1.amazonaws.com",
    port: "5432",
    dialect: "postgres",
  },


}
