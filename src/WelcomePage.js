import './welcome-page.css';
import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HandWaving, Hammer } from '@phosphor-icons/react';

export default function WelcomePage() {
  function flipAnimation() {
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 'all' },
      transition: { duration: 0.4, easing: 'easeOut' }
    }
  }

  return (
    <AnimatedLayout>
      <section className="welcome-page">
        <PageHeaderCard
          pageTitle="Welcome!"
          iconFunction={() => <HandWaving />}
          artCardScryfallId="0438d482-b74c-4d5e-a2bc-7063c1ae73fa"
        />
        
        <p><b>MAGIC: THE GATHERING</b> is an infinitely replayable, fantasical card game for 2 or more players. You’re about to play your very first game, but first let’s introduce the types of cards you’ll see!</p>
        
        <h3>Creatures</h3>
        <motion.img 
          {...flipAnimation()}
          className="card-image" 
          alt="Grizzly Bears" 
          src="https://cards.scryfall.io/normal/front/b/f/bf11596e-e798-4126-b56c-e23a1ca2a25d.jpg?1664926010" />
        <p>Cast creature spells to attack your opponent and defend you from your opponent's attacks.</p>

        <h3>Lands</h3>
        <motion.img 
          {...flipAnimation()}
          className="card-image" 
          alt="Mountain" 
          src="https://cards.scryfall.io/normal/front/1/a/1a8d9be0-255a-482a-b055-f483859266c5.jpg?1562634534" />
        <p>Lands give you the magical resource <b>mana</b> that lets you cast spells.</p>
        <h3>Sorceries</h3>
        <motion.img 
          {...flipAnimation()}
          className="card-image" 
          alt="Divination" 
          src="https://cards.scryfall.io/normal/front/c/7/c7f9daf0-dbfd-45b2-be35-9c2de9d1a56e.jpg?1562742725" />
        <p>Sorceries are one-time effects that do anything from draw cards to destroy creatures.</p>

        <h3>Instants</h3>
        <motion.img 
          {...flipAnimation()}
          className="card-image" 
          alt="Mabel's Mettle" 
          src="https://cards.scryfall.io/normal/front/5/c/5cfcf83f-089c-4e35-855e-b61b98bb1cd8.jpg?1721425880" />
        <p>Instants are like sorceries, but they can be played at any time to surprise your opponent!</p>
  
        <p>Now that we know what to expect, let's build some decks and play some games.</p>

        <Link to="/build">
          <button className="large-nav-button">Build my deck<Hammer className="inline-icon"/></button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
