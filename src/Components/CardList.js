import React from 'react';
import Card from './Card';

const CardList = ({ corgis }) => {
    return (
        <div>
            {
                corgis.map((user, i) => {
                    return (
                        <Card
                            key={corgis[i].id} 
                            id={corgis[i].id} 
                            name={corgis[i].name} 
                            city={corgis[i].city} 
                            username={corgis[i].username} />
                    );
                })
            }
        </div>
    );
};

export default CardList;