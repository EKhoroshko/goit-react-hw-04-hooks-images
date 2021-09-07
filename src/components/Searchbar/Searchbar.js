import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
