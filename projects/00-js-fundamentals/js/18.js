// Comparación y Operador Estricto

const number1 = 20
const number2 = '20'

/*
    ==  ( Comparación pero no es estricto)
    === (Comparación estricta - Revisa valor y tipo de dato)
*/

if (number1 === number2) {
  console.log('Si!, son iguales')
} else {
  console.log('No, no son iguales')
}

const authenticated = true
if (authenticated) {
  console.log('Si esta authenticated')
}
