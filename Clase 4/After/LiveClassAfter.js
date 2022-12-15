// Tendremos un archivo llamado fileSystem que nos permite guardar objetos y archivos. 

const fs = require('fs')
// si queremos exportar esta clase
module.exports = class FileSystem {
  constructor(filename) {
    this.filename = filename
    try {
      this.elements = fs.readFileSync(this.filename, 'utf-8')
      this.elements = JSON.parse(this.elements)
    } catch (error) {
      this.elements = []
    }

  }
  getElements() {
    return this.elements
  }

  getElementsById(id) {
    try {
      return this.elements.filter(el => el.id === id)
    } catch (error) {
      return "No existen elementos con ese ID";
    }
  }

  // es recomendable ser generico, para poder reutilizar las funciones, si queres validar, podriamos crear un archivo js separado para hacer eso
  // lo mismo para donde se recibe la informacion, de esta manera podemos usar genericamente esta clase
  async save(elemento) {
    if (this.elements.length === 0) {
      elemento.id = 1;
    } else {
      elemento.id = this.elements[this.elements.length - 1].id + 1;
    }
    this.elements.push(elemento)

    try {
      await fs.promises.writeFile(this.filename, JSON.stringify(this.elements, null, '\t'))
      console.log('Elemento guardado')
    } catch (error) {
      console.log('Error al guardar elemento', error)
    }
  }

  // enemos el metodo truncate que elimina el interior de un archivo
  delete() {
    // fs.unlinkSync(this.filename)
   fs.truncateSync(this.filename,0,() => console.log('Contenido eliminado'))
    }

  async deleteById(id) {
    try {
      const elemento = this.elements.findIndex(el => el.id === id)
      if (elemento !== -1) {
        this.elements.splice(elemento, 1)
        await fs.promises.writeFile(this.filane, JSON.stringify(this.filename, null, '\t'))
      } else {
        console.log('Elemento no encontrado')
      }
    }  catch {
      console.log('Error deleteById0', error)
    }
  }

  async update(id, element) {
    try {
      const oldElement = this.elements.find(el => el.id === id)
      const index = this.elements.findIndex(el => el.id === id )

      if(index !== -1){
        const newElement = {...oldElement, ...element}
        this.elements[index] = newElement
        // Podemos aprender a optimizar esto, modularizando la linea de abajo en otro archivo, para no tener que repetir todo
        await fs.promises.writeFile(this.filename, JSON.stringify(this.filename, null, '\t'))
      }
    } catch(error) {
      console.log('Error al actualizar archivo', error)

    }
  }

}

const file = new FileSystem('./movies.json')
// El objeto no lleva un plantilla ni un objeto prediseñado, simplemente acepta como argumento los campos y sus valores
// para exportar funciones, ir a archivo nativo, usar module.exports = tufuncion
// const save= require('path')
