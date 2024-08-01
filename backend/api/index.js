const express = require('express')
const recommendationRoutes = require('./recommendations/recommendations')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: ["https://muse-match.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

app.use('/api/musescore', recommendationRoutes)

//Routes
app.get('/', (req, res) => {

    res.json({messg: "Welcome to app!"})

})

app.listen(process.env.PORT, () => {


    console.log('listening on port 4000')


    }
)