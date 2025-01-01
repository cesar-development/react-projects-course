// Operaciones en los arreglos
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// technologies.push('GraphQL') // Añade al final del array
// technologies.unshift('GraphQL') // Añade al final del array

// const nuevoArreglo = [...technologies, 'GraphQL']
// const nuevoArreglo = ['GraphQL', ...technologies]

// Eliminar elementos del array
// technologies.pop() // Elimina del final
// technologies.shift() // Elimina del inicio
// technologies.splice(2, 3) // Elimina de una posición en especifica

// const newArray = technologies.filter( function(tech) {
//     return tech === 'React'
// })

// Reemplazar del array
// technologies[0] = 'GraphQL'

const newArray = technologies.map(function (tech) {
  if (tech === 'HTML') {
    return 'GraphQL'
  } else {
    return tech
  }
})

console.table(technologies)
console.table(newArray)
