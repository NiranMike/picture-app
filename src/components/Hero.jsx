import React from 'react'
import {AiOutlineDownload} from "react-icons/ai";

const Hero = ({
    fashionImages,
    images,
    DownloadButton,
    animalImages,
    childrenImages,
    perfumeImages,
    hotelImages
}) => {
    return (
        <div>
            <div className=" grid md:grid-cols-5">
                {
                images.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className=" object-cover shadow-md w-[300px] h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl text-[#e42828] py-5 mx-4 font-bold">Fashion</h1>

            <div className=" grid md:grid-cols-5">
                {
                fashionImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className="  shadow-md w-[300px] object-cover h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl py-5 font-bold mx-4 text-[#e42828]">Animal</h1>

            <div className=" grid md:grid-cols-5">
                {
                animalImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className="  shadow-md w-[300px] object-cover h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl mx-4 py-5 font-bold text-[#e42828]">Children</h1>

            <div className=" grid md:grid-cols-5">
                {
                childrenImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className="  shadow-md w-[300px] object-cover h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl mx-4 text-[#e42828] py-5 font-bold">Perfume</h1>

            <div className=" grid md:grid-cols-5 ">
                {
                perfumeImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className="   shadow-md object-cover w-[300px] h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>

            <h1 className=" mx-4 text-4xl text-[#e42828] py-5 font-bold">Hotel</h1>

            <div className=" grid md:grid-cols-5 ">
                {
                hotelImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-2">
                        <img key={
                                image.id
                            }
                            className="   shadow-md object-cover object-center w-[300px] h-[300px] m-2"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <AiOutlineDownload onClick={
                                () => DownloadButton(image.id)
                            }
                            size={28}
                            className=" text-white cursor-pointer absolute top-[] bg-black mt-[-38px] md:mt-[-36px] ml-[236px] md:ml-[226px]  "/>
                    </div>
                ))
            } </div>
        </div>
    )
}

export default Hero
