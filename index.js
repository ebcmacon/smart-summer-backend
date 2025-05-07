
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: 'Jaylen', reading: 75, math: 65, logic: 90 },
  { id: 2, name: 'Ava', reading: 55, math: 70, logic: 60 },
  { id: 3, name: 'Liam', reading: 90, math: 92, logic: 88 },
];

app.get('/api/students', (req, res) => res.json(students));

app.get('/api/student/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student || {});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
