const express = require('express')
const rutas = express.Router()


//Mostramos los datos
rutas.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM libros', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Agregamos un dato
rutas.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body) visualizar la petición
        conn.query('INSERT INTO libros set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Libro Agregado')
        })
    })
})

//Actualizamos un dato por ID
rutas.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body) visualizar la petición
        conn.query('UPDATE libros set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Libro Modificado')
        })
    })
})

//Borramos un dato por ID
rutas.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body) visualizar la petición
        conn.query('DELETE FROM libros WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Libro Borrado')
        })
    })
})

//Exportamos rutas
module.exports = rutas