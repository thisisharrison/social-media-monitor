function fetchPosts(query = "client=happy") {
  return window
    .fetch(`http://localhost:5000/api/posts/?${query}`, {
      method: "GET",
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export default fetchPosts;
