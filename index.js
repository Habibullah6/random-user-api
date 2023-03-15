const express = require('express');
const cors = require("cors");
const users = require('./routes/v1/users.route');
const app = express()

const port = 5000

// middleware.............
app.use(express.json());
app.use(cors());


app.use('/user', users)



app.get('/', (req, res) => {
  res.send('random user api')
})

app.listen(port, () => {
  console.log(`random user api listening on port ${port}`)
})