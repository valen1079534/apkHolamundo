import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config({ path: "./src/env/.env" });

export const pool = createPool({
  host: 'monorail.proxy.rlwy.net',
  user: 'root',
  password: 'PvpFKCwRAgmvTwJTjvziuTuXnSlqgNqb',
  port: '30386',
  database: 'railway',
});

pool
  .getConnection()
  .then((connect) => {
    console.log("Conexión a la database coffeeoffer exitosa");
    connect.release();
  })
  .catch((error) => {
    console.log("Conexión a la database fallida " + error);
  });