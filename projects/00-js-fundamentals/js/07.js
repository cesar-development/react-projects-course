// Unir 2 objetos
const product = {
  name: 'Tablet',
  price: 300,
  available: true
}
const client = {
  name: 'Juan',
  premium: true
}

// const nuevoObjeto = Object.assign(product, client) // No
const newObject = {
  product: { ...product },
  client: { ...client }
}

console.log(newObject)
console.log(client)
console.log(product)
