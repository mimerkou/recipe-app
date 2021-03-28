import React, { useState } from 'react';
import './Recipe.css';

const Recipe = ({ calories, image, ingredients, label, url }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="recipe">
      <h3>{label}</h3>
      <img src={image} alt={label} />
      <p className="calories">Calories: {Math.round(calories)}</p>
      <a className="url" href={url} target="_blank" rel="noreferrer">URL</a>
      <button className="ing-btn" onClick={() => setShowIngredients(!showIngredients)}>Ingredients</button>
      { showIngredients &&
        <ul className="ingredient-list">
          {ingredients.map((ing, index) => {
            return <li key={index} className="ingredient-text">{ing.text}</li>
          })}
        </ul>
      }
    </div>
  );
};

export default Recipe;
