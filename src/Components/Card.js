import React from 'react';

const Card = ({ name, id, city, username }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                src={`https://robohash.org/${id}robot?200x200`} 
                alt='robotPic' />
            <div>
                <h2>{name}</h2>
                <p className='i'>{city}</p>
                <p>Owner: {username}</p>
            </div>
        </div>
    )
};

export default Card;