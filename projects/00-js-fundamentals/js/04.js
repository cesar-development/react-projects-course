// Objetos

const product = {
  name: 'Tablet',
  price: 300,
  available: true
}

console.log(product)
console.table(product)

console.log(product.name)
console.log(product.price)
console.log(product.available)

// Destructuring
const { name, price, available } = product
console.log(name)
console.log(price)
console.log(available)

// Object Literal Enhacement
// const autenticado2 = true
// const usuario2 = 'Juan'

const newObject = {
  // autenticado,
  // usuario
}

console.table(newObject)
