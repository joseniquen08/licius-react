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

export const createPostWithouthPayment = async (post) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.CREATEPOST}`, {
      method: 'post',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const savePaymentResponse = async (paymentResponse) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.SAVEPAYMENTRESPONSE}`, {
      method: 'post',
      body: JSON.stringify(paymentResponse),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.status;
  } catch (error) {
    console.log(error);
  }
}
