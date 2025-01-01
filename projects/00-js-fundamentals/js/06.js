// Objetos - Destructuring con 2 o más objetos

const product = {
  name: 'Tablet',
  price: 300,
  available: true
}

const cliente = {
  name: 'Juan',
  premium: true
}

const { name, price, available } = product
const { name: clientName, premium } = cliente

console.log(name)
console.log(clientName)
console.log(premium)
console.log(price)
console.log(available)
