const router = require('express').Router()

router.get('/',(req,res) => {
    res.status(200).send('connected to checkin')
})

module.exports = router