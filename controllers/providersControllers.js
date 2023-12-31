/**
 * @author santivediap <https://github.com/santivediap>
 * @exports providersControllers 
 * @namespace providersControllers
 */

const Provider = require('../models/providersSchema')

/**
  * <pre>
  * Obtener providers
  * GET -> http://localhost:5000/api/providers
  * Obtiene todos los providers de la BBDD
  * </pre>
  * @memberof providersControllers 
  * @method getProviders 
  * @async 
  * @param {Object} req Objeto de petición HTTP (request)
  * @param {Object} res Objeto de respuesta HTTP (response)
  * @return {json} Objeto con lista de providers obtenidos
  * @throws {error} 
  */

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

/**
  * <pre>
  * Crear nuevo provider
  * POST -> http://localhost:5000/api/providers
  * Crea un nuevo provider en la BBDD
  * Ejemplo:
  * {
  "name": "Eleggua",
  "CIF": "B59401863Q",
  "address": "C / de la Paz, 6"
}
  * </pre>
  * @memberof providersControllers 
  * @method createProvider 
  * @async 
  * @param {Object} req Objeto de petición HTTP (request)
  * @param {Object} res Objeto de respuesta HTTP (response)
  * @return {json} Objeto con provider creado
  * @throws {error} 
  */

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

/**
  * <pre>
  * Borrar un provider existente
  * DELETE -> http://localhost:5000/api/providers
  * Elimina una oferta de trabajo
  * Ejemplo:
  * {
    "title": "El Alquimista"
}
  * </pre>
  * @memberof providersControllers 
  * @method deleteProvider 
  * @async 
  * @param {Object} req Objeto de petición HTTP (request)
  * @param {Object} res Objeto de respuesta HTTP (response)
  * @return {json} Objeto con resultado del DELETE
  * @throws {error} 
  */

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