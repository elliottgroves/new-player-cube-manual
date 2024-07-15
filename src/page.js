import { useState } from 'react';
import CentaurCourser from './images/Centaur Courser.webp';

export default function BookPage() {
  const [pageTurned, setPageTurned] = useState(false);

  function togglePageTurned() {
    setPageTurned(!pageTurned);
  }

  return (
    <div onClick={togglePageTurned} className={"page-fg" + (pageTurned ? ' turned' : '')}>
      <h3>Creature Cards</h3>
      <img className="card" src={CentaurCourser} alt="Centaur Courser" />
    </div>
  );
}
