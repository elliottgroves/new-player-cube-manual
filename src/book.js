import { useState } from 'react';
import './book.css';
import BookPage from './page.js';

export default function Book() {
  const [open, setOpen] = useState(false);
  const [pageTurned, setPageTurned] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  function togglePageTurned() {
    setPageTurned(!pageTurned);
  }

  return (
    <div className="book">
      <div onClick={toggleOpen} className={"book-cover" + (open ? ' open' : '')}>
        <h2 className="title">Card Types</h2>
        <span className="tap-text">(tap to open)</span>
      </div>
      <BookPage />
      <div className="page-bg">
        <h3>Land Cards</h3>
      </div>
    </div>
  );
}
