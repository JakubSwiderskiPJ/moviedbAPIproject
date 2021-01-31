import React from "react";
import './Gallery.scss';
import { poster, galleryURL } from "../../API/API.envy";
import useGet from "../../hooks/useGet";

export default function Gallery({ filmId }) {
    // GET film pictures
    const gallery = useGet(galleryURL(filmId), [], `backdrops`);

    return (
        <ul className='gallery'>
            {gallery.map(img => (
                <li>
                    {/*Poster*/}
                    <div className='gallery-img' style={{backgroundImage: `url(${poster(img.file_path)})`}}/>
                </li>
            ))}
        </ul>
    );
}