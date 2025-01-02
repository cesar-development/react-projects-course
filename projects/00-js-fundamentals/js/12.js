// Funciones - Function Declaration

// function add(numero = 0, numero2 = 0){
//     console.log( numero + numero2 )
// }

// add(10, 20)
// add(2, 3)
// add(100)
// add()

function add (numero = 0, numero2 = 0) {
  return {
    result: numero + numero2,
    message: 'Hola Mundo'
  }
}

const { result, message } = add(20, 30)

console.log(result)
console.log(message)
