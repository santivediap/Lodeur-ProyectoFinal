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

    {
        "title": "Palo Santo",
        "description": "Se utiliza para expulsar las energías negativas y atraer las energías positivas. Los chamanes lo utilizaban para limpiar y purificar ambientes y malas vibras y fuerzas negativas. Eso es debido a sus propiedades de limpieza física y espiritual. Su aroma ayuda a profundizar en los momentos de meditación ya que relaja la mente. Es muy usado en prácticas de Yoga, Reiki, Aromaterapia.\nAfrodisíaco ayuda a mejorar la relación amorosa y espiritual, en las parejas se puede utilizar en el dormitorio para sus momentos más íntimos amorosos y llenos de felicidad.\nSe utiliza respirándolo para levantar el humor y quitar el estrés.\nEl aroma del palito sirve como ahuyentador del mosquito 100% natural, ideal para las habitaciones de los niños",
        "price": 12.2,
        "relevance": 7,
        "image": "https://zeni-ambient.com/cdn/shop/files/ambientadorfrutosrojoszeni.png?v=1689157980&width=1445",
        "provider": "Eleggua"
    },

    {
        "title": "Agua Florida",
        "description": "Agua perfumada de fabricación industrial. Es una versión americana del Agua de Colonia, o Eau de Cologne. Tiene la misma base cítrica como el Agua de Colonia, pero cambia el énfasis a naranja dulce, y se añaden notas picantes que incluyen a la lavanda y al clavo de olor.\nSu aroma refresca y relaja el ambiente del lugar y las energías de las personas, es ideal para la relajación, aporta serenidad mental y tranquilidad espiritual.\nEl Agua Florida es muy conocida por sus fuertes propiedades de limpieza. Llamado “El perfume más popular en el mundo”, lleva el nombre de la legendaria Fuente de la Juventud, que supuestamente se encuentra en Florida.\nUtilizada en Chamanes y curanderos – para los rituales de wachuma, ayahuasca, y ofrendas a la pachamama siempre está presente el agua de florida.\nPara limpieza y protección espiritual puedes aplicarla en muñecas, sienes, base de la cabeza y de los pies. También se puede aplicar en la base de los 7 Chakras.",
        "price": 9.99,
        "relevance": 8,
        "image": "https://cdn-fllki.nitrocdn.com/ERTBFuhBMhyMgMdzXDVRiWGLGDsZSlAr/assets/images/optimized/rev-d0f3a42/wp-content/uploads/2022/06/Agua-de-Florida-Murray-y-Lanman-1.png",
        "provider": "El Alquimista"
    },

    {
        "title": "Baño 4 ventas",
        "description": "Para fortalecer las ventas y los negocios. Ayuda a la hora de vender cualquier objeto, inmuebles, coches...\nTe ayudará a dominar en los negocios y a atraer clientes. Se acompaña de instrucciones.\nSon aguas jabonosas, que se utilizan para lavar, depurar y purificar hogares, locales, habitaciones, etc.\nDentro de esta gama de productos, éste es el mas fuerte. Está preparado para absorber las energías necesarias para lograr resultados positivos, y para un propósito o deseo determinado.\nAgua jabonosa utilizada para lavar, depurar y purificar hogares, locales, habitaciones, etc.\nPara fortalecer las ventas y los negocios.\nTe ayudará a dominar en los negocios y a atraer clientes.\nTamaño: 250ml",
        "price": 5.78,
        "relevance": 5,
        "image": "https://cdn11.bigcommerce.com/s-23ae9/images/stencil/1280x1280/products/1952/6066/BANO_EN_CAJA_4_VENTAS__49110.1638207305.jpg?c=2",
        "provider": "Eleggua"
    },

    {
        "title": "Agua de sándalo. 221ml",
        "description": "El sándalo es muy utilizado en los países orientales en los negocios, pues favorece las comunicaciones y conversaciones agradables.\nTambién ayuda a desarrollar las cualidades de fraternidad y solidaridad.\nFavorece la liberación de miedos, el buen humor y es un gran depurador energético. Aleja el egoísmo, el fraude y los engaños.\nCon multitud de propiedades energéticas y espirituales, estas son algunas:\n• Aroma único, entre balsámico y dulzón.\n• Potencia las capacidades mentales, ayuda a estudiar.\n• Alivia los dolores de cabeza, el insomnio y los nervios.\n• Aporta paz, calma, serenidad, perseverancia y reflexión.\n• A nivel espiritual, es clarificante y armonizante.\n• Actúa como estimulante sexual.\n• Aporta frescura, vitalidad así como un ambiente de optimismo",
        "price": 8.45,
        "relevance": 3,
        "image": "https://cdn11.bigcommerce.com/s-iaghsg5nn9/images/stencil/1280x1280/products/1077/1321/SANDALO__72148.1596250666.jpg?c=1",
        "provider": "El Alquimista"
    },

    {
        "title": "Colonia de Pacholi Murray&Lanman",
        "description": "De aroma muy exótico e irresistible, despierta la sensibilidad y estimula la espiritualidad.\nTe servirá para mejorar la suerte en tu vida.\nAyuda a eliminar pensamientos negativos.\nContenido: 221ml",
        "price": 4.39,
        "relevance": 9,
        "image": "https://perustocks.es/images/articles/1605_perustocks.com_1.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Colonia de Canela Murray&Lanman",
        "description": "El Agua de Canela es utilizada para rituales de Amor y rituales de Dinero entre otros.\nCalma los ánimos y tranquiliza estados de alteración emocional.\nEmana sentimientos positivos y nos abre al amor.\nDe aroma dulce, simplemente irresistible.\nContenido: 221ml.\nLa canela es utilizada para abrir los caminos a todos los niveles:\n• Muy útil para atraer la prosperidad económica.\n• Atrayente del amor.\n• Gran afrodisíaco.\n• Estimula los dones psíquicos.",
        "price": 8.99,
        "relevance": 10,
        "image": "https://perustocks.es/images/articles/1369_perustocks.com_1.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Agua de Palo Santo Murray&Lanman",
        "description": "Colonia poderosa, para rituales de limpieza espiritual y magia blanca.\nSu refrescante aroma cítrico y sus propiedades calmantes, ayudan a despejar la mente y a apoyar a las emociones.\nPoderosa energía para apoyar a sus oraciones.\nContenido: 221ml.\nEl Palo Santo es una madera sagrada desde tiempos inmemoriales. Esta madera es curativa, y todas las partes de este árbol son usadas de diferentes formas. Es un árbol que muere de forma natural y sólo después de 3 o 4 años de haber caído, es cuando se ponen de manifiesto sus propiedades.",
        "price": 7.5,
        "relevance": 4,
        "image": "https://newagewinkel.nl/11048-pdt_540/eau-de-palo-santo-murray-et-lanman.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Agua Florida Murray&Lanman (NY)",
        "description": "Agua de Florida es una colonia que refresca y relaja el ambiente, así como las energías de las personas, es ideal para la relajación, aporta serenidad mental y tranquilidad espiritual.\nEs llamado «el perfume más popular del mundo«.\nContenido: Botella de 221ml.",
        "price": 4.99,
        "relevance": 2,
        "image": "https://laboutiquemalik.com/cdn/shop/products/eau-de-cologne-florida-water-221ml_900x.jpg?v=1612432390",
        "provider": "El Alquimista"
    },

    {
        "title": "Agua Kananga. Prosperidad, suerte y amor",
        "description": "El agua de Kananga es un perfume usado en prácticas espirituales, rituales esotéricos y ofrendas religiosas.\nEl Agua de Kananga atrae la prosperidad, la suerte y el amor.\nDestaca por rechazar la negatividad y atraer lo positivo.\nEs afrodisíaca por su intenso olor, usado para estimular una relación o simplemente para armonizar.",
        "price": 15,
        "relevance": 10,
        "image": "https://perustocks.es/images/articles/1480_perustocks.com_1.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Colonia de Ruda Murray&Lanman",
        "description": "Atrae la buena fortuna. Para tener suerte en los negocios.\nCombate la envidia y las malas energías.\nAñadida al baño rompe todos los hechizos y maldiciones.\nSalpicada por toda la casa limpia de energía negativa.\nContenido: 221ml.",
        "price": 12,
        "relevance": 0,
        "image": "https://perustocks.es/images/articles/1215_perustocks.com_1.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Extracto Perfume Ashe Nido del Pajaro Macua",
        "description": "Extracto Perfume Nido del Pájaro Macua. Amor, fortuna y suerte.\nCuando lo uses la buena suerte te acompañará.\nPon 3 gotas en tu mano cuando estés con tu persona deseada al lado, el perfume realizará la conquista.\nFrasco de 10 ml.",
        "price": 6.99,
        "relevance": 3,
        "image": "https://www.sucursaldeluz.com/74-large_default/extracto-pajaro-macua-sin-nid.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Extracto Perfume Ashe Lluvia de Oro",
        "description": "Extracto de poderoso perfume ASHE realizado según antiguas costumbres. Perfume para atraer el dinero.\nEste producto es uno de los de mayor éxito en santería y su uso es tan fácil como depositar unas gotas discretamente tras las orejas, cuello o muñecas para conseguir los efectos deseados.\nBásicamente, se trata de aceite perfumante mezclado con otros ingredientes secretos.",
        "price": 9.2,
        "relevance": 7,
        "image": "https://cdn.shopify.com/s/files/1/0664/1100/4149/products/0102170-1650746719_jpg.png?v=1665528834&width=533",
        "provider": "El Alquimista"
    },

    {
        "title": "Extracto Perfume Miel de Amor",
        "description": "Extracto de perfume realizado según antiguas costumbres. Su pareja solo le querrá a usted.\nEl extracto Miel de amor favorece los encuentros amatorios, eleva la líbido y aumenta el deseo.\nSirve para toda petición de amor, romance, sexualidad, reconciliación o endulzamiento.\nEste producto es uno de los de mayor éxito en santería y su uso es tan fácil como depositar unas gotas discretamente tras las orejas, cuello, pecho o muñecas para conseguir los efectos deseados",
        "price": 8.35,
        "relevance": 9,
        "image": "https://cdn11.bigcommerce.com/s-d9j83hl5/images/stencil/1280x1280/products/13040/72347/Honey_Love__86463.1659967408.png?c=2",
        "provider": "Eleggua"
    },

    {
        "title": "Ambientador Diosa de la Fortuna",
        "description": "Ambientador para rociar los espacios, de tu casa o negocio, con finalidad espiritual.\nEspecíficamente para peticiones de éxito, prosperidad y bendición.\nLos aromas condicionan nuestro estado de ánimo, potenciando nuestra concentración y percepción",
        "price": 4.99,
        "relevance": 3,
        "image": "https://static.wixstatic.com/media/1b4fb7_369fd985f4574df481f23280b39682b8~mv2.png/v1/fill/w_559,h_600,al_c/1b4fb7_369fd985f4574df481f23280b39682b8~mv2.png",
        "provider": "El Alquimista"
    },

    {
        "title": "Ambientador 7 Chakras",
        "description": "Ambientador para rociar los espacios, de tu casa o negocio, con finalidad espiritual.\nEs un ambientador para el hogar y para el trabajo, y conseguir un equilibrio. Favorece la creación de un ambiente relajado, además de desbloquear y equilibrar los chacras.\nElaborado a base de pétalos de flores silvestres y raíces centenarias ritualizadas",
        "price": 8,
        "relevance": 5,
        "image": "https://orgonitasenluz.com/2958-medium_default/ambientador-espiritual-siete-chakras.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Ambientador Mal de Ojo",
        "description": "Ambientador para el hogar o trabajo que ayuda a proteger del mal de ojo o envidias.\nVivirás sin malas miradas ni malos deseos hacia ti, alejando a tus enemigos.\nElaborado con hierbas y aceites especiales, su aroma es suave y delicioso.\nFormato spray.",
        "price": 10.99,
        "relevance": 7,
        "image": "https://tiendaesotericapalantir.com/377-large_default/ambientador-contra-mal-de-ojo.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Jabón Natural Ruda",
        "description": "Jabón 100% natural de Ruda, ayuda a alejar las energías negativas, a repeler las malas energías como la envidia, el resentimiento o el mal de ojo.\nAdemás, también sirve cuando se realizan sanaciones. Ayuda a limpiar y eliminar los pensamientos negativos.\nJabón fabricado mediante proceso artesanal y elaborado con ingredientes vegetales de primera calidad, suave y natural. Respetuoso con el medio ambiente",
        "price": 12.99,
        "relevance": 6,
        "image": "https://perustocks.es/images/articles/1882_perustocks.com_1.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Jabón Natural Coco",
        "description": "Purificador, limpia energías negativas que afectan al aura, al cuerpo físico y al mundo espiritual.\nCon ingredientes vegetales de primera calidad, suave y natural. Respetuoso con el medio ambiente.\nA base de hierbas y aceites esenciales. 100% natural.",
        "price": 9.35,
        "relevance": 8,
        "image": "https://www.cavallaro.com.py/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdW9CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f975bb9467105572ceeb3fbe1021a6eeee26a8ff/COCO-EN-PAN-200g.png",
        "provider": "El Alquimista"
    },

    {
        "title": "Jabón Natural Atracción Amor",
        "description": "Jabón 100% natural, Atracción - Amor, nos sirve para atraer al amor o a la persona amada.\nElimina los obstáculos, acortando las distancias o aclarando enfados, así favorece la unión de la relación, el entendimiento entre ámbos y deja que el amor fluya .\nNo se trata de un amarre, ya que con él solo intentas deshacerte de las energías que obstaculizan que alcances el amor.",
        "price": 7.3,
        "relevance": 4,
        "image": "https://www.terragua.co/wp-content/uploads/2020/05/Jabon-natural-Terragua-TRUE-LOVE-02.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Legítimos Polvos 7 Potencias",
        "description": "Legítimos Polvos 7 Potencias – Prosperidad y Triunfo\nInicio / Productos / Santería / Polvos / Legítimos Polvos 7 Potencias – Prosperidad y Triunfo\nPara los rituales de fortaleza.\nPeticiones de prosperidad y éxito en negocios y vida.\nAtrae el dinero, el amor, la salud y el bienestar a tu vida.\nElimina obstáculos, enemigos, malas energías y situaciones difíciles.\nProducto ritualizado. Con Instrucciones.",
        "price": 13.5,
        "relevance": 8,
        "image": "https://www.planetaamatista.com/471-home_default/polvo-siete-potencias-africanas.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Legítimos Polvos Ajo Macho",
        "description": "Protección personal. Estos polvos son un gran protector, se utiliza para limpiezas y para atraer buenas vibraciones.\nNos protege a nosotros y a nuestro hogar, además atrae a clientes y mejora nuestro negocio.\nConseguirá atraer lo bueno hacia nosotros y además eliminar las fuerzas negativas.\nAdemás de atraer la suerte y el dinero, es bueno para el amor.",
        "price": 9.99,
        "relevance": 9,
        "image": "https://eleggua.es/5998-large_default/1901004.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Legítimos Polvos Dorado",
        "description": "Legítimos Polvos Dorado - Suerte en juegos de azar y negocios\nEstos polvos dorados se utilizan para peticiones o rituales que tienen que ver con la abundancia, la fortuna y el dinero.\nUsado para lograr prosperidad, riqueza y la suerte en los juegos de azar. Además, mejora los negocios y la economía en general.\nSe emplea para aumentar la eficiencia de los amuletos, los ayuda a ser más fuertes y te protejan mejor",
        "price": 13.6,
        "relevance": 10,
        "image": "https://productosesotericoscm.com/1548-medium_default/polvo-dorado.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Legítimos Polvos Levanta Negocio",
        "description": "Legítimos Polvos Levanta Negocio - Levantar y mejorar negocios. Para trabajos o rituales cuyo propósito sea la prosperidad económica.\nConseguirá mejorar el negocio, aumentando los clientes y con ello las ventas o la prestación de servicios.\nEl resultado final, conseguiremos tranquilidad y seguridad en nuestro trabajo.",
        "price": 10.99,
        "relevance": 8,
        "image": "https://eleggua.es/6136-large_default/1901046.jpg",
        "provider": "Eleggua"
    },

    {
        "title": "Vela Artesana de colores con cera de abeja 18cm",
        "description": "Vela artesana Karma elaborada a mano mediante el sistema NOQUE (capa a a capa) con un alto porcentaje de cera pura de abeja.\nTamaño: 18x2 cm.\nDuración aproximada de combustión: 8 horas.",
        "price": 6.99,
        "relevance": 10,
        "image": "https://arcoiris.mitiendaonline.com/5247-large_default/vela-torneada-18cm-x-10-graciela.jpg",
        "provider": "El Alquimista"
    },

    {
        "title": "Vela cera virgen colores 1.7x11.5cm",
        "description": "Vela artesanal de cera virgen de gran calidad.\nTamaño 1,7x11,5 cm.\nVela esotérica color rojo: Para lograr los proyectos marcados, Amor. El rojo desarrolla la intensidad de sentimientos y pasiones. Es un color que nos da fortaleza, salud y vigor dando fluidez a la energía conectando con el subconsciente.\nPiedra: granate.  Flor: clavel rojo.  Planeta: Marte.  Día: martes.  Número: tres",
        "price": 8.5,
        "relevance": 3,
        "image": "https://jaimaalkauzar.es/4012-superlarge_default/velones-cera-virgen-abeja-7-cm-diametro-3-tamanos.jpg",
        "provider": "Eleggua"
    }
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