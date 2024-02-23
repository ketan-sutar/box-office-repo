import { useQuery } from '@tanstack/react-query';
import { getShowById, getShowsByIds } from '../api/tvmaze';
import { useStarredShow } from '../lib/useStarredShow';
import ShowGrid from '../components/Shows/ShowGrid';

const Starred = () => {
  const [starredShowIds] = useStarredShow();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: () =>
      getShowsByIds(starredShowIds).then(result => result.map(show => ({show}))),
    refetchOnWindowFocus: false,
  });

  console.log({starredShows})

  if (starredShows?.length===0) {
    return <div>No shows wer starred</div>;
  }
  if (starredShows?.length>0) {
    return <ShowGrid shows={starredShows} />;
  }

  if(starredShowsError){
    return <div>Erro occired: {starredShowsError.message}</div>
  }

  return <div>Shows are loading</div>;
};

export default Starred;
