import { Link } from 'react-router-dom';
import './App.css';

export default function RelativeNavHeader({ pageTitle, previousLinkPath, previousTitle, nextLinkPath, nextTitle }) {
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
      <h2>{ pageTitle }</h2>
    </header>
  );
}
