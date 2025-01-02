// Fetch API  - Async Await (Multiples llamados)

const url1 = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const queryApi = async () => {
  const start = performance.now()

  const response = await fetch(url1)
  const result = await response.json()
  console.log(result)

  console.log('Iniciando 2da consulta')

  const response2 = await fetch(url2)
  const result2 = await response2.json()
  console.log(result2)

  const end = performance.now()

  console.log(`Ejecución PRIMER Async: ${end - start} ms`)
}

queryApi()

const queryApi2 = async () => {
  const start = performance.now()

  const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)])
  const result1 = await response1.json()
  const result2 = await response2.json()

  console.log(result1)
  console.log(result2)

  const end = performance.now()

  console.log(`Ejecución SEGUNDO Async: ${end - start} ms`)
}

queryApi2()
