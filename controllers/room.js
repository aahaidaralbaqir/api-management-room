const Room = require('../models').room

exports.createRoom = (req,res) => {
    let data = {
        name : req.body.name
    }
    Room.create(data)
    .then(result => {  
        res
         .status(200)
         .send(result)
    })
    .catch(error => console.log(error) )
} 

exports.findAllRoom = (req,res) => {
    Room.findAll({

    })
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

exports.findOneRoom = (req,res) => {
    const room_id = req.params.room_id
    Room.findOne({
        where : {
            id : room_id
        }
    })
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

exports.updateRoom = (req,res) => {
    let data = {
        name : req.body.name
    }
    let room_id = req.params.room_id
    Room.update(
        data,
        { 
            where : { id : room_id }
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