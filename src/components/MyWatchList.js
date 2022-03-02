import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({watchList, onAddToWatchList}) {

    const showCards = watchList.map(show => {
        return <ShowCard key={show.id} show={show} onShowClicked={onAddToWatchList} />
    });

    return(
        <div class="watch-list-container">
            {showCards}
        </div>
    )
}

export default MyWatchList;