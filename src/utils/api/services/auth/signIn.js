import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const signInUser = async (user) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.SIGNIN}`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok){
      return data;
    } else {
      if (response.status === 401){
        return { ...data, success: false }
      } else if (response.status === 400) {
        return { ...data, success: false, type: data.type }
      }
    }
  } catch (error) {
    console.log(error);
  }
}