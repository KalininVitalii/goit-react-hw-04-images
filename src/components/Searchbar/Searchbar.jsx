import { useState } from "react";
import { PropTypes } from 'prop-types';
import style from './Searchbar.module.css'

export const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const onInputChange = event => {
    const { value } = event.target;
    setInput(value);
  };  

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(input);
  };
    return (
      <>
        <header className={style.searchbar}>
          <form className={style.searchForm} onSubmit={onFormSubmit}>
            <button type="submit" className={style.searchFormButton}>             
              <span className={style.searchFormButtonLabel}></span>
            </button>

            <input
              className={style.searchFormInput}
              onChange={onInputChange}
              name="input"
              value={input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images"
            />
          </form>
        </header>
      </>
    );
  }


Searchbar.propTypes={
  onSubmit:PropTypes.func.isRequired,
}