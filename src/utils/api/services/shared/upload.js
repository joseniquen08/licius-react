import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch(`${URI_SERVER}${ENDPOINTS.UPLOADIMAGE}`, {
      method: 'post',
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const uploadImages = async (images) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}
