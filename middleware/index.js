const jwt = require('jsonwebtoken');
  exports.authentication = async (req,res,next) => {
    const bearerHeader = await req.headers['authorization']
    if(typeof bearerHeader !== "undefined") {
      const bearer = await bearerHeader.split(' ')
      const bearerToken = await bearer[1]
      req.token = await bearerToken
      
     jwt.verify(req.token, 'my-secret-key', (err, auth) => {
        if (err) {
          res.status(400).send({
            message: "unauthorized"
          });
        }
        else {
          req.user = auth;
          next();
        }
      })

    }else{
      res.status(400).send({
        message : 'token not found'
      })
    }
  }


