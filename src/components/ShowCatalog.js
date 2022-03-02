import React from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {

    return(
        <>
            <MyWatchList />
            <hr/>
            <ShowList />
        </>
    );
}

export default ShowCatalog;