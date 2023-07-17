const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config()

// Routers
const providersApiRouter = require('./routes/providersRoutes')
const productsApiRouter = require('./routes/productsRoutes')

// Connect MongoDB
const connectDB = require('./utils/mongodb');
connectDB();

const app = express();
app.use(express.json({ extended: false }));

// Routes
app.use('/api/docs-routes', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/providers', providersApiRouter)
app.use('/api/products', productsApiRouter)

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
