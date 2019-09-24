const users = require('./users');

module.exports = (router) => {
  users(router);
  if(!router){
    return router;
  }
 return router;
};
