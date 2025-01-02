// Ternarios
const authenticated = true

authenticated
  ? console.log('usuario authenticated')
  : console.log('No authenticated, dirigir hacia login')

// Doble ternario
const money = 600
const pay = 800
const card = false

money > pay
  ? console.log('Puedes pagar con saldo')
  : card
    ? console.log('Puedes pagar con tarjeta')
    : console.log('No no puedes pagar')
