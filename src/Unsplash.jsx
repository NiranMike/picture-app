import axios from "axios";
const unsplashApiKey = "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8";
let url = `https://api.unsplash.com/photos/?client_id=${unsplashApiKey}`;
// search for images on Unsplash
export const searchImages = (query) => {
  return axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      client_id: unsplashApiKey,
      per_page: 25,
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


export const DownloadButton = (photoId) => {
  const handleDownload = async () => {
      try { // Make a request to the Unsplash API to retrieve the image by its ID
          const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`, {
              params: {
                  client_id: "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8"
              }
          });

          // Download the image
          const url = response.data.urls.regular;
          const name = response.data.tags[0].title
          const urlResponse = await axios.get(url, {responseType: "blob"});
          const fileName = `${name}.jpg`;
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(new Blob([urlResponse.data]));
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
      } catch (error) { // Handle any errors
          error.message = "Failed your network"
          console.error(error);
      }
  }

  return handleDownload();

}