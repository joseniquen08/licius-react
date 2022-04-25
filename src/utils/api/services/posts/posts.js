import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const getPosts = async () => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETPOSTS}`, {
      method: 'get',
    });
    const { posts } = await response.json();
    console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
}