

const fs = require('fs')

class ProductManager {
  constructor(path) {
    this.path = path
    fs.existsSync(this.path) ? this.products = JSON.parse(fs.readFileSync(this.path, 'utf-8')) : this.products = [];
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    let producto = {
      'title': title,
      'description': description,
      'price': price,
      'thumbnail': thumbnail,
      'code': code,
      'stock': stock,
    }
 
    this.products.length === 0 ? producto["id"] = 1 : producto["id"] = this.products[this.products.length -1 ]["id"] + 1
    let encontrado = this.products.some(elemento => elemento.code === code)

    if (encontrado) console.warn('Advertencia agregando producto: Producto repetido! \n')
    else {
      this.products.push(producto)
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, '\t'))
    }

  }

  getProducts = () => {
    console.log('Array de productos actuales: \n')
    return this.products
  }

  getElementById = (id) => {
    let producto = this.products.find(el => el.id === id)
    console.log('Obteniendo producto por ID \n:', producto || 'Producto no encontrado \n')
  }


  updateProduct(id, campo, valorNuevo) {

    let index = this.products.findIndex(element => element.id === id)
    let campoValido = Object.keys(this.products[index]).some(el => el === campo)
    if (campo === 'id') {
      console.error('Error actualizando producto : El id no puede ser modificado\n')
    } else if (!campoValido) {
      console.error('Error actualizando producto: Elija un campo valido\n')
    } else {
      this.products[index][campo] = valorNuevo;
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, '\t'))
    }


  }


  deleteProduct(id) {
  //   let encontrado = this.products.some(el => el.id === id)
  //   if (encontrado) {
  //     this.products = this.products.filter(el => el.id !== id)
  //     fs.writeFileSync(this.path, JSON.stringify(this.products, null, '\t'))
  //     console.log('Producto eliminado exitosamente \n')
  //   } else {
  //     console.error('Producto no encontrado')
  //   }
  // }
    console.log('Antes de borrar\n')
    console.log(this.products)
    let product = this.getElementById(id)
    if (product !== null) {
      console.log(this.products.indexOf(product))
      this.products.splice(this.products.indexOf(product), 1)
      console.log('Despues de borrar\n')
      console.log(this.products)
    }
}
}

// Testing
//
//
// const manager = new ProductManager('./desafio.json')
// manager.addProduct('Producto Prueba', 'Este es un producto prueba', 200, 'sin imagen', '1', 25)
// manager.addProduct('Producto Prueba', 'Este es un producto prueba', 200, 'sin imagen', '2', 25)
// manager.addProduct('Producto Prueba', 'Este es un producto prueba', 200, 'sin imagen', '3', 25)
// manager.addProduct('Producto Prueba', 'Este es un producto prueba', 200, 'sin imagen', '4', 25)
// manager.deleteProduct(2)
//
module.exports = new ProductManager()
