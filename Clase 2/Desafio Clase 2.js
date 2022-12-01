class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    console.log('Agregando productos!:')
    let encontrado = this.products.some(el => el.code === code)
    if (!encontrado) {
      let producto = {
        'title': title,
        'description': description,
        'price': price,
        'thumbnail': thumbnail,
        'code': code,
        'stock': stock,
        'id': this.products.length + 1
      }
      this.products.push(producto)
      console.log('Producto Agregado!')
    } else {
      console.log('Error, producto repetido!')
    }
    console.log('Fin de funcion addProduct!')

  }

  getProducts = () => {
    console.log("Listado de productos: ", this.products)
  }

  getElementById = (id) => {
    let producto = this.products.find(el => el.id === id)
    console.log('Obteniendo producto por ID:', producto || 'Producto no encontrado')
  }
}

let manager = new ProductManager; 
manager.getProducts()
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
manager.getProducts()
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
manager.getElementById(0)
