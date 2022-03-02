import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({watchList, onRemoveFromWatchList, onShowDelete}) {

    const showCards = watchList.map(show => {
        return <ShowCard key={show.id} show={show} onShowClicked={onRemoveFromWatchList} onShowDelete={onShowDelete}/>
    });

    return(
        <div className="watch-list-container">
            {showCards}
        </div>
    )
}

export default MyWatchList;