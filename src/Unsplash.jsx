import axios from "axios";

const unsplashApiKey = "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8";

// search for images on Unsplash
export const searchImages = (query) => {
  return axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      client_id: unsplashApiKey,
    },
  });
};



//download image
// export async function downloadImage(photoId)  {
//   const imgUrl = axios.get("https://api.unsplash.com/search/photos")
//   const getImage = await imgUrl.photos
//   getImage.getPhoto(photoId).then((response) => response.blob())
//     .then((blob) => {
//       const a = document.createElement("a");
//       a.href = URL.createObjectURL(blob);
//       a.download = "photo.jpg";
//       a.click();
//       console.log("they just click me now o")
//     });
    
    
// }



// get a specific image by its ID
export const getImageById = (id) => {
  return axios.get(`https://api.unsplash.com/photos/${id}`, {
    params: {
      client_id: unsplashApiKey,
    },
  });
};
