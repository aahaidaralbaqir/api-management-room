const router = require('express').Router()
const {
    updateCheckin
} = require('../controllers/checkin')
const { authentication } = require('../middleware')

router.use(authentication)

router.put('/:checkin_id',updateCheckin)

module.exports = router