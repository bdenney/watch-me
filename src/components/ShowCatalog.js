import React, { useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(response => response.json())
        .then(showJson => {
            setShows(showJson);
        });
    }, []);

    return(
        <>
            <MyWatchList />
            <ShowList shows={shows} />
        </>
    );
}

export default ShowCatalog;