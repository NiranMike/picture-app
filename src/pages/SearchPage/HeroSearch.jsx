import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import {DownloadButton} from '../../Unsplash'

const HeroSearch = ({querySearch, searchedImage}) => {
    console.log(querySearch)
    return (
        <div className='py-10 px-3'>
            <h1 className="text-4xl mx-4 text-center text-[#000] py-5 font-bold">Here are the results for "{querySearch}"</h1>
            <div className=" justify-center grid gap-5 mm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                searchedImage.map((image) => {

                    return (
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
                    )
                })
            } </div>
        </div>

    )
}

export default HeroSearch
