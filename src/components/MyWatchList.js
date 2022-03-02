import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({watchList, onRemoveFromWatchList}) {

    const showCards = watchList.map(show => {
        return <ShowCard key={show.id} show={show} onShowClicked={onRemoveFromWatchList} />
    });

    return(
        <div class="watch-list-container">
            {showCards}
        </div>
    )
}

export default MyWatchList;