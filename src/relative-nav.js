import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './relative-nav.css';

export default function RelativeNavHeader({ pageTitle, previousLinkPath, previousTitle, nextLinkPath, nextTitle, titleEmoji, artCardScryfallId }) {
  const [name, setName] = useState('[Cardname]');
  const [artist, setArtist] = useState('[Card Artist]');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/${artCardScryfallId}`)
      .then(res => res.json())
      .then(json => {
        const { name, artist, image_uris } = json;
        setName(name);
        setArtist(artist);
        setImageSrc(image_uris['art_crop']);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <header className="relative-nav-header">
       <ul>
        <li>
          <Link to={ previousLinkPath }>
            <button>{previousTitle}</button>
          </Link>
        </li>
        <li>
          <Link to={ nextLinkPath }>
            <button>{nextTitle}</button>
          </Link>
        </li>
      </ul>
      <figure className="relative-nav-header-card">
        <h2 className="relative-nav-title"><span>{ pageTitle }</span><span>{ titleEmoji }</span></h2>
        <img className="relative-nav-image" src={ imageSrc }/>
        <figcaption className="relative-nav-subheader"><span>{ name } by { artist }</span></figcaption>
      </figure>
    </header>
  );
}

