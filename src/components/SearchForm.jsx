import { useState } from 'react';

import {useSearchStr} from '../lib/useSearchStr'
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [serachOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSUbmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      serachOption,
    };
    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSUbmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        
        <CustomRadio 
        label="Shows"
        type="radio"
        name="search-option"
        value="shows"
        checked={serachOption === 'shows'}
        onChange={onRadioChange}/>

        <CustomRadio 
        label="Actors"
        name="search-option"
        value="actors"
        checked={serachOption === 'actors'}
        onChange={onRadioChange}/>


        

        
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
