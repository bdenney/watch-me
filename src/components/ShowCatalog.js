import React, { useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {

    const [shows, setShows] = useState([]);
    const [watchList, setWatchList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(response => response.json())
        .then(showJson => {
            setShows(showJson);
        });
    }, []);

    function handleAddToWatchList(show) {
        const foundIndex = watchList.findIndex(item => show.id === item.id);
        if (foundIndex === -1) {
            setWatchList([...watchList, show]);
        } else {
            console.log("Show already on watch list...");
        }
    }

    return(
        <>
            <MyWatchList watchList={watchList} />
            <ShowList shows={shows} onAddToWatchList={handleAddToWatchList}  />
        </>
    );
}

export default ShowCatalog;