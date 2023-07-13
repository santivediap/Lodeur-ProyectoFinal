const Provider = require('../models/providersSchema')

// GET -> http://localhost:3000/api/providers
// Obtiene todos los providers de la BBDD

const getProviders = async (req, res) => {
    try {
        const providers = await Provider.find({}, '-_id -__v');

        if(providers.length) {
          res.status(200).json(providers)
        } else {
          res.status(200).json({
            error: "No providers found!"
          })
        }
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal server error" });
    }
}

// POST -> http://localhost:3000/api/providers
// Crea un nuevo provider en la BBDD

// {
//   "name": "Eleggua",
//   "CIF": "B59401863Q",
//   "address": "C / de la Paz, 6"
// }

const createProvider = async (req, res) => {
  const { name, CIF, address } = req.body;

  try {
    const newProvider = new Provider({
      name,
      CIF,
      address
    });

    const provider = await newProvider.save();
    res.json(provider);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error, POST Method: ${err.message}`);
  }
}

// DELETE -> http://localhost:3000/api/providers
// Elimina una oferta de trabajo

// {
//     "title": "El Alquimista"
// }

const deleteProvider = async (req, res) => {
    const { name } = req.body;
    try {
      const deletedOffer = await Provider.findOneAndDelete({name: name})
      res.status(200).json({
        msg: "Offer deleted",
        deletedOffer
      })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
    console.log("Your Offer Got Deleted:(");
  };

module.exports = {
    getProviders,
    createProvider,
    deleteProvider
}