import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // HTTP Request
        axios.get('./ALBUMS.json')
        .then(response => {
            console.log(response.data);
            setAlbums(response.data);
        }) // Success
        .catch(error => {
            console.log(error);
        }) // Error
    }, []); // Dependency array left empty so it only runs once

    // Album Cards
    const AlbumCard = ({ albums }) => {
        const mappedAlbums = albums.map((album, index) => {
            return (
                <div className='albumCard' key={index}>
                    <div className="album-art" style={{ '--album-art': `url(${album.album_art})` }}>
                        <div className='albumContainer'>
                            <div className='albumDetails'>
                                <h1>{album.artist}</h1>
                                <h2>{album.album_name} // {album.release_year}</h2>
                                <h3>Genre: {album.genre}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return <>{mappedAlbums}</>;
    };

    // MASTER RETURN
    return (
        <>
            <div className='header'>
                <h1>Baxter's //<span> Favourite Artists & Albums</span></h1>
            </div>
            <div className='cardHolder'>
                <AlbumCard albums={albums} />
            </div>
        </>
    );
};

export default Albums;
