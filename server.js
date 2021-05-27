
const express = require('express')
const bodyParser = require('body-parser')
const avisRoutes = require('./routes/avis') 
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/avis', avisRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})