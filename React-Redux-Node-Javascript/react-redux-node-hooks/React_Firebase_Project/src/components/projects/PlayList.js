import React from 'react'
import PlaylistSummary from './PlaylistSummary'

const Playlist = ({ playlists }) => {
    return (
        <div className="project-list section">
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