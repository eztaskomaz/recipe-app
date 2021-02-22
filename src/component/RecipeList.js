import './css/recipe.css';
import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

const RecipeList = () => {

    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div>
            <RecipeSearch getSearch={getSearch}
                          search={search}
                          updateSearch={updateSearch}/>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
