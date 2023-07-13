const mongoose = require('mongoose');
const Provider = require('../models/providersSchema');
const Product = require('../models/productsSchema');
require('dotenv').config();

const db = process.env.MY_MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log('mongodb SEED connection success'))
  .catch((error) => console.log(error));

const providersSeeder = [
    {
        "name": "Eleggua",
        "CIF": "B59401863Q",
        "address": "C / de la Paz, 6"
    },

    {
        "name": "El Alquimista",
        "CIF": "B37806512D",
        "address": "C / Puentelarra, 9 local 15"
    }
]

const productsSeeder = [
    {
        "title": "Aceite Esotérico de Jacinto",
        "description": "Aceite esotérico especialmente preparado para atraer el amor y la suerte.\nSe utiliza para ungir velas. Envase de 10ml.",
        "price": 8.50,
        "relevance": 8,
        "image": "https://mundo-de-brujas.com/cdn/shop/products/0101042-1643493343_jpg.png?v=1665663124",
        "provider": "El Alquimista"
    },

    {
        "title": "Aceite especial atrae dinero. 60 ml",
        "description": "Este aceite especial esta preparado para atraer el dinero hasta nosotros y tener prosperidad económica. Se utiliza para ungir velas,preparar baños,perfumes y rituales.",
        "price": 7.44,
        "relevance": 5,
        "image": "https://www.almamaye.com/wp-content/uploads/2017/11/productos365_Ac-especial-atrae-dinero.png",
        "provider": "Eleggua"
    },
]

const seedDB = async () => {

    await Provider.deleteMany({});
    await Product.deleteMany({});

    await Provider.insertMany(providersSeeder);
    
    for(let i = 0; i < productsSeeder.length; i++) {
        const searchProvider = await Provider.find({name: productsSeeder[i].provider}, {returnOriginal: false});
        const provider_id = searchProvider[0]._id.toString()
        console.log(provider_id);

        productsSeeder[i].provider = provider_id
    }

    await Product.insertMany(productsSeeder);
    console.log('seedDB function ran');
  };

  seedDB().then(() => {
    console.log('seeds closed connection');
    mongoose.connection.close();
  });