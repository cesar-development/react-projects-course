// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'

const queryApi = () => {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      result.forEach(comentario => {
        console.log(comentario)
      })
    })
}
queryApi()
