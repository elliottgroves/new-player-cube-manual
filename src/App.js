import './App.css';
import logo from './placeholder-logo.svg';
import Welcome from './welcome.js';
import Build from './build.js';
import GridSetup from './grid-setup.js';
import DraftSetup from './draft-setup.js';
import FinishBuild from './finish-build.js';
import Tutorial from './tutorial.js';
import Instants from './instants.js';
import CheatSheet from './cheat-sheet.js';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="build" element={<Build />} />
          <Route path="grid-setup" element={<GridSetup />} />
          <Route path="draft-setup" element={<DraftSetup />} />
          <Route path="finish-build" element={<FinishBuild />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="instants" element={<Instants />} />
          <Route path="cheat-sheet" element={<CheatSheet />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div className="main-layout">
      <nav className="main-nav">
        <Link to="/" className="home-logo-link">
          <img src={logo} className="logo" />
          <h1>Welcome Cube</h1>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>This site is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.</p>
        <p>
          This site may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under <a href="https://company.wizards.com/en/legal/fancontentpolicy" target="_blank" rel="noreferrer">Wizards’ Fan Site Policy</a>. For example, Magic: The Gathering® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards’ trademarks or other intellectual property, please visit their website at <a href="https://magic.wizards.com" target="_blank" rel="noreferrer">magic.wizards.com</a>. 
        </p>
        <p>
          This site also uses card images created on <a href="https://mtg.design" target="_blank" rel="noreferrer">MTG.Design</a>.
        </p>
        <p>
          Made with ❤️ by <a href="https://elliottgrov.es" target="_blank">Elliott Groves Design</a>
        </p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="home-nav-buttons">
      <h2>First time?</h2>

      <Link to="/welcome">
        <button className="large-nav-button">
          <h2>Welcome to Magic!</h2>
        </button>
      </Link>

      <h2>Ready to play?</h2>

      <Link to="/build">
        <button className="large-nav-button">
          <span>Build your deck</span>
        </button>
      </Link>
      <Link to="/tutorial">
        <button className="large-nav-button">
          <span>How to play</span>
        </button>
      </Link>
      <Link to="/cheat-sheet">
        <button className="large-nav-button">
          <span>Turn cheat sheet</span>
        </button>
      </Link>
    </section>
  );
}

function About() {
  return (
    <section>
    </section>
  );
}
