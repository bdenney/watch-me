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

    function handleRemoveFromWatchList(show) {
        const foundIndex = watchList.findIndex(item => show.id === item.id);
        if (foundIndex === -1) {
            console.log("Show isn't in the watch list...");
        } else {
            const copyArray = [...watchList];
            copyArray.splice(foundIndex, 1);
            
            setWatchList(copyArray);
        }
    }

    function handleShowDelete(show) {
        /*
        fetch("http://localhost:8081/"+show.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        */
       console.log("Deleting id " + show.id + "!");
    }

    return(
        <>
            <MyWatchList watchList={watchList} onRemoveFromWatchList={handleRemoveFromWatchList} onShowDelete={handleShowDelete} />
            <hr/>
            <ShowList shows={shows} onAddToWatchList={handleAddToWatchList} onShowDelete={handleShowDelete} />
        </>
    );
}

export default ShowCatalog;