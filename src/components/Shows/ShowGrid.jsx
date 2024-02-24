import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';
import { useStarredShow } from '../../lib/useStarredShow';
import {FlexGrid} from '../common/FlexGrid'
import NotFoundImgSrc from '/public/notfnd.png'


const ShowGrid = ({ shows }) => {
  const [starredShow,dispatchStarred] =useStarredShow()

  const onStarMeCLick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
          onStarMeCLick={onStarMeCLick}
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
