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
import { Routes, Route, Outlet, Link, useOutlet, useLocation } from 'react-router-dom';
import { animate, stagger } from 'motion';
import { AnimatePresence, motion } from 'framer-motion';
import { cloneElement } from 'react';
import AnimatedLayout from './animatedlayout.js';

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
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="main-layout">
      <nav className="main-nav">
        <div className="main-nav-content">
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
        </div>
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait" initial={true}>
          { element && cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
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
    <AnimatedLayout>
    <div class="home-layout">
      <section className="hero">
        <Link to="/welcome">
          <button className="large-nav-button">
            <span>Get Started</span>
          </button>
        </Link>
      </section>
      <section className="home-nav-buttons">
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
    </div>
    </AnimatedLayout>
  );
}

function About() {
  return (
    <section>
    </section>
  );
}
