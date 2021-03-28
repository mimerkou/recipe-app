import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Recipe from './components/Recipe/Recipe';
import Alert from './components/Alert/Alert';
import './App.css';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [searchFromSubmit, setSearchFromSubmit] = useState('');
  const [alert, setAlert] = useState('');

  const APP_ID = '546cfe89';
  const APP_KEY = 'e6226ee873dda891aefd4c062398506a';
  // const url = `https://api.edamam.com/search?q=${searchFromSubmit}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    axios
      .get(`https://api.edamam.com/search?q=${searchFromSubmit}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => {
        console.log(response);
        setRecipes(response.data.hits);
        setSearch('');
      })
      .catch(error => console.log(error));
  }, [searchFromSubmit]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (search !== '') {
      setSearchFromSubmit(search);
    } else {
      setAlert('Please enter a search value');
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>

      {alert !== '' && <Alert alert={alert} setAlert={setAlert} />}
      <Form submitHandler={submitHandler} search={search} setSearch={setSearch} />

      <section className="recipe-container">
      {
        recipes.map((recipe, index) => {
          return <Recipe key={index} {...recipe.recipe} />
        })
      }
      </section>
      
    </div>
  );
};

export default App;
