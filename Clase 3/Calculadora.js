// ¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
// Definir función suma:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
// En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
// Definir función resta:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
// En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
// En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
// Definir una función multiplicación:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
// Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
// Definir la misma función división utilizada en esta clase.
// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch

const sumar = (num1, num2) => {
  let resultado = num1 + num2;
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject('Operacion innecesaria')
    } else if (resultado <= 0) {
      reject('Fallo en sumar : Esta calculadora solo ofrece resultados positivos')
    } else {
      resolve(resultado)
    }
  })
}
const restar = (num1, num2) => {
  let resultado = (num1 - num2);
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject('Operacion innecesaria')
    } else if (resultado <= 0) {
      reject('Fallo en restar: Esta calculadora solo ofrece resultados positivos')
    } else {
      resolve(resultado)
    }
  })
}

const multiplicar = (num1, num2) => {
  let resultado = num1 * num2;
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject('Operacion innecesaria')
    } else if (resultado <= 0) {
      reject('Fallo en multiplicar: Esta calculadora solo ofrece resultados positivos')
    } else {
      resolve(resultado)
    }
  })
}

const dividir = (num1, num2) => {
  let resultado = num1 / num2;
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('No se puede dividir por cero ')
    } else if (resultado <= 0) {
      reject('Fallo en dividir: Esta calculadora solo ofrece resultados positivos')
    } else {
      resolve(resultado)
    }
  })
}

  const calcular = async(num1, num2)  => {
  try {
    let suma = await sumar(num1, num2)
    console.log(suma)

    let resta =  await restar(num1,num2)
    console.log(resta)

    let multiplicacion = await multiplicar(num1,num2)
    console.log(multiplicacion)

    let division = await dividir(num1,num2)
    console.log(division)
  }

  catch (error) {
    console.log(error)
  }

}


calcular(4,0)
