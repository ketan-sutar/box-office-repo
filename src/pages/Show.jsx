import React, { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/Shows/ShowMainData';
import Details from '../components/Shows/Details';
import Season from '../components/Shows/Season';
import Cast from '../components/Shows/Cast';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus:false,
  });

  //   const {showData,showError}= useShowById(showId)

  if (showError) {
    return <div>we have error : {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Deatils</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Season seasons={showData._embedded.seasons} />
          
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
          
        </div>






      </div>
    );
  }

  return <div>Data is loading</div>;

  //   return <div>Show page for show {showId}</div>;
};

export default Show;
