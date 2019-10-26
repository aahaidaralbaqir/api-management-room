const router = require('express').Router()
const {
    findAllRoom,
    findOneRoom,
    createRoom,
    updateRoom
} = require('../controllers/room')
const { authentication } = require('../middleware')

router.use(authentication)

router.get('/',findAllRoom)
router.get('/:room_id',findOneRoom)
router.post('/',createRoom)
router.put('/:room_id',updateRoom)

module.exports = router