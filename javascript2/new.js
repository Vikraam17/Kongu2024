const fetchData = new Promise((resolve, reject) => {
  const api = true;
  if (api) {
    resolve("Fetch Data");
  } else {
    reject("Error");
  }
});

fetchData.then((msg) => console.log(msg)).catch((error) => console.log(error));

const fetchApi = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error.message));
});

fetchApi.then((msg) => console.log(msg)).catch((error) => console.log(error));
