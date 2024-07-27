import './welcome.css';
import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HandWaving } from '@phosphor-icons/react';
import CentaurCourser from './images/Centaur Courser.webp';

export default function WelcomePage() {
  function flipAnimation() {
    return {
      initial: { rotateY: -90, transformPerspective: 800 },
      whileInView: { rotateY: 0, transformPerspective: 800 },
      viewport: { once: true, margin: '-150px' },
      transition: { duration: 0.4, easing: 'easeOut' }
    }
  }

  return (
    <AnimatedLayout>
      <section className="welcome-page">
        <RelativeNavHeader
          pageTitle="Welcome!"
          previousLinkPath="/"
          previousTitle="Back"
          nextLinkPath="/build"
          nextTitle="Next"
          iconFunction={() => <HandWaving />}
          artCardScryfallId="0438d482-b74c-4d5e-a2bc-7063c1ae73fa"
        />
        
        <p><b>MAGIC: THE GATHERING</b> is an infinitely replayable, fantasical card game for 2 or more players. You’re about to play your very first game, but first let’s introduce the types of cards you’ll see!</p>
        
        <h3>Creatures</h3>
        <motion.img {...flipAnimation()} mode="wait" src={CentaurCourser} className="card-img"/>
        <p>Cast creature spells to attack your opponent and defend you from your opponent's attacks.</p>

        <h3>Lands</h3>
        <motion.img {...flipAnimation()} mode="wait" src={CentaurCourser} className="card-img"/>
        <p>Lands give you the magical resource <b>mana</b> that lets you cast spells.</p>

        <h3>Sorceries</h3>
        <motion.img {...flipAnimation()} mode="wait" src={CentaurCourser} className="card-img"/>
        <p>Sorceries are one-time effects that do anything from draw cards to destroy creatures.</p>

        <h3>Instants</h3>
        <motion.img {...flipAnimation()} mode="wait" src={CentaurCourser} className="card-img"/>
        <p>Instants are like sorceries, but they can be played at any time to surprise your opponent!</p>
  
        <p>Now that we know what to expect, let's build some decks and play some games.</p>

        <Link to="/build">
          <button className="large-nav-button">Build my deck</button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
