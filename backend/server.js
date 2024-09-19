import express from 'express';
import cors from 'cors';
import projectData from '../data/projects.json' assert { type: 'json' };

const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Route definition
app.get('/getProjects', (req, res) => {
  res.json(projectData);
});

app.get('/getProject/:id', (req, res) => {
  const projectId = req.params.id;
  res.json(projectData[projectId]);
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});