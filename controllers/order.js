const Room = require('../models').room
const Costumer = require('../models').costumer
const Order = require('../models').order
const moment = require('moment')
const {getCurrentTime}  = require('../helpers/date')
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
            data[i].order_id = null
            data[i].costumer_id = null
            data[i].duration = 0,
            data[i].created_at = 0,
            data[i].order_end_time = 0
            data[i].costumers.map((item,index) => {
                if(item.orders.is_booked == true && item.orders.is_done == false) {
                    data[i].is_booked = true,
                    data[i].is_done = false
                    data[i].order_id = item.orders.id
                    data[i].costumer_id = item.orders.costumer_id
                    data[i].duration = item.orders.duration
                    data[i].created_at = item.orders.createdAt
                    data[i].order_end_time = item.orders.order_end_time
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
    let {room_id,costumer_id,duration,is_booked,is_done} = req.body
    const time = new Date();
      time.setMinutes(time.getMinutes() + parseInt(duration));
      console.log(time)
    let data = {
        room_id,
        costumer_id,
        duration,
        order_end_time : time,
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

exports.checkoutOrder = (req,res) => {
    let { order_id } = req.params
    let data = {
        is_booked : 0,
        is_done : 1
    } 
    Order
     .update(
         data,
         {
             where : {
                id : order_id
             }
         }
     )
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
