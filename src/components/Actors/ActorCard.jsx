import React from 'react'
import { Link } from 'react-router-dom'

const ActorCard = ({name,image,gender,birthday,country,deathday}) => {



  return (
    <div>
        <div>
        <img src={image}></img>
        </div>


        <h1>{name} {!!gender && `(${gender})`}</h1>

        <p>{country ? `Comes from ${country}`: 'No country known'}</p>

        {!!birthday && <p>Born {birthday}</p>}

        <p>{deathday ? `Died ${deathday}`: 'Alive'}</p>
        
        <div>
            <Link to="/">Read more</Link>
            <button type='button'>Star me</button>
        </div>
        

      
    </div>
  )
}

export default ActorCard
