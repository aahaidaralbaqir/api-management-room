const router = require('express').Router()
const { checkoutOrder } = require('../controllers/order')
const { authentication } = require('../middleware')

router.use(authentication)

router
 .put(
     '/:order_id',
     checkoutOrder
 )

module.exports = router