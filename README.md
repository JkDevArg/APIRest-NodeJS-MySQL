# APIRest-NodeJS-MySQL
NodeJS + CRUD + API-Rest + MySQL


## Instalar Modulos
```npm install```

## Importar Base de Datos
```nodejs.sql```

## Editar con tu editor de código favorito
```server.js```

```javascript
const opcionesDb = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nodejs'
}
```

## Hacer pruebas
```javascript
GET http://localhost:9000/api
```

---------------------------------

```javascript
POST http://localhost:9000/api HTTP/1.1
Content-Type: application/json

{
    "titulo": "Libro 5",
    "autor": "JCreative",
    "edicion": 2022
}
```

---------------------------------

```javascript
PUT http://localhost:9000/api/1 HTTP/1.1
Content-Type: application/json

{
    "edicion": 2021
}
```

---------------------------------

```javascript
DELETE http://localhost:9000/api/5 HTTP/1.1
```
