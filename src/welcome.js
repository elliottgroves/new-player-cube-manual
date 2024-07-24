import './welcome.css';
import RelativeNavHeader from './relative-nav.js';
import Book from './book.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedLayout from './animatedlayout.js';

export default function WelcomePage() {
  return (
    <AnimatedLayout>
    <section>
      <RelativeNavHeader
        pageTitle="Welcome!"
        previousLinkPath="/"
        previousTitle="Back"
        nextLinkPath="/build"
        nextTitle="Next"
        titleEmoji="👋"
        artCardScryfallId="0438d482-b74c-4d5e-a2bc-7063c1ae73fa"
      />
      
      <p><b>MAGIC: THE GATHERING</b> is an infinitely replayable, fantasical card game for 2 or more players. You’re about to play your very first game, but first let’s introduce the types of cards you’ll see!</p>

      <p>Tap above to learn more about card types. Once you’re ready, we can talk about how you’ll build your first deck.</p>

      <Link to="/build">
        <button className="large-nav-button">Build my deck</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
