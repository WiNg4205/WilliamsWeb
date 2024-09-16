import express from 'express'
import projectData from '../data/projects.json' assert { type: 'json' }

const app = express()
const port = 5000

// Route definition
app.get('/getProjectData', (req, res) => {
  res.json(projectData)
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
