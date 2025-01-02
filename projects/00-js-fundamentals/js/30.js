// Fetch API  - Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'

const queryApi = async () => {
  const response = await fetch(url)
  const result = await response.json()
  console.log(result)
}
queryApi()
