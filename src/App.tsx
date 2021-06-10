import { useState } from "react";
import axios from 'axios';
import './App.css';
import RecipeTile from "./components/RecipeTile"


function App() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [healthLabel, sethealthLabel] = useState("vegan")


    const YOUR_APP_ID = `b17fe5ca`;
    const YOUR_APP_KEY = "93edba4ebf523ccd45fef04ea8916b18";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;

  const getRecipes = async function() {
  const result = await axios.get(url);
  setrecipes(result.data.hits)
  console.log(result.data);
}

const onSubmit = (e:any) => {
  e.preventDefault();
  getRecipes();
};

return (
    <div className="app">  
        <h1 onClick={getRecipes}>Food Recipes</h1>
        <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"  
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}/>
          <input className="app__submit"type="submit" value="Search" />
          </form>
          <div className="app__recipes">
        {recipes.length &&
          recipes.map(recipe =>
            (<RecipeTile recipe={recipe}></RecipeTile>))
        }
      </div>
    </div>
  );
}

export default App;


