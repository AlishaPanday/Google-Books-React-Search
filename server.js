const express = require ('express');

//initialise app varibale with express
const app = express();


app.get('/', (req,res) => res.send('API running'));
//put the port in varibale to listen it
//look for environemnet varibale called PORT to use when deploying in heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server Started on port ${PORT}`));