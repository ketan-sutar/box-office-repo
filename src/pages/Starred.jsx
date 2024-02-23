import { useQuery } from '@tanstack/react-query';
import { getShowById, getShowsByIds } from '../api/tvmaze';
import { useStarredShow } from '../lib/useStarredShow';
import ShowGrid from '../components/Shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No shows wer starred</TextCenter>;
  }
  if (starredShows?.length>0) {
    return <ShowGrid shows={starredShows} />;
  }

  if(starredShowsError){
    return <TextCenter>Erro occired: {starredShowsError.message}</TextCenter>
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
