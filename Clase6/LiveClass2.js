

// diapositiva: - Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola. - Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values) 
// const objetos = [ { manzanas:3, peras:2, carne:1, jugos:5, dulces:2 }, { manzanas:1, sandias:1, huevos:6, jugos:1, panes:4 } ]  
// const propiedades = objetos.map((el) => Object.keys(el))
// console.log(objetos
// .map((el) => Object.values(el))
// .flat()
// .reduce((el,acumulador) => el+acumulador, 0)
// )


class TicketManager {
  #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha) {
    precio += precio * this.#precioBaseDeGanancia;
    fecha = new Date().toLocaleDateString();
    let id = this.eventos.length === 0 ? 1 : this.eventos.length - 1;
    let participantes = [];

    let evento = {
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes,
      id
    }
    this.eventos.push(evento)
  }
// Falta hacer validacion
  agregarUsuario(idEvento, idUsuario) {
    let evento = this.eventos.find(ev => ev.id === idEvento)
    if (evento) {
      console.log('Evento Existe')
      evento.participantes.push(idUsuario)
    } else {
      console.log('El evento no existe')
    }
  }
   ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    let evento = this.eventos.filter(ev => ev.id === idEvento)
    let nuevoId = this.eventos[this.eventos.length -1]['id'] + 1
    let nuevoEvento = {
      id: nuevoId, 
      localidad: nuevaLocalidad, 
      fecha: nuevaFecha, 
      participantes : []
    }

    this.eventos.push({ ...evento[0], ...nuevoEvento})
    console.log('El evento se puso en gira')

  }

}


// const ticket = new TicketManager()
// ticket.agregarEvento('Avengers', 'Cnemark', 500, 30)
// ticket.agregarEvento('Marvel vs Capcom', 'Cnemark', 200, 30)

// ticket.agregarUsuario(1, 1)
// ticket.agregarUsuario(1, 3)


// ticket.ponerEventoEnGira(2,'Village Cines', new Date().toLocaleDateString())
// ticket.getEventos()


export default new TicketManager()
