const Checkin = require('../models').checkin
      Room    = require('../models').room
      Costumer    = require('../models').costumer
exports.createCheckin = (req,res) => {

    let { costumer_id,room_id,is_booked,is_done,duration,order_end_time } = req.body
    
    let data = {
        costumer_id,
        room_id,
        is_booked,
        is_done,
        duration,
        order_end_time
    }

    Checkin
     .create(data)
     .then(result => {
        res
         .status(200)
         .send(result)
     })
     .catch(error => {
         res
          .status(400)
          .send(error)
     })

}

exports.findAllCheckin = (req,res) => {
    Checkin
     .findAll(
         {
            include : [
                {
                model : Costumer,
                as : 'costumer'
               },
               {
                model : Room,
                as : 'room'
               }
            ],
            attributes : ['id','duration','order_end_time','createdAt','updatedAt','is_done','is_booked'],
         },
        )
     .then(result => {
        res
         .status(200)
         .send(result)
     })
     .catch(error => {
         res
          .status(400)
          .send(error)
     })
}

exports.updateCheckin = (req,res) => {
    let { costumer_id,room_id,is_booked,is_done,duration,order_end_time } = req.body
    
    let data = {
        costumer_id,
        room_id,
        is_booked,
        is_done,
        duration,
        order_end_time
    }

    let {checkin_id} = req.params

    Checkin
     .update(
         data,
         {
             where : { id : checkin_id }
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
          .send(error)
     })
}