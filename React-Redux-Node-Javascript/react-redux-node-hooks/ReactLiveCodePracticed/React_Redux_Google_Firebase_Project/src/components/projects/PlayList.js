import React from 'react'
import PlaylistSummary from './PlaylistSummary'

const Playlist = ({ playlists }) => {
    return (
        <div className="project-list section">
            <div className="card z-depth-0 display-summary">
                <div className="card-content grey-text text-darken-3">
                    Playlist
                </div>
            </div>
            {playlists && playlists.map(playlist => {
                return playlist?.data?.Pictures ?
                    (
                        <PlaylistSummary playlist={playlist.data} key={playlist.id} id={playlist.id} />
                    ) : null
            })}
        </div>
    )
}

export default Playlist