/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import {useEffect, useState} from "react";
import {searchImages} from "./Unsplash";
import lady from './images/Niran_lady_listening_to_music_in_a_white_background_c4d_acd52939-e00c-4edf-be33-fb9f7e5e697c.png'
import Hero from "./components/Hero";

function App() { // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('')
    const [searchedImage, setSearchedImages] = useState([]);
    const [images, setImages] = useState([]);
    // useState hooks for images displayed on load of page
    const [fashionImages, setfashionImages] = useState([]);
    const [animalImages, setAnimalImages] = useState([]);
    const [childrenImages, setChildrenImages] = useState([]);
    const [perfumeImages, setPerfumeImages] = useState([]);
    const [hotelImages, setHotelImages] = useState([]);

    const ACCESS_KEY = process.env.UNSPLASH_ACCES_KEY
    useEffect(() => {
        searchImages("wallpaper").then((res) => setImages(res.data.results));
        getFashionImages();
        getAnimalImages();
        getChildrenImages();
        getPerfumeImages();
        getHotelImages();

    }, []);
    // functions for images displayed on load of page
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

    const getHotelImages = () => {
        searchImages("interior").then((res) => setHotelImages(res.data.results));
    };
//  search image with queries
    const searchImage = (query) => {
        let typeWord = query.target.value
        setSearch(typeWord)
        console.log(search)
    }
//  submit search queries

    const submitSearch = () =>{
        searchImages(search).then((res) => setSearchedImages(res.data.results));
        setSearch("")
    }


    const DownloadButton = (photoId) => {
        const handleDownload = async () => {
            setIsLoading(true);

            try { // Make a request to the Unsplash API to retrieve the image by its ID
                const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`, {
                    params: {
                        client_id: "agMQ6wah1H9CKRa_1ZNPGH51PX5JSNgQeX79vUeb7w8"
                    }
                });

                // Download the image
                const url = response.data.urls.regular;
                const urlResponse = await axios.get(url, {responseType: "blob"});
                const fileName = `${photoId}.jpg`;
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(new Blob([urlResponse.data]));
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();

                setIsLoading(false);
            } catch (error) { // Handle any errors
                error.message = "Failed your network"
                console.error(error.message);
                setIsLoading(false);
                
            }
        };

        return handleDownload();
    };
    return (
        <div className="">

                <input type="text"
                value={search}
                onChange={searchImage}
                className=" mx-auto placeholder-black focus:outline-none top-[400px] left-[600px] absolute  border-transparent bg-white z-10 rounded-lg border p-2"
                placeholder="Search"/>
                <button onClick={submitSearch} className=" absolute z-10 top-[400px] left-[900px] py-2 px-3 mr-9 border-white border hover:bg-blue-500 font-bold hover:text-white rounded-md">Submit</button>
            
            <div className="bg-[#0000005d] absolute h-[600px] w-full"></div>
            <img className="object-cover w-full h-[600px]"
                src={lady}
                alt=""/> {/* display the images in a grid */}
            <div className="py-4 px-5">
                <Hero images={images}
                    setImages={setImages}
                    fashionImages
                    ={fashionImages}
                    setfashionImages
                    ={setfashionImages}
                    animalImages
                    ={animalImages}
                    setAnimalImages={setAnimalImages}
                    childrenImages={childrenImages}
                    setChildrenImages={setChildrenImages}
                    perfumeImages={perfumeImages}
                    setPerfumeImages={setPerfumeImages}
                    hotelImages
                    ={hotelImages}
                    DownloadButton={DownloadButton}
                    setHotelImages={setHotelImages}/>
            </div>
        </div>
    );
}

export default App;
