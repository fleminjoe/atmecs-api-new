import React from 'react'
import './Tile.css'

const Tile = ({recipe}) => {
  return (
    <div className="tile" onClick={()=>{
        window.open(recipe["recipe"]['url']);
    }}>
        <img className="tile_img" src={recipe["recipe"]["image"]} />
        <p className="tile_name">{recipe["recipe"]["label"]}</p>
    </div>
  )
}

export default Tile