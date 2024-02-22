// import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorsGrid from '../components/Actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  // https://api.tvmaze.com/search/shows?q=boys
  const onSearch = async ({ q, serachOption }) => {
    try {
      setApiDataError(null);
      let result;
      if (serachOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }


    if (apiData?.length===0){
      return <div>No result</div>
    }

    if (apiData) {
      return apiData[0].show ? <ShowGrid shows={apiData} /> : <ActorsGrid actors={apiData} />;
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
