import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'summeradmin',         // ← Your PostgreSQL username
  host: 'localhost',
  database: 'smartsummer',     // ← Your PostgreSQL database name
  password: '55553',  // ← Update to your actual password
  port: 5432,
});

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route to confirm DB is working
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// 🔜 Placeholder for future routes
// app.get('/api/students', async (req, res) => { ... });
// app.post('/api/login', async (req, res) => { ... });

app.listen(3001, () => {
  console.log('Server running on port 3001');
});


 
