import express from 'express'

const app = express()
const port = 5000

// Route definition
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
