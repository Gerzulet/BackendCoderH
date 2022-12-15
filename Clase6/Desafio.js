import express from 'express'

const app = express()

const usuarios = ["German", "Pedro", "Alejandro"]
app.get('/', (req,res) => {
  res.send(usuarios)
})

app.get('/:userId', (req,res) => {
  let encontrado = usuarios.some(el => el === req.params.userId)
  encontrado ? 
  res.send(`Usuario: ${req.params.userId}`)
  :
  res.send("Usuario no encontrando")

})


app.listen(3000, () => {
  console.log("Listening on port 3000")
})
