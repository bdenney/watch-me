import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, onAddToWatchList}) {
    const showCards = shows.map(show => {
        return <ShowCard key={show.id} show={show} onShowClicked={onAddToWatchList}/>
    })

    return(
        <div className="show-container">
            {showCards}
        </div>
    );
}

export default ShowList;