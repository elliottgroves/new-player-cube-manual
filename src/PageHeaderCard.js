import { useState, useEffect } from 'react';
import './page-header-card.css';

export default function PageHeaderCard({ pageTitle, iconFunction, artCardScryfallId }) {
  const [name, setName] = useState('Brave-Kin Duo');
  const [artist, setArtist] = useState('Devin Platts');
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
  }, [artCardScryfallId]);

  const icon = iconFunction ? iconFunction() : '';

  return (
    <header className="page-header">
      <figure className="page-header-card">
        <h2 className="page-header-card-title"><span>{pageTitle}</span>{icon}</h2>
        <img className="page-header-card-image" alt={name} src={imageSrc}/>
        <figcaption className="page-header-card-subtitle"><span>{name} by {artist}</span></figcaption>
      </figure>
    </header>
  );
}
