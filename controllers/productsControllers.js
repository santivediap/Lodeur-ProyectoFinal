const Provider = require('../models/providersSchema')
const Product = require('../models/productsSchema')

// GET -> http://localhost:3000/api/products/:title
// Obtiene products de la BBDD según su título contenga 'title'

const getProductsByTitle = async (req, res) => {
    const { title } = req.params

    let titleRegex = new RegExp(`${title}`);

    let products = await Product.find({
          title: { $regex: titleRegex, $options: "i" },
        }, "-_id -__v");

    if(products.length) {
        res.status(200).json(products)
    } else {
        res.status(200).json({
            error: "No products found!"
        })
    }
}

// GET -> http://localhost:3000/api/products
// Obtiene todos los products de la BBDD

const getProducts = async (req, res) => {
    let products = [];
    const sortType = req.query.sorttype
    const sort = req.query.sort
    const pagination = req.query.page
    try {
        if(sortType && pagination && sort) {
            const page = parseInt(pagination);
            const skipIndex = (page - 1) * 10;
            switch(sortType) {
                case "title":
                    if(sort == "asc") {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({title: "asc"})
                        .limit(10)
                        .skip(skipIndex)

                    } else {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({title: "desc"})
                        .limit(10)
                        .skip(skipIndex)
                    }
                    break;

                case "price":
                    if(sort == "asc") {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({price: "asc", title: "asc"})
                        .limit(10)
                        .skip(skipIndex)
                    } else {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({price: "desc", title: "desc"})
                        .limit(10)
                        .skip(skipIndex)
                    }
                    break;

                case "relevance":
                    if(sort == "asc") {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({relevance: "asc", title: "asc"})
                        .limit(10)
                        .skip(skipIndex)
                    } else {
                        products = await Product
                        .find()
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({relevance: "desc", title: "desc"})
                        .limit(10)
                        .skip(skipIndex)
                    }
                    break;

                    default:
                    products = await Product
                    .find()
                    .populate('provider', 'name -_id')
                    .select('title description price relevance image provider -_id')
                    break;
            }

            // Check if products exist
            if(products.length) {
                res.status(200).json(products)
            } else {
                res.status(200).json({
                    error: "No products found!"
                })
            }
        } else {
            products = await Product
            .find()
            .populate('provider', 'name -_id')
            .select('title description price relevance image provider -_id')
            res.status(200).json(products)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}

// POST -> http://localhost:3000/api/products
// Crea un nuevo product en la BBDD

// {
//     "title": "Aceite Esotérico de Jacinto",
//     "description": "Aceite esotérico especialmente preparado para atraer el amor y la suerte.\nSe utiliza para ungir velas. Envase de 10ml.",
//     "price": 8.50,
//     "relevance": 8,
//     "image": "https://mundo-de-brujas.com/cdn/shop/products/0101042-1643493343_jpg.png?v=1665663124",
//     "provider": "El Alquimista"
// }

const createProduct = async (req, res) => {
    const { title, description, price, relevance, image, provider } = req.body

    try {
        const searchProvider = await Provider.find({name: provider}, {returnOriginal: false});

        if(searchProvider.length) {
            const provider_id = searchProvider[0]._id.toString()
            
            const product = new Product({
                title,
                price,
                description,
                relevance,
                image,
                provider: provider_id
            });
            
            const result = await product.save();
            res.status(201).json({
                message: `Producto creado`,
                product: req.body
            })
        } else {
            res.status(404).json({
                msg: "Provider buscado no encontrado"
            })
        }

    } catch (error) {
        res.status(500).json({error})
    }
}

// PUT -> http://localhost:3000/api/products
// Actualizar un product en la BBDD

const updateProduct = async (req, res) => {
    const { title, description, price, relevance, image, provider, new_title} = req.body;
    try {
        const searchProvider = await Provider.find({company_name: provider});
        if(searchProvider.length) {
            const provider_id = searchProvider[0]._id.toString()
            
            const product = await Product
            .findOneAndUpdate({title: title}, {title: new_title, description, price, relevance, image, provider: provider_id}, {returnOriginal: false})
    
            res.status(200).json({
                message: `Producto actualizado`,
                product: product
            })
        } else {
            res.status(404).json({
                msg: "Provider buscado no encontrado"
            })
        }

    } catch (error) {
        res.status(500).json({error})
    }
}

// DELETE -> http://localhost:3000/api/products
// Eliminar un product en la BBDD

const deleteProduct = async (req, res) => {
    const { title } = req.body

    try {
        const searchProduct = await Product.findOneAndDelete({title: title})

        res.status(200).json({
            message: "Producto eliminado",
            product: searchProduct
        })
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getProducts,
    getProductsByTitle,
    createProduct,
    updateProduct,
    deleteProduct
}