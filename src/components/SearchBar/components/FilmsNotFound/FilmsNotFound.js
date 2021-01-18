import React from 'react';
import './FilmsNotFound.scss';

export default function FilmsNotFound({ input }) {

    return (
        <li className='films-not-found'>
            <header className='films-not-found-header'>
                <h1>I'm Sorry...</h1>
            </header>
            <main className='films-not-found-main'>
                <p>But I cant see any films witch: <span>{input}</span> phrase.</p>
            </main>
        </li>
    );
}