import './app.css';

import { cloneElement } from 'react';
import { Routes, Route, Outlet, Link, useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Scroll } from '@phosphor-icons/react';

import HomePage from './HomePage.js';
import WelcomePage from './WelcomePage.js';
import BuildPage from './BuildPage.js';
import GridSetupPage from './GridSetupPage.js';
import DraftSetupPage from './DraftSetupPage.js';
import FinishBuildPage from './FinishBuildPage.js';
import TutorialPage from './TutorialPage.js';
import InstantsPage from './InstantsPage.js';
import CheatSheetPage from './CheatSheetPage.js';

import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import ProgressTracker from './ProgressTracker.js';

import logo from './images/logo.svg';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="build" element={<BuildPage />} />
          <Route path="grid-setup" element={<GridSetupPage />} />
          <Route path="draft-setup" element={<DraftSetupPage />} />
          <Route path="finish-build" element={<FinishBuildPage />} />
          <Route path="tutorial" element={<TutorialPage />} />
          <Route path="instants" element={<InstantsPage />} />
          <Route path="cheat-sheet" element={<CheatSheetPage />} />
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

function AboutPage() {
  return (
    <AnimatedLayout>
      <section>
        <PageHeaderCard
          pageTitle="About"
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
