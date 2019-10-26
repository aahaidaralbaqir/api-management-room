const router = require('express').Router()
const { 
    findAllCostumer,
    findOneCostumer,
    createCostumer,
    updateCostumer
} = require('../controllers/costumer')
const { authentication } = require('../middleware')

router.use(authentication)

router
    .get(
        '/',
        findAllCostumer
    )
    .get(
        '/:costumer_id',
        findOneCostumer
    )
    .post(
        '/',
        createCostumer
    )
    .put(
        '/:costumer_id',
        updateCostumer
    )

module.exports = router