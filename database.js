// database.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'summeradmin',
  host: 'localhost',
  database: 'smartsummer',
  password: 'YourSecurePassword123',
  port: 5432
});

export default pool;
