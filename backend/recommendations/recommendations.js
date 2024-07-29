const express = require("express")
const {

    getSimilar, getTInfo

} = require('../controller/recommendationsController')

const router = express.Router()

router.get('/:name', getSimilar)

module.exports = router