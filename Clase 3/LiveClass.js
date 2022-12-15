// const restar = (num1,num2) => num1-num2
// const multiplicar = (num1,num2) => num1*num2


// const calculadora = (num1,num2,callback) => {
//   let resultado = callback(num1,num2)
//   return resultado
// }

// console.log(calculadora(2,5,sumar))


// Calculadora 


const dividir = (num1, num2) => {
  return new promise((resolve, reject) => {
    if (num1 <= 0 || num2 <= 0) {
      reject('Operaicones innecesaria')
    } else {
      resolve(num1 / num2)
    }
  })
}

const sumar = (num1, num2) => {
  return new promise((resolve, reject) => {
    if (num1 <= 0 || num2 <= 0) {
      reject('Operacion invalida')
    } else {
      resolve(num1 + num2)
    }
  })
}



const multiplicar = (num1, num2) => {
  return new promise((resolve, reject) => {
    if (num1 <= 0 || num2 <= 0) {
      reject('Operacion invalida')
    } else {
      resolve(num1 * num2)
    }
  })
}

const restar = (num1, num2) => {
  return new promise((resolve, reject) => {
    if (num1 <= 0 || num2 <= 0) {
      reject('Operacion invalida')
    } else {
      let resultado = (num1 - num2)
      if (resultado < 0) {
        reject('La calculadora no devuelve valores negativos')
      } else {
        resolve(resultado)
      }
    }
  })
}


const calculadora = async (num1, num2) => {
  try {
    let suma = await sumar(num1, num2)
    console.log(suma)
    let resta = await restar(num1, num2)
    console.log(resta)
    let multiplicar = await multiplicar(num1, num2)
    console.log(multiplicar)
    let division = await dividir (num1, num2)
    console.log(division)



  } catch (error) {
    console.log(error.message)
  }
}
