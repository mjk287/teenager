const BASE_URL = "http://localhost:3000/api/v1/posts/"

const postAdapter = {
  getPosts: () => fetch(BASE_URL).then(resp => resp.json()),
  // patchBurger: (burgerId, category) => fetch(`http://localhost:3001/burgers/${id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json' // THIS is not necessary
  //   },
  //   body: JSON.stringify({
  //     category: value
  //   })
}

export default postAdapter
