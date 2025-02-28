import React from "react";
import style from './css/recipe.module.css';

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><i>Calories = {Math.round(calories)}</i></p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;