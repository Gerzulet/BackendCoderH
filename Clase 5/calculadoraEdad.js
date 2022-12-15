const moment = require('moment')

let fecha = moment()
const fechaNacimiento = moment('1996-01-26')

if(fechaNacimiento.isValid()) {
  console.log('Es valido')
  const dias = fecha.diff(fechaNacimiento, 'days')
  console.log('Han transcurrido ', dias, 'dias')
} else {
  console.log('Fecha invalida')
}
