import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BraveKinDuo from './images/Brave-Kin Duo Art.webp';
import './relative-nav.css';

export default function RelativeNavHeader({ pageTitle, previousLinkPath, previousTitle, nextLinkPath, nextTitle, iconFunction, artCardScryfallId }) {
  const [name, setName] = useState('Brave-Kin Duo');
  const [artist, setArtist] = useState('Devin Platts');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Re-enable for prod to not hammer the Scryfall API for testing
//    fetch(`https://api.scryfall.com/cards/${artCardScryfallId}`)
//      .then(res => res.json())
//      .then(json => {
//        const { name, artist, image_uris } = json;
//        setName(name);
//        setArtist(artist);
//        setImageSrc(image_uris['art_crop']);
//      })
//      .catch(e => console.error(e));

  }, []);

  const icon = iconFunction ? iconFunction() : '';

  return (
    <header className="relative-nav-header">
      <figure className="relative-nav-header-card">
        <h2 className="relative-nav-title"><span>{ pageTitle }</span>{icon}</h2>
        <img className="relative-nav-image" src={ imageSrc }/>
        <figcaption className="relative-nav-subheader"><span>{ name } by { artist }</span></figcaption>
      </figure>
    </header>
  );
}

//       <ul>
//        <li>
//          <Link to={ previousLinkPath }>
//            <button>{previousTitle}</button>
//          </Link>
//        </li>
//        <li>
//          <Link to={ nextLinkPath }>
//            <button>{nextTitle}</button>
//          </Link>
//        </li>
//      </ul>
