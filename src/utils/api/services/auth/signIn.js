import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const signInUser = async (user) => {
  try {
    return await (await fetch(`${URI_SERVER}${ENDPOINTS.SIGNIN}`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
    // const data = await response.json();
    // console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
}