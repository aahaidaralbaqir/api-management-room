const router = require('express').Router()
const { findAllOrder,createOrder } = require('../controllers/order')
const { authentication } = require('../middleware')


router.use(authentication)

router
 .post(
    '/',
    createOrder
 )
 .get(
     '/',
     findAllOrder
 )
 

module.exports = router