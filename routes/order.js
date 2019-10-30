const router = require('express').Router()
const { checkoutOrder } = require('../controllers/order')

router
 .put(
     '/:order_id',
     checkoutOrder
 )

module.exports = router