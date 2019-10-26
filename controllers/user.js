const User = require('../models').user 
      bcyrpt = require('bcrypt')
      jwt = require("jsonwebtoken")
      saltRounds  = 10


exports.register = (req,res) => {
    let {username,password} = req.body
    bcyrpt.genSalt(saltRounds, function(err, salt) {
        bcyrpt.hash(password, salt, function(err, hash) {
            User.create({
            username,
            password: hash
            }).then(user => {
            const token = jwt.sign({ user_id : user.id }, 'my-secret-key')
            res.send({
                username,
                "acces_token" : token
            })
            })
        })
    })
}

exports.login = (req,res) => {
    let {username,password} = req.body
    User.findOne({
      where: {
        username
      }
    }).then(user => {
      if(!user) {
        res.status(400).send({
          message : "wrong username"
        })
      }else{
        bcyrpt.compare(password,user.password).then(result => {
          if(result){
            const token = jwt.sign({ user_id : user.id }, 'my-secret-key')
            res.status(200).send({
                username : user.username,
                access_token : token
            })
          }else{
            res.status(400).send({
              message : 'Wrong password'
            })
          }
        })
      }
    })
}
