import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const signUpClient = async (client) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.CREATECLIENT}`, {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const signUpRestaurant = async (restaurant) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.CREATERESTAURANT}`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
