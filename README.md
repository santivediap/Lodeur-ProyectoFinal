# L'odeur
**You can visit the deployed version of this app [here](https://lodeur.onrender.com).**

**You can also check the API documentation of the app [here!](https://lodeur.onrender.com/api/docs-routes).**

<img src="https://github.com/santivediap/Lodeur-ProyectoFinal/blob/develop/client/public/assets/lodeur_logo.png?raw=true">

## Navigation 🗺️
### Home Preview 🏠

Here you can **search products** in many ways!
```
- By product title
- By provider name
- By both
```

You can also **sort them by title, price or relevance**, including ascending or descending order 😄

Each product has a **link you can click** that leads you to the next view: **Product details**

<img src="https://github.com/santivediap/Lodeur-ProyectoFinal/blob/develop/client/public/assets/Captura%20de%20pantalla%202023-07-17%20234254.png?raw=true">

### Product details 🛒

In this view you can see the information such as:
```
- Product title
- Price
- Relevance
- Description
```

Also **everything about the product's provider** appear here!

<img src="https://github.com/santivediap/Lodeur-ProyectoFinal/blob/develop/client/public/assets/Captura%20de%20pantalla%202023-07-17%20234335.png?raw=true">

## Dependencies 📌
**Client dependencies**
```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "lodeur": "file:..",
    "normalize.css": "^8.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-loader-spinner": "^5.3.4",
    "react-router-dom": "^6.14.1",
    "react-scripts": "5.0.1",
    "sass": "^1.63.6",
    "web-vitals": "^2.1.4"
  }
```

**Server dependencies**
```json
"dependencies": {
        "config": "^3.3.7",
        "express": "^4.18.1",
        "mongodb": "^5.7.0",
        "mongoose": "^6.11.3",
        "node-statsd": "^0.1.1",
        "response-time": "^2.3.2",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.0"
    },
"devDependencies": {
    "concurrently": "^7.3.0",
    "dotenv": "^16.3.1",
    "jsdoc": "^4.0.2",
    "nodemon": "^2.0.19"
}
```

## Database schemas 💻
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png">

The app's database was made with MongoDB

There are two active schemas in the database:

**Providers**
```json
{
  "_id": "ObjectId"
  "name": "String",
  "CIF": "String",
  "address": "String"
}
```

**Products**
```json
{
  "_id": "ObjectId"
  "title": "String",
  "description": "String",
  "price": "Number",
  "relevance": "Number",
  "image": "String",
  "provider": "ObjectId"
}
```

## Running the app 🏃
### .ENV EXAMPLE ❗
```
MY_MONGO_URI= -> Required
PORT= -> Optional
NODE_ENV= production -> Only on deployment
```

### SEEDER (Initialize data) 💻
```
npm run seed_db
```

### RUN SCRIPTS 🔖
```
npm run dev
```