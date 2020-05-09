const express = require('express')
const commonRoutes = require('./common.route')

const router = express.Router()

router.use('/', commonRoutes)

module.exports = router
