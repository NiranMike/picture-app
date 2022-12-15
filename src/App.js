/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { searchImages, downloadImage } from "./Unsplash";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [fashionImages, setfashionImages] = useState([]);
  const [animalImages, setAnimalImages] = useState([]);
  const [childrenImages, setChildrenImages] = useState([]);
  const [perfumeImages, setPerfumeImages] = useState([]);
  let ACCESS_KEY = "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8";
  let url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

  useEffect(() => {
    searchImages("wallpaper").then((res) => setImages(res.data.results));

    getFashionImages();
    getAnimalImages();
    getChildrenImages();
    getPerfumeImages();
  }, []);

  const getFashionImages = () => {
    searchImages("fashion").then((res) => setfashionImages(res.data.results));
  };

  const getAnimalImages = () => {
    searchImages("animal").then((res) => setAnimalImages(res.data.results));
  };

  const getChildrenImages = () => {
    searchImages("children").then((res) => setChildrenImages(res.data.results));
  };

  const getPerfumeImages = () => {
    searchImages("perfume").then((res) => setPerfumeImages(res.data.results));
  };

  const DownloadButton = (photoId) => {
    const handleDownload = async () => {
      setIsLoading(true);

      try {
        // Make a request to the Unsplash API to retrieve the image by its ID
        const response = await axios.get(
          `https://api.unsplash.com/photos/${photoId}`,
          {
            params: {
              client_id: ACCESS_KEY,
            },
          }
        );

        // Download the image
        const url = response.data.urls.regular;
        const urlResponse = await axios.get(url, {
          responseType: "blob",
        });
        const fileName = `${photoId}.jpg`;
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([urlResponse.data]));
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();

        setIsLoading(false);
      } catch (error) {
        // Handle any errors
        console.error(error);
        setIsLoading(false);
      }
    };

    return handleDownload();
  };
  return (
    <div className=" py-4 px-5">
      <input
        type="text"
        className=" mx-2 rounded-lg border p-2"
        placeholder="Search"
      />
      {/* display the images in a grid */}
      <div className=" grid md:grid-cols-5">
        {images.map((image) => (
          <div key={image.id} className="mx-2">
            <img
              key={image.id}
              className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
              src={image.urls.small}
              alt={image.alt_description}
            />
            <AiOutlineDownload
              onClick={() => DownloadButton(image.id)}
              size={28}
              className=" text-black cursor-pointer absolute top-[] mt-[-38px] md:mt-[-35px] ml-[236px] md:ml-[218px] bg-white "
            />
          </div>
        ))}
      </div>

      <h1 className="text-4xl text-[#e42828] py-5 font-bold">Fashion</h1>

      <div className=" grid md:grid-cols-5">
        {fashionImages.map((image) => (
          <div key={image.id} className="mx-2">
            <img
              key={image.id}
              className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
              src={image.urls.small}
              alt={image.alt_description}
            />
            <AiOutlineDownload
              onClick={() => DownloadButton(image.id)}
              size={28}
              className=" text-black cursor-pointer absolute top-[] mt-[-38px] md:mt-[-35px] ml-[236px] md:ml-[218px] bg-white "
            />
          </div>
        ))}
      </div>

      <h1 className="text-4xl py-5 font-bold text-[#e42828]">Animal</h1>

      <div className=" grid md:grid-cols-5">
        {animalImages.map((image) => (
          <div key={image.id} className="mx-2">
            <img
              key={image.id}
              className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
              src={image.urls.small}
              alt={image.alt_description}
            />
            <AiOutlineDownload
              onClick={() => DownloadButton(image.id)}
              size={28}
              className=" text-black cursor-pointer absolute top-[] mt-[-38px] md:mt-[-35px] ml-[236px] md:ml-[218px] bg-white "
            />
          </div>
        ))}
      </div>

      <h1 className="text-4xl py-5 font-bold text-[#e42828]">Children</h1>

      <div className=" grid md:grid-cols-5">
        {childrenImages.map((image) => (
          <div key={image.id} className="mx-2">
            <img
              key={image.id}
              className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
              src={image.urls.small}
              alt={image.alt_description}
            />
            <AiOutlineDownload
              onClick={() => DownloadButton(image.id)}
              size={28}
              className=" text-black cursor-pointer absolute top-[] mt-[-38px] md:mt-[-35px] ml-[236px] md:ml-[218px] bg-white "
            />
          </div>
        ))}
      </div>

      <h1 className="text-4xl text-[#e42828] py-5 font-bold">Perfume</h1>

      <div className=" grid md:grid-cols-5 ">
        {perfumeImages.map((image) => (
          <div key={image.id} className="mx-2">
            <img
              key={image.id}
              className="  rounded-lg shadow-md object-cover w-[300px] h-[200px] m-2"
              src={image.urls.small}
              alt={image.alt_description}
            />
            <AiOutlineDownload
              onClick={() => DownloadButton(image.id)}
              size={28}
              className=" text-black cursor-pointer absolute top-[] mt-[-38px] md:mt-[-35px] ml-[236px] md:ml-[218px] bg-white "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
