/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { searchImages } from "./Unsplash";
function App() {
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
          <>
            <div className="mx-2">
              <img
                key={image.id}
                className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          </>
        ))}
      </div>

      <h1 className="text-4xl text-[#e42828] py-5 font-bold">Fashion</h1>

      <div className=" grid md:grid-cols-5">
        {fashionImages.map((image) => (
          <>
            <div className="mx-2">
              <img
                key={image.id}
                className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          </>
        ))}
      </div>

      <h1 className="text-4xl py-5 font-bold text-[#e42828]">Animal</h1>

      <div className=" grid md:grid-cols-5">
        {animalImages.map((image) => (
          <>
            <div className="mx-2">
              <img
                key={image.id}
                className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          </>
        ))}
      </div>

      <h1 className="text-4xl py-5 font-bold text-[#e42828]">Children</h1>

      <div className=" grid md:grid-cols-5">
        {childrenImages.map((image) => (
          <>
            <div className="mx-2">
              <img
                key={image.id}
                className=" rounded-lg shadow-md w-[300px] h-[200px] m-2"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          </>
        ))}
      </div>

      <h1 className="text-4xl text-[#e42828] py-5 font-bold">Perfume</h1>

      <div className=" grid md:grid-cols-5 ">
        {perfumeImages.map((image) => (
          <>
            <div className="mx-2">
              <img
                key={image.id}
                className="  rounded-lg shadow-md object-cover w-[300px] h-[200px] m-2"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
