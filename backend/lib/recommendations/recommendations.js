const express = require("express")
const {

    getSimilar

} = require('../controller/recommendationsController')

const router = express.Router()

router.get('/:name', getSimilar)

module.exports = router