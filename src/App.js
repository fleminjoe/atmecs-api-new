import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Tile from './Tile';

function App() {

  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [healthLabels,setHealthLabels] = useState("vegan");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=025d2ac2&app_key=955c707f79dc59c3c2345e7b76a06534&&health=${healthLabels}`;

 

  const getRecipes = async ()=>{
    const result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data)
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Atmecs Food Recipe</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
           type="text" 
           className="app_input"
           placeholder="Enter the Ingredient" 
           value = {query}
           onChange={(e)=> setQuery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      
        <select className="app_healthLabels" >
          <option value="Vegan" onClick={()=>setHealthLabels("vegan")}>Vegan</option>
          <option value="Vegetarian" onClick={()=>setHealthLabels("vegetarian")}>Vegetarian</option>
          <option value="Dairy-Free" onClick={()=>setHealthLabels("dairy-Free")}>Dairy-Free</option>
          <option value="Gluten-Free" onClick={()=>setHealthLabels("gluten-Free")}>Gluten-Free</option>
          <option value="Egg-Free" onClick={()=>setHealthLabels("egg-Free")}>Egg-Free</option>
          <option value="Fish-Free" onClick={()=>setHealthLabels("fish-Free")}>Fish-Free</option>
          <option value="Pork-Free" onClick={()=>setHealthLabels("pork-Free")}>Pork-Free</option>
          <option value="Mollusk-Free" onClick={()=>setHealthLabels("mollusk-Free")}>Mollusk-Free</option>
        </select>
      
      
      </form>

     

      <div className="app_recipe">
        {
          recipes.map((recipe)=>{
            return <Tile recipe={recipe} />
          })
        }
      </div>
    </div>
  );
}

export default App;
