import { useState } from 'react';
import './book.css';

export default function Book() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className="book">
      <div onClick={toggleOpen} className={"book-cover" + (open ? ' open' : '')}>
        <h2 className="title">Card Types</h2>
        <span className="tap-text">(tap to open)</span>
      </div>
      <div className="page-bg">
        <h3>Creature Cards</h3>
        <img className="card" src="https://api.scryfall.com/cards/named?exact=Grizzly+Bears&amp;format=image&amp;version=normal" />
      </div>
    </div>
  );
}
