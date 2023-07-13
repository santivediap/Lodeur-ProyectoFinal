const Provider = require('../models/providersSchema')
const Product = require('../models/productsSchema')

// GET -> http://localhost:3000/api/products
// Obtiene products de la BBDD según su título y/o Provider

const getProductsByTitleOrProvider = async (req, res) => {
    const { title, provider, page, sorttype, sort } = req.query

    let products = []

    const pages = parseInt(page);
    const skipIndex = (pages - 1) * 10;

    let titleRegex = new RegExp(`${title}`);
    let providerRegex = new RegExp(`${provider}`);

    if(title || provider) {
        if(title && provider) {
            const searchProvider = await Provider.find({name: { $regex: providerRegex, $options: "i" }}, {returnOriginal: false});
    
            if(searchProvider.length) {
                const productsList = []
    
                    for(let i = 0; i < searchProvider.length; i++) {
                        const provider_id = searchProvider[i]._id.toString()
                        const newProducts = await Product
                        .find({
                            title: { $regex: titleRegex, $options: "i" },
                            provider: provider_id,
                            }, "-_id -__v")
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .limit(10)
                        .skip(skipIndex)
    
                        productsList.push(...newProducts)
                    }
    
                    switch(sorttype) {
                        case "title":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.title.localeCompare(b.title)
                                })
    
                                productsList.reverse()
                            } else {
                                productsList.sort((a, b) => {
                                    return a.title.localeCompare(b.title)
                                })
                            }
                            products.push(...productsList)
                            break;
    
                        case "relevance":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.relevance - b.relevance
                                })
                            } else {
                                productsList.sort((a, b) => {
                                    return b.relevance - a.relevance
                                })
                            }
                            products.push(...productsList)
                            break;
    
                        case "price":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.price - b.price
                                })
                            } else {
                                productsList.sort((a, b) => {
                                    return b.price - a.price
                                })
                            }
                            products.push(...productsList)
                            break;
                    }
            }
        } else {
            if(title) {
                switch(sorttype) {
                    case "title":
                        if(sort == "asc") {
                            products = await Product
                            .find({
                                title: { $regex: titleRegex, $options: "i" },
                                }, "-_id -__v")
                            .populate('provider', 'name -_id')
                            .select('title description price relevance image provider -_id')
                            .sort({title: "asc"})
                            .limit(10)
                            .skip(skipIndex)
                        } else {
                            products = await Product
                            .find({
                                title: { $regex: titleRegex, $options: "i" },
                                }, "-_id -__v")
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
                            .find({
                                title: { $regex: titleRegex, $options: "i" },
                                }, "-_id -__v")
                            .populate('provider', 'name -_id')
                            .select('title description price relevance image provider -_id')
                            .sort({price: "asc"})
                            .limit(10)
                            .skip(skipIndex)
                        } else {
                            products = await Product
                            .find({
                                title: { $regex: titleRegex, $options: "i" },
                                }, "-_id -__v")
                            .populate('provider', 'name -_id')
                            .select('title description price relevance image provider -_id')
                            .sort({price: "desc"})
                            .limit(10)
                            .skip(skipIndex)
                        }
                        break;
    
                    case "relevance":
                    if(sort == "asc") {
                        products = await Product
                        .find({
                            title: { $regex: titleRegex, $options: "i" },
                            }, "-_id -__v")
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({relevance: "asc"})
                        .limit(10)
                        .skip(skipIndex)
                    } else {
                        products = await Product
                        .find({
                            title: { $regex: titleRegex, $options: "i" },
                            }, "-_id -__v")
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .sort({relevance: "desc"})
                        .limit(10)
                        .skip(skipIndex)
                    }
                    break;
                }
            }
        
            else if(provider) {
                const searchProvider = await Provider.find({name: { $regex: providerRegex, $options: "i" }}, {returnOriginal: false});
    
                if(searchProvider.length) {
                    const productsList = []
    
                    for(let i = 0; i < searchProvider.length; i++) {
                        const provider_id = searchProvider[i]._id.toString()
                        const newProducts = await Product
                        .find({
                            provider: provider_id,
                            }, "-_id -__v")
                        .populate('provider', 'name -_id')
                        .select('title description price relevance image provider -_id')
                        .limit(10)
                        .skip(skipIndex)
    
                        productsList.push(...newProducts)
                    }
    
                    switch(sorttype) {
                        case "title":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.title.localeCompare(b.title)
                                })
    
                                productsList.reverse()
                            } else {
                                productsList.sort((a, b) => {
                                    return a.title.localeCompare(b.title)
                                })
                            }
                            products.push(...productsList)
                            break;
    
                        case "relevance":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.relevance - b.relevance
                                })
                            } else {
                                productsList.sort((a, b) => {
                                    return b.relevance - a.relevance
                                })
                            }
                            products.push(...productsList)
                            break;
    
                        case "price":
                            if(sort == "asc") {
                                productsList.sort((a, b) => {
                                    return a.price - b.price
                                })
                            } else {
                                productsList.sort((a, b) => {
                                    return b.price - a.price
                                })
                            }
                            products.push(...productsList)
                            break;
                    }
                }
            }
        }
    } else {
        if(page) {
            products = await Product
            .find()
            .populate('provider', 'name -_id')
            .select('title description price relevance image provider -_id')
            .limit(10)
            .skip(skipIndex)
        }
    }

    if(products.length) {
        res.status(200).json(products)
    } else {
        res.status(200).json({
            error: "No products found!"
        })
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
    getProductsByTitleOrProvider,
    createProduct,
    updateProduct,
    deleteProduct
}