const Costumer = require('../models').costumer 

exports.findAllCostumer = (req,res) => {
    Costumer
     .findAll()
      .then(result => {
          res
           .status(200)
           .send(result)
      })
      .catch(error => {
          res
           .status(200)
           .send(error)
      })
}

exports.createCostumer = (req,res) => {
    let data = {
        name : req.body.name,
        identity_number : req.body.identity_number,
        phone_number : req.body.phone_number,
        image : req.body.image
    }
    Costumer
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

exports.findOneCostumer = (req,res) => {
    const { costumer_id } = req.params
    Costumer
     .findOne({
         where : { 
             id : costumer_id
         }
     })
      .then(result => {
          res
           .status(200)
           .send(result)
      })
      .catch(error => {
          res
           .status(200)
           .send(error)
      })
}

exports.updateCostumer = (req,res) => {

    let data = {
        name : req.body.name,
        identity_number : req.body.identity_number,
        phone_number : req.body.phone_number,
        image : req.body.image
    }
    
    const {costumer_id} = req.params
    
    Costumer
     .update(
         data,
         {
             where : {
                 id : costumer_id
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
          .send(error)
     })
}