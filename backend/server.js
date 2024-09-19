import express from 'express';
import cors from 'cors';
import projectData from '../data/projects.json' assert { type: 'json' };

const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Route definition
app.get('/getProjectData', (req, res) => {
  res.json(projectData);
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});