import express from 'express';
import cors from 'cors';
import pool from './database.js'; // 👈 import the PostgreSQL connection

const app = express();
app.use(cors());
app.use(express.json());

// Example query route
app.get('/api/students', async (req, res) => {
  const result = await pool.query('SELECT * FROM students');
  res.json(result.rows);
});
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));


 
