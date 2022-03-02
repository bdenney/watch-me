import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, onAddToWatchList, onShowDelete}) {
    const showCards = shows.map(show => {
        return <ShowCard key={show.id} show={show} onShowClicked={onAddToWatchList} onShowDelete={onShowDelete}/>
    })

    return(
        <div className="show-container">
            {showCards}
        </div>
    );
}

export default ShowList;