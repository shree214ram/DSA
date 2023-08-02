import React from 'react'
import './PlaylistSummary.css';

// Rendering individual images
const Image = ({ image, key }) => {
    return (
        <div className={`file-item ${image.selected ? "active" : ""}`} >
            <img style={{ width: "100px", height: "100px" }} alt={`img - ${key}`} src={image} className="file-img" />
        </div>
    );
};

const PlaylistSummary = ({ playlist, id }) => {
    // render each image by calling Image component
    const renderImage = (image, index) => {
        return (
            <Image
                image={image}
                key={`${index}-image`}
            />
        );
    };
    return (
        <div className="card z-depth-0 playlist-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{id}</span>
                <section className="file-list">{playlist.Pictures.map(renderImage)}</section>
                <p>Posted by Sathish Krishnasamy</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default PlaylistSummary
