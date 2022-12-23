import React from 'react'
import HeroSearch from './HeroSearch'

const SearchItem = ({setSearchedImages, search, searchedImage, querySearch}) => {
  return (
    <div className='py-4'>
      <HeroSearch setSearchedImages={setSearchedImages} querySearch = {querySearch} search={search} searchedImage={searchedImage} />
    </div>
  )
}

export default SearchItem