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
            <h1 className=" mx-4 text-4xl text-[#000] py-5 font-bold">Wallpaper</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                images.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px] "
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>

                    </div>
                ))
            } </div>

            <h1 className="text-4xl text-[#000] py-5 mx-4 font-bold">Fashion</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                fashionImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px]"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl py-5 font-bold mx-4 text-[#000]">Animal</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                animalImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px]"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl mx-4 py-5 font-bold text-[#000]">Children</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                childrenImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px]"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>
                    </div>
                ))
            } </div>

            <h1 className="text-4xl mx-4 text-[#000] py-5 font-bold">Perfume</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                perfumeImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px]"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>
                    </div>
                ))
            } </div>

            <h1 className=" mx-4 text-4xl text-[#000] py-5 font-bold">Hotel</h1>

            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                hotelImages.map((image) => (
                    <div key={
                            image.id
                        }
                        className="mx-0 ">
                        <img key={
                                image.id
                            }
                            className=" rounded-md object-cover shadow-md w-full h-[300px] mm:h-[200px] 2xl:h-[320px]"
                            src={
                                image.urls.small
                            }
                            alt={
                                image.alt_description
                            }/>
                        <div className='w-full flex justify-end'>
                            <AiOutlineDownload onClick={
                                    () => DownloadButton(image.id)
                                }
                                size={28}
                                className=" text-white cursor-pointer  top-[] bg-transparent mt-[-29px] md:mt-[-29px] ml-[245px] ml:ml-[155px] mm:ml-[132px] md:ml-[206px] lg:ml-[160px] xl:ml-[226px] 2xl:ml-[279px] "/>
                        </div>
                    </div>
                ))
            } </div>
        </div>
    )
}

export default Hero
