import React from 'react'
import { Link } from 'react-router-dom'
import { SearchCard, SearchImgWrapper } from '../common/SearchCard'
const ActorCard = ({name,image,gender,birthday,country,deathday}) => {



  return (
    <SearchCard>
        <SearchImgWrapper>
        <img src={image}></img>
        </SearchImgWrapper>


        <h1>{name} {!!gender && `(${gender})`}</h1>

        <p>{country ? `Comes from ${country}`: 'No country known'}</p>

        {!!birthday && <p>Born {birthday}</p>}

        <p>{deathday ? `Died ${deathday}`: 'Alive'}</p>
        
        
        

      
    </SearchCard>
  )
}

export default ActorCard
