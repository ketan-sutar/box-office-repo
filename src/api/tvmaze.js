const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async querryStrings => {
  const response = await fetch(`${BASE_URL}${querryStrings}`);
  const body = await response.json();
  return body;
};

export const searchForShows = querry => apiGet(`/search/shows?q=${querry}`);
export const searchForPeople = querry => apiGet(`/search/people?q=${querry}`);

export const getShowById = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
