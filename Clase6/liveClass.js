// // Usando nodemon para levantar un servidor
// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//   respuesta.end('Mi primer servidor en Node js')
// })

// server.listen(8000, () => {
//   console.log('Server listening on port 8000')
// })

// Podemos correr este archivo con Nodemon

// Preparacion de un proyecto, estaremos haciendo lo mismo de arriba pero con express, vemos que es mas conciso  

// import express from 'express'

// const app = express()
// app.get('/', (request, response) => {
//   response.send("Hola Mundo en backend")
// })
// app.listen(3000, () => {
//   console.log("Listening on port 3000")
// })

// Desafio generico 
// import express from 'express'
// // si no  usamos el moduelo usamos el metodo require

// const app = express()

// app.get('/', (request,response)=> {
//   response.send("Pagina principal")
// })

// app.get('/bienvenida', (request,response) => {
//   response.send('<h1 style="color:blue" >Bievenido!!</h1>')
//   // response.sendFile("RUTA DE TU ARCHIVO")
// })

// app.get('/usuario', (request,response) => {
//   const usuario = { 
//     name: "Emi", 
//     age: 25, 
//     email: "test@gmail.com"}
//   response.json(usuario)
//   // response.sendFile("RUTA DE TU ARCHIVO") si queremos poner un archivo html por ejemplo
// })

// // Para manejar rutas no definidas
// app.get('*', (req,res) => {
//   res.send('Error')
// })

// app.listen(3000, () => {
//   console.log("Listening on port 3000")
// })


// Usando Query es recomendable para mejor interpretaciond e datos 
//
// app.use(express.urlencoded({extended:true}))

// Ejemplo de clase
import express from 'express'
import ticketManager from './LiveClass2.js'
const app = express()

const productos = [{ id: 1, nombre: "Parlantes", precio: 200 }, { id: 2, nombre: "Mouse", precio: 100 }]


app.get('/', (req, res) => {
  res.send("Hola Mundo")
})
// Teneoms que cambiar las funciones a las apropiadas por la clase que trajimos en el import
app.get('/usuario/:id', (req, res) => {
  const { id } = req.params
  const users = ticketManager.getEventos()
  const user = users.find(user => user.id === id)
  if (!user) {
    return res.send("Producto no encontrado")
  } 

  res.json(user)
})


// Los numeros vienen en string, por lo que es probable que se necesita ¿parsearlos
app.get('/Productos', (req,res) => {
 const {nombre, precio} = req.query 
  const producto = productos.find(producto => producto.nombre === nombre || producto.precio === precio)

  if(!producto) {
    return res.send("Producto no encontrado")
  }

  res.json(producto)
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
