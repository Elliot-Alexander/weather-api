const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()
const moment = require("moment")
const mariadb = require("mariadb")
const cors = require("cors")

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/upload/temperature', (req, res) => {
    console.log(req.body)
})

app.post('/upload/humidity', (req, res) => {
    console.log(req.body)
})

app.post('/upload/heatindex', (req, res) => {
    console.log(req.body)
})

app.get('/temperature', (req, res) => {

})

app.get('/humidity', (req, res) => {

})

app.get('/heatindex', (req, res) => {

})

app.listen(port, () => {
    console.log(`💡 Listening on port ${port}`)
})