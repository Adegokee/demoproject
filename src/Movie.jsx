import React, {createContext, useState} from 'react';


export const Movie = createContext()
const MovieDemo = ({children}) => {
    const [movie, setMovie]= useState([])
    const [searchMovie, setSearchMovie] = useState('')
    const [selectMovie, setSelectedMovie] = useState('') 

  return (
    <Movie.Provider value={{movie, setMovie, searchMovie, setSearchMovie, selectMovie, setSelectedMovie}}>
      {children}
    </Movie.Provider>
  )
}

export default MovieDemo
