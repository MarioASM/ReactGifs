import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    //tomar los datos de imput 
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //actualizando lista
       if(inputValue.trim().length > 2){
          setCategories( cats => [ inputValue, ...cats] );
          setInputValue('');
       }

    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Buscar GIF</h2>  
          <input 
            type="text"
            value={ inputValue } 
            onChange={ handleInputChange }
          />
        </form>
    )
}

//lo mandas o truena
CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
}