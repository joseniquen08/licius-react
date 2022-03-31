import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const createPreference = async (orderData) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.CREATEPREFERENCE}`, {
      method: 'post',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}