const fs = require('fs')

// // fs.writeFileSync('./texto.txt', 'Buenas noches ', 'utf-8')
// if (fs.existsSync('./texto.txt')) {
//   let texto = fs.readFileSync('./texto.txt', 'utf-8' )
//   console.log(texto)

//   fs.appendFileSync('./texto.txt', '\nBuenos dias!')
//   texto = fs.readFileSync('./texto.txt', 'utf-8')
//   console.log(texto)


// fs.unlinkSync('./texto.txt')
// console.log('Archivo borrado')
// }

// fs.writeFile('./text2.txt', 'Buenas noches', error => {
//   // if(error) throw new Error(error)
//    if(error) console.log('Error', error)

//   console.log(resultado)
//   fs.appendFile('.text', '\nBuenos dias', error => {
//     if(error) console.log('Error al escrbir', error)

//     fs.readFileSync('./text2')
//   })
// })




let date = new Date().toLocaleDateString();


// fs.writeFileSync('./dates.txt', 'La fecha y hora actual es:', 'utf-8')
// fs.appendFileSync('./dates.txt', date.toString())
// let respuesta = fs.readFileSync('./dates.txt', 'utf-8')
// console.log(respuesta)



// Con Callback
// fs.writeFile('./callbackDates.txt', 'La fecha y hora actual es:\n', (error) => {
//   error ? console.log('Ocurrio un problema') : ''

//    fs.readFile('./callbackDates.txt','utf-8',  (error, resultado) => {
//     error ? console.log('Error leyendo') : console.log('Archivo leido con exito y dice: ', resultado)
//   } )
//   fs.appendFile('./callbackDates.txt', date, error => {
//     error ? console.log('Error agregando al arhcivo ') : console.log('Adicion exitosa')
//   })

//   fs.readFile('./callbackDates.txt', 'utf-8', (error, resultado) => {
//     error? console.log('Error leyendo el archivo tras agregar cosas') : console.log(resultado)
//   })
// // })

//  const fsPromises = async (nombreArchivo) => {
//   try {
//     await fs.promises.writeFile(nombreArchivo, 'Buenas noches') 

//     let texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
//     console.log(texto)
//     await fs.promises.appendFile(nombreArchivo, '\nBuenos dias')
//     texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
//     console.log(texto)

//     await fs.promises.unlink(nombreArchivo)
//   } catch (error) {
//     console.log('Ocurrio un error', error)
//   }
// }


// fsPromises('./archivoPromesas.txt')


// const crearInfo = async () => {
//   try {
//     let package = await fs.promises.readFile('package.json', 'utf-8')
//     let { size } = await fs.promises.stat('package.json')


//     const info = {
//       contenidoStr: package,
//       contenidoObj: JSON.parse(package),
//       size
//     }

//     console.log(info)
//     await fs.promises.writeFile('./info.json', JSON.stringyfy(info, null, '\t'))

//   }

//   catch (error) {
//     console.log('Error', error)
//   }
// }


// Ejercicio de prueba para desafio entregable 
//

class UserManager {
  constructor(filename) {
    this.filename = filename
    if (fs.existsSync(filename)) {
      this.users = JSON.parse(fs.readFileSync(filename, 'utf-8'))
    } else {
      this.users = []
    }
  }

  async createuser(nombre,apellido,edad, curso) {
    const user = {
      nombre,
      apellido,
      edad,
      curso,
      fecha: newDate().toString()
    }

    this.users.push(user)
    await fs.promises.writeFile(this.filename, JSON.stringify(this.users, null, '\t'))
  }

  async getUsers() {
    return  JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'))
  }

}


let instancia1 = new UserManager('users.json'); 
instancia1.createuser('German', )


