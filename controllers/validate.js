var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
  if( req.body.username === 'admin' && req.body.password === 'admin' ) {
      res.json({
          id: 1,
          username: 'admin',
          jwt: jwt.sign({
              id: 1,
          }, process.env.JWT_SECRET, { expiresIn: 60*60 })
      });
  } else {
      res.status(401).json({
          error: {
              message: 'Wrong username or password!'
          }
      });
  }
};
