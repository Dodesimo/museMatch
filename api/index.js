const express = require('express')
const recommendationRoutes = require('./recommendations/recommendations')
const loginRoutes = require('./routes/user')
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: ["https://muse-match-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

app.use('/api/musematch', recommendationRoutes)
app.use('/api/user', loginRoutes)

//Routes
app.get('/', (req, res) => {

    res.json({messg: "Welcome to app!"})

})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
