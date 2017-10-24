const BASE_URL = "https://jsonplaceholder.typicode.com";

function responseToJson(response) {
  if (response.ok) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      throw new Error("Invalid content type");
    }
  } else {
    throw new Error("Invalid response");
  }
}
const ApiUtils = {
  loadPosts: () => {
    return fetch(`${BASE_URL}/posts`).then(responseToJson);
  },
  loadComments: (postId) => {
    return fetch(`${BASE_URL}/posts/${postId}/comments`).then(responseToJson);
  }
};

export default ApiUtils;