import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import {DownloadButton} from '../../Unsplash'

const HeroSearch = ({querySearch, searchedImage}) => {
    console.log(querySearch)
    return (
        <div className='py-10 px-3'>
            <h1 className="text-4xl mx-4 text-center text-[#000] py-5 font-bold">Here are the results for "{querySearch}"</h1>
            <div className=" justify-center grid mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                searchedImage.map((image) => {
                    
                    return (
                        <div key={
                                image.id
                            }
                            className="mx-2">
                            <img key={
                                    image.id
                                }
                                className=" object-cover shadow-md w-[300px] h-[300px] mm:h-[200px] m-2"
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
                                className=" text-white cursor-pointer absolute top-[] bg-black mt-[-36px] md:mt-[-36px] ml-[260px] ml:ml-[165px] mm:ml-[139px] md:ml-[212px] lg:ml-[164px] xl:ml-[232px] 2xl:ml-[279px] "/>
                        </div>
                    )
                })
            } </div>
        </div>

    )
}

export default HeroSearch
