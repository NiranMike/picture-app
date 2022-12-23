/* eslint-disable react-hooks/exhaustive-deps */
import Home from "./pages/Home";
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate, HashRouter , Route , Routes } from "react-router-dom";
import SearchItem from "./pages/SearchPage/SearchItem";
import { DownloadButton } from "./Unsplash";
import Navbar from "./components/Navbar";

function App() { // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('')
    const [querySearch, setQuerySearch] = useState("")
    const [searchedImage, setSearchedImages] = useState([]);
    const [images, setImages] = useState([]);
    // useState hooks for images displayed on load of page
    const [fashionImages, setfashionImages] = useState([]);
    const [animalImages, setAnimalImages] = useState([]);
    const [childrenImages, setChildrenImages] = useState([]);
    const [perfumeImages, setPerfumeImages] = useState([]);
    const [hotelImages, setHotelImages] = useState([]);

    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home 
                    images={images}
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
                    setHotelImages={setHotelImages}
                    search={search}
                    setSearch = {setSearch}
                    setSearchedImages={setSearchedImages}
                    searchedImage = {searchedImage}
                    querySearch ={querySearch}
                    setQuerySearch = {setQuerySearch}
                />} />
                <Route path={"/searchitem"} element={<SearchItem
                    setSearchedImages={setSearchedImages}
                    searchedImage = {searchedImage}
                    search = {search}
                    setSearch = {setSearch}
                    querySearch = {querySearch}
                    setQuerySearch = {setQuerySearch}
                  />}
                  />
            </Routes>
        </HashRouter>
    );
}

export default App;
