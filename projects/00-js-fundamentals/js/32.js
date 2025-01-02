// Template Strings

const product = 'Tablet de 12 pulgadas'
const price = 400
const brand = 'Orange'

function textFunction () {
  return 'Este texto proviene de la función'
}

console.log(product + ' $' + price + ' Dolares, Marca: ' + brand)

console.log(`${product} $${price} Dolares, Marca: ${brand}, ${textFunction()}`)
