const express = require('express')
const mysql = require('mysql')
const conexion = require('express-myconnection')
//Importamos el archivo rutas
const rutas = require('./rutas')

const app = express()
app.set('port', process.env.PORT || 9000)
const opcionesDb = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nodejs'
}

//Middlewares
app.use(conexion(mysql, opcionesDb, 'single'))
app.use(express.json())

// Rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API')
})
//Apis :v
app.use('/api', rutas)

//Server Corriendo
app.listen(app.get('port'), ()=> {
    console.log('Server ejecutado en el puerto', app.get('port'))
})