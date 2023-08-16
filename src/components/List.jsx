import React, { useContext, useEffect } from 'react'
import { Movie } from '../Movie'
import Item from './Item'

const List = () => {
    const {movie, setMovie, searchMovie, setSearchMovie, setSelectedMovie} = useContext(Movie)
const url = "https://api.themoviedb.org/3/"

const apiKey = '/movie?api_key=bf5595cb127233997340c64248b9a09a&query='
useEffect(() => {
const myFilm= async () => {
    const type = searchMovie ? 'search' : 'discover';
    const response = await fetch(`${url}${type}${apiKey}${searchMovie}`)
    const data = await response.json();
    console.log(data.results);
    setMovie(data.results)
    setSelectedMovie(data.results[0])
 

}
myFilm()


}, [setMovie, movie, searchMovie ])

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
        {movie.map((x) => (
            <Item key={x.id} x={x} />
        ))}
      
    </div>
  )
}


export default List
