const router = require('express').Router()
const {
    createCheckin,
    findAllCheckin
} = require('../controllers/checkin')
const { authentication } = require('../middleware')


router.use(authentication)

router
 .post(
    '/',
    createCheckin
 )
 .get(
     '/',
     findAllCheckin
 )


module.exports = router