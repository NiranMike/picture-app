import axios from "axios";
const unsplashApiKey = "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8";
let url = `https://api.unsplash.com/photos/?client_id=${unsplashApiKey}`;
// search for images on Unsplash
export const searchImages = (query) => {
  return axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      client_id: unsplashApiKey,
    },
  });
};

// get a specific image by its ID
export const getImageById = (id) => {
  return axios.get(`https://api.unsplash.com/photos/${id}`, {
    params: {
      client_id: unsplashApiKey,
    },
  });
};
