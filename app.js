require('express-group-routes')
const express    = require('express')
      app        = express()
      bodyParser = require('body-parser')
      PORT = Number(process.env.PORT || 5000)


// middleware
app.use(bodyParser.json())
app.use('/storage',express.static('storage'))

 // load routes
const indexRoutes = require('./routes/index')
const roomRoutes = require('./routes/room')
const costumerRoutes = require('./routes/costumer')
const orderRoutes = require('./routes/order')
const checkinRoutes = require('./routes/checkin')
// router group
app.group('/api/v2',(router) => {
    router.use('/',indexRoutes)
    router.use('/rooms',roomRoutes)
    router.use('/costumers',costumerRoutes)
    router.use('/orders',orderRoutes)
    router.use('/checkin',checkinRoutes)
})

// lister server
app.listen(PORT , () =>  console.log(`Magic happen at port ${PORT}`) )
