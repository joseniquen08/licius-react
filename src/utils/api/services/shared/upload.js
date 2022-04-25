import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    console.log(image);

    const response = await fetch(`${URI_SERVER}${ENDPOINTS.UPLOADIMAGE}`, {
      method: 'post',
      body: formData
    });
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.log(error);
  }
}
