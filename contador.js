class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contador = 0;
  }

  static contadorGlobal = 0;

  getResponsable(){
    return `El responsable del contador es ${this.nombre}`
  }

  contar = () => {
    this.contador +=1; 
    Contador.contadorGlobal += 1; 
  }
  getCuentaIndividual() {
    return `Cuenta Individual de ${this.nombre} : ${this.contador}`
  }

  getCuentaGlobal() {
    return `Cuenta lobal ${Contador.contadorGlobal}`
  }
}

let instancia = new Contador('German'); 
let instancia2 = new Contador('Agustin'); 
instancia.contar()
instancia.contar()


let contador = instancia.getCuentaIndividual()
let nombre = instancia.getResponsable()
let global = instancia.getCuentaGlobal()

console.log(contador)
console.log(nombre)
console.log(`Cuenta Global ${global}`)
