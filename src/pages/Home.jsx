import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, HashRouter, Route, Routes} from "react-router-dom";
import {searchImages} from "../Unsplash";
import lady from '../images/Niran_lady_listening_to_music_in_a_white_background_c4d_acd52939-e00c-4edf-be33-fb9f7e5e697c.png'
import Hero from "../components/Hero";


const Home = ({fashionImages,
    images,
    search,
    DownloadButton,
    animalImages,
    childrenImages,
    perfumeImages,
    hotelImages,
    setImages,
    setfashionImages,
    setAnimalImages,
    setChildrenImages,
    setPerfumeImages,
    setSearch,
    setHotelImages,
    setSearchedImages,
    querySearch,
    setQuerySearch
    }) => {

    const navigate = useNavigate()

    useEffect(() => {
        searchImages("wallpaper").then((res) => setImages(res.data.results));
        getFashionImages();
        getAnimalImages();
        getChildrenImages();
        getPerfumeImages();
        getHotelImages();

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

    const getHotelImages = () => {
        searchImages("interior").then((res) => setHotelImages(res.data.results));
    };

    // search image with queries
    const searchImage = (query) => {
        let typeWord = query.target.value
        setSearch(typeWord)
        setQuerySearch(typeWord)
        console.log(search)
    }
    // submit search queries

    const submitSearch = () => {
        searchImages(search).then((res) => setSearchedImages(res.data.results));
        setSearch("")
        navigate("/searchitem")
    }

    return (
        <div className="">
            <input type="text"
                value={search}
                onChange={searchImage}
                className=" search-bar mx-auto w-[200px] md:w-[] placeholder-[#0000008e] focus:outline-none top-[300px] mm:left-[95px] lg:left-[270px] xl:left-[450px] 2xl:left-[1000px] left-14 md:left-[200px] absolute  border-transparent bg-white z-10 rounded-lg border p-2"
                placeholder="Search"/>
            <button onClick={submitSearch}
                className=" absolute search-btn z-10 top-[380px] md:top-[300px] left-[115px] md:left-[500px] lg:left-[550px] mm:left-[155px] xl:left-[800px] 2xl:left-[1500px] hover:border-none bg-blue-500 border-none md:bg-white py-2 px-3 mr-9 md:border-white border md:hover:bg-blue-500 font-bold md:hover:text-white rounded-md">Submit</button>
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

export default Home
