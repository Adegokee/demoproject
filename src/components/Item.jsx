import React from 'react'
const imgPath = 'https://image.tmdb.org/t/p/w500'
const unavailable = "https://nerdbot.com/wp-content/uploads/2018/12/not_available.png"
const Item = ({x}) => {
  return (
    <div style={{width:'300px', height:'300px', margin:'10px', backgroundColor:'black', textAlign:'center', color:'white', border:'4px solid green', borderRadius:'20px'}}>
     <div style={{margin:'20px'}}>
     <img style={{width:'200px', objectFit:'cover', height:'130px'}} src={x.poster_path ? `${imgPath}${x.poster_path}`: unavailable} alt="" />
      <p>{x.original_title}</p>
     </div>
      <main>
        <span>{x.vote_average}</span>
        <span>{x.release_date}</span>
      </main>
    </div>
  )
}

export default Item
