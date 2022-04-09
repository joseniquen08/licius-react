import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const getPosts = async () => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETPOSTS}`, {
      method: 'get',
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}