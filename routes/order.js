const router = require('express').Router()
const { authentication } = require('../middleware')

router.use(authentication)

router.put('/:checkin_id',(req,res) => {
    
})

module.exports = router