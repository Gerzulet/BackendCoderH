// NODE.js 


// for (let i = 0; i < 10000; i++) {
//   let contador = 0;
//   let number = Math.random()
// }
//
// //
// const objeto = {}

// for (let i = 0; i<10000; i++) {
//   const numeroAleatorio = Math.floor(Math.random() * 20) + 1; 
//   if(objeto[numeroAleatorio]) {
//     objeto[numeroAleatorio]++;
//   } else {
//     objeto[numeroAleatorio] =1
//   }
// }

// console.log(objeto)

const fs = require('fs')
const crypto = require('crypto')

class UserManager {
  constructor() {
    try {
      this.users = fs.readFileSync("Usuarios.json", 'utf-8')
      this.users = JSON.parse(this.users)
    } catch (error) {
      this.users = []
    }
  }


  // Crypto es un modulo que nos permite hashear strings 
  async createUser(name, lastname, username, password) {
    let hashPassword = crypto.createHash('sha256')
      .update(password)
      .digest('hex')

    let user = {
      name,
      lastname,
      username,
      password: hashPassword
    }

    this.users.push(user)
    try {
      fs.promises.writeFile("Usuarios.json", JSON.stringify(this.users, null, '\t'))
      console.log('User Created')
    } catch (error) {
      console.log('Error:', error)
    }


  }

  validateUser(username, pass) {
    let hashPassword = crypto.createHash('sha256')
      .update(pass)
      .digest('hex')

    const user = this.users.find(user => user.username === username)
    if (user) {
      if (user.password === hashPassword) {
        console.log(`User ${username} logged`)
      } else {
        console.log('Wrong password')
      }
    } else {
      console.log('User not found')
    }
  }

}

const user = new UserManager;
user.createUser('german', 'soto', 'germancho', 'gato')
user.validateUser('germancho', 'gato')
