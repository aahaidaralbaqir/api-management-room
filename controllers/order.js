const Room = require('../models').room
const Costumer = require('../models').costumer
const Order = require('../models').order
exports.findAllOrder = (req,res) => {
    Room.findAll({
        include : [
            {
             model : Costumer,
             through : {
                model : Order,
              }
            }
        ]
    })
    .then(result => {
        let data = JSON.parse(JSON.stringify(result))
        let len = data.length
        for(let i = 0; i < len; i++) {
            data[i].is_booked = false,
            data[i].is_done = true
            data[i].costumers.map((item,index) => {
                if(item.orders.is_booked == true && item.orders.is_done == false) {
                    data[i].is_booked = true,
                    data[i].is_done = false
                    return item
                }
            })
        }
        res
         .status(200)
         .send(data)
    })
    .catch(error => {
        console.log(error)
    })
}

exports.createOrder = (req,res) => {
    let {room_id,costumer_id,duration,order_end_time,is_booked,is_done} = req.body
    let data = {
        room_id,
        costumer_id,
        duration,
        order_end_time,
        is_booked,
        is_done
    }
    Order
     .create(data)
     .then(result => {
        res
         .status(200)
         .send(result)
     })
     .catch(error => {
        res
        .status(400)
        .send(result)
     })
}