import './App.css';
import logo from './placeholder-logo.svg';
import Home from './home.js';
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
import ScrollTracker from './ScrollTracker.js';
import RelativeNavHeader from './relative-nav.js';
import { Scroll } from '@phosphor-icons/react';

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
    {/*<ScrollTracker />*/}
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
        <img src={logo} className="logo" />
        <h1>Welcome Cube</h1>
        <div className="links-section">
          <ul title="Pages">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul title="Jump to">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="info-section">
          <p>This site is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.</p>
          <p>
            This site may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under <a href="https://company.wizards.com/en/legal/fancontentpolicy" target="_blank" rel="noreferrer">Wizards’ Fan Site Policy</a>. For example, Magic: The Gathering® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards’ trademarks or other intellectual property, please visit their website at <a href="https://magic.wizards.com" target="_blank" rel="noreferrer">magic.wizards.com</a>. 
          </p>
          <p>
            This site also uses card images created on <a href="https://mtg.design" target="_blank" rel="noreferrer">MTG.Design</a> and card images from <a href="https://scryfall.com" target="_blank" rel="noreferrer">Scryfall</a>.
          </p>
          <p>
            Made with ❤️ by <a href="https://elliottgrov.es" target="_blank">Elliott Groves Design</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function About() {
  return (
    <AnimatedLayout>
      <section>
        <RelativeNavHeader
          pageTitle="About"
          previousLinkPath="/build"
          previousTitle="Back"
          nextLinkPath="/"
          nextTitle="Next"
          iconFunction={() => <Scroll />}
          artCardScryfallId="34e61e0f-d0f3-492a-92f1-36f72a91583a"
        />
        
        <p>Welcome Cube is a passion project that started in 2020.</p>

        <p>Cube is a way to play <i>Magic</i>. You can find the current list of all the cards in the Welcome Cube <a href="https://cubecobra.com/cube/list/welcome-cube" target="_blank" rel="noreferrer">here</a>. (Also, if you're curious, <a href="https://cubecobra.com/" target="_blank" rel="noreferrer">Cube Cobra</a> is a wonderful site that hosts cube lists - great place to browse cards!)</p>
        
        <p>This site is built with <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">Framer Motion</a>. It uses <a href="https://phosphoricons.com/" target="_blank" rel="noreferrer">Phosphor Icons</a>.</p>
      </section>
    </AnimatedLayout>
  );
}
