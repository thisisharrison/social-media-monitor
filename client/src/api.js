function fetchPosts(query) {
  return window
    .fetch(`/api/posts/?${query}`, {
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

function fetchWorkspace() {
  return window
    .fetch("/api/workspace", {
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
export { fetchPosts, fetchWorkspace };
