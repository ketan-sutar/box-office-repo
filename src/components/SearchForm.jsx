import { useState } from 'react';
import styled from 'styled-components';

import { useSearchStr } from '../lib/useSearchStr';
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
        <SearchInput
          type="text"
          placeholder='Search for Something'
          value={searchStr}
          onChange={onSearchInputChange}
        />

        <RadiosWrapper>
          <CustomRadio
            label="Shows"
            type="radio"
            name="search-option"
            value="shows"
            checked={serachOption === 'shows'}
            onChange={onRadioChange}
          />

          <CustomRadio
            label="Actors"
            name="search-option"
            value="actors"
            checked={serachOption === 'actors'}
            onChange={onRadioChange}
          />
        </RadiosWrapper>

        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
