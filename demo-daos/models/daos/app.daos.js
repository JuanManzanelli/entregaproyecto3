const envConfig = require('../../config'); 

let ProductsDao;
let CartsDao;
let UsersDao; 

switch(envConfig.DATASOURCE) {
  case 'mongo':
    ProductsDao = require('./products/products.mongo.dao');
    CartsDao = require('./cart/cart.mongo.dao');
    UsersDao = require('./users/users.mongo.dao');   
  break;
  
  case 'firebase':
    ProductsDao = require('./products/products.firebase.dao');
    CartsDao = require('./cart/cart.firebase.dao');
    UsersDao = require('./users/users.mongo.dao'); 
    break;

  case 'memory':
    ProductsDao = require('./products/products.memory.dao');
    CartsDao = require('./cart/cart.memory.dao');
    UsersDao = require('./users/users.mongo.dao'); 
    break;

  case 'file':
     ProductsDao = require('./products/products.file.dao');
     CartsDao = require('./cart/cart.file.dao');
     UsersDao = require('./users/users.mongo.dao'); 
     break; 

  default:
    throw new Error("Invalid Datasource");
  }
  
  module.exports = { ProductsDao, CartsDao, UsersDao };