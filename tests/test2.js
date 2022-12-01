
const mostrarLista = arreglo => {
 if(arreglo.length === 0) {
    console.log('Lista Vacia ')
    return arreglo.length
  }


  for ( let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i])
  }
   return arreglo.length
}


let lista = [1,2,3,4]
mostrarLista(lista)
