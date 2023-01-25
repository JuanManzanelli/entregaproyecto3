const envConfig = require('../config');
const firebaseConfig = require('./firebase/firebase.config.json');
const prodsJson = require('./data/products.json');
const cartsJson = require('./data/cart.json');

module.exports = {
  file: { // Esta opcion es solo de demostracion
    //users: './data/users.json',
    products: 'prodsJson',
    cart:'cartsJson',
    
  },
  mongodb: {
    //uri: `mongodb+srv://jorelmaro:${envConfig.DB_PASSWORD}@coder.3c0d1.mongodb.net/?retryWrites=true&w=majority`
    //url de nuestra direccion de mongo.  
  },
  firebase: {
    credentials: firebaseConfig
  },
}