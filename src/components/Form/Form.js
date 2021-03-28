import React from 'react';
import './Form.css';


const Form = ({submitHandler, search, setSearch}) => {
  return (
    <div className="inputForm">
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          id="recipe" 
          placeholder="Search for recipe..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} />
        {/* <label htmlFor="recipe">Search for recipe...</label> */}
        <button type="submit" className="btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
