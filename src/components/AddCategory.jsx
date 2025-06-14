import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onSetCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    const value = target.value;
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    onSetCategories(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gif's"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onSetCategories: PropTypes.func.isRequired,
};
