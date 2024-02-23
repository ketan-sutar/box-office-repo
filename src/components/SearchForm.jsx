import  { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
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

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={serachOption === 'shows'}
            onChange={onRadioChange}
          ></input>
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={serachOption === 'actors'}
            onChange={onRadioChange}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
