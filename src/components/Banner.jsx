import React, {useContext} from 'react'
import { Movie } from '../Movie'
const imgPath = 'https://image.tmdb.org/t/p/w500'
const Banner = () => {
    const {selectMovie} =useContext(Movie)
  return (
    <div style={{height:'70vh', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',  background: selectMovie.backdrop_path ?  `url(${imgPath}${selectMovie.backdrop_path})`: ''}}>
      <div>
        <h2>{selectMovie.original_title}</h2>

        <main>{selectMovie.overview}</main>
      </div>
    </div>
  )
}

export default Banner
