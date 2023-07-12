// *SERVER
const express = require('express');
const path = require('path');

const app = express();
//*MIDDLEWARE
//  replaced body parser
app.use(express.json({ extended: false }));

//*TEST ROUTE
app.use('/test',(req,res)=>{
    res.send('Welcome to GeeksforGeeks');
})

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
