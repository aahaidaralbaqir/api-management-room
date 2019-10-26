const router = require('express').Router()

router.get('/',(req,res) => {
    res.status(200).send('connected to express')
})

module.exports = router