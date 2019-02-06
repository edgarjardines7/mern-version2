const express = require('express');
const morgan = require('morgan');
const path = require('path');//se encarga de unir directorios y evitar las diferencias con unix y windows 

const {mongoose} = require('./database');
const app = express();

const route =require('./routes/task.routes')

//settings 
app.set('port',process.env.PORT || 3000)
//middlewares
// (dev)voy a ver el mensaje con formato de texto 
app.use(morgan('dev'))
//comprueba si los datos de entrada tienen formato json 
//antes era con body parser
app.use(express.json())
//Routes
app.use('/api/tasks/',route)


//Static files

app.use(express.static(path.join(__dirname,'public')))

//Starting the server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});