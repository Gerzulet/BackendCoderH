
class ProductManager {
  constructor() {
    this.listadoproductos = []
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    let id = this.listadoproductos.length + 1
    let encontrado = this.listadoproductos.some((elemento) => elemento.code === code)
    let objeto = {
      'title': title,
      'description': description,
      'price': price,
      'thumbnail': thumbnail,
      'code': code,
      'stock': stock,
      'id': id
    }
    if (encontrado === false) {
      this.listadoproductos.push(objeto)
    } else {
      console.log("Error, el objeto ingresado ya se encuentra en el listado")
    }
  }
  getProducts() {
    console.log(this.listadoproductos)
  }
   getProductById (id) {
   let producto = this.listadoproductos.find(elemento => elemento.id === id)
   }

let Manager = new ProductManager
Manager.addProduct('Pera', 'fruta', 100, 'sin imagen', 'a01', 10)
Manager.addProduct('Manzana', 'fruta', 100, 'sin imagen', 'a02', 10)


