import React from 'react';

function ShowCard({show}) {

    function getStreamingLogo(streamOnString) {
        let imgSrc;
        switch (streamOnString) {
            case "Amazon":
                imgSrc = "./images/amazon.png";
                break;
            case "HBO":
                imgSrc = "./images/hbo.webp";
                break;
            case "Hulu":
                imgSrc = "./images/hulu.png";
                break;
            case "Netflix":
                imgSrc = "./images/netflix.jpeg";
                break;
            case "Peacock":
                imgSrc = "./images/peacock.png";
                break;
        }
        return imgSrc;
    }

    return(
        <div className="show-card">
            <div>
                <img src={show.image} alt="cover art"></img>
                <h3>{show.name}</h3>
            </div>
            <p>{show.summary}</p>
            <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on}></img>
        </div>
    );
}

export default ShowCard;