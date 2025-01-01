// Objetos - Manipulación
const product = {
  name: 'Tablet',
  price: 300,
  available: true
}

// Object.freeze(product) - Freeze - No deja modificarlo, no permite añadir ni eliminar
// Object.seal(product) - Modificar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
product.name = 'Monitor Curvo'

// Si no existe, lo va a añadir
product.imagen = 'imagen.jpg'

delete product.available

console.table(product)
