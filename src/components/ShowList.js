import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows}) {
    const showCards = shows.map(show => {
        return <ShowCard key={show.id} show={show}/>
    })

    return(
        <>
        {showCards}
        </>
    );
}

export default ShowList;