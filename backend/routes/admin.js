const express = require('express')
const router = express.Router()
const adminController = require('../controller/adminController')


router.get('/', adminController.getHome);

router.post('/userRegistration',adminController.register)

router.post('/userLoginConf',adminController.userLoginConf)


module.exports = router