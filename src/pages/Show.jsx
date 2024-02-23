import React, { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';



const Show = () => {
  const { showId } = useParams();
  const {data:showData,error:showError} = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  

  //   const {showData,showError}= useShowById(showId)

  if (showError) {
    return <div>we have error : {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;

  //   return <div>Show page for show {showId}</div>;
};

export default Show;
