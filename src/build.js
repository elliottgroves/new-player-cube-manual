import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import w from './icons/w.svg';
import u from './icons/u.svg';
import b from './icons/b.svg';
import r from './icons/r.svg';
import g from './icons/g.svg';
import './build.css';
import { Hammer } from '@phosphor-icons/react';

export default function BuildPage() {
  const fadeInAnimation = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    inView: {  
      opacity: 1,
      y: 0
    }
  };

  const animation = (variants) => {
    return {
      initial: 'hidden',
      whileInView: 'inView',
      viewport: { margin: '-120px', once: true },
      variants
    }
  }

  return (
    <AnimatedLayout>
    <section className="build-page">
      <RelativeNavHeader
        pageTitle="Build Your Deck"
        previousLinkPath="/welcome"
        previousTitle="Back"
        nextLinkPath="/grid-setup"
        nextTitle="Next"
        iconFunction={() => <Hammer />}
        artCardScryfallId="31782426-4128-47af-8922-0207a3233885"
      />
  
      <p>You’re about to play one of the most time-honored types of <i>Magic: the Gathering</i>: <b>draft</b>. You all are about to make decks on the fly using the cards in front of you.
  
  The setup depends on how many people are playing, but the reasons to pick cards are the same. These cards are specially selected so you’ll be able to make a deck that works as long as you follow one guideline:</p>
      
      <strong>Choose two colors and try to draft only cards of those two colors!</strong>
      
      <p>There are five <b>colors</b> of <b>mana</b> in <i>Magic</i>:</p>
      
      <motion.ul className="colors-list">
        <motion.li {...animation(fadeInAnimation)} className="colors-list-color white">
          <img src={w} />
          <div>
            <h3>White</h3>
            <p className="desc">Play a lot of creatures to overwhelm your opponent</p>
          </div>
        </motion.li>
        <motion.li {...animation(fadeInAnimation)} className="colors-list-color blue">
          <img src={u} />
          <div>
            <h3>Blue</h3>
            <p className="desc">Outwit with evasive creatures and tricksy spells</p>
          </div>
        </motion.li>
        <motion.li {...animation(fadeInAnimation)} className="colors-list-color black">
          <img src={b} />
          <div>
            <h3>Black</h3>
            <p className="desc">Benefit from creatures dying, drain your opponent's life</p>
          </div>
        </motion.li>
        <motion.li {...animation(fadeInAnimation)} className="colors-list-color red">
          <img src={r} />
          <div>
            <h3>Red</h3>
            <p className="desc">Damage your opponent quickly, be aggressive</p>
          </div>
        </motion.li>
        <motion.li {...animation(fadeInAnimation)} className="colors-list-color green">
          <img src={g} />
          <div>
            <h3>Green</h3>
            <p className="desc">Add lots of mana, play big creatures</p>
          </div>
        </motion.li>
      </motion.ul>
  
      <p>You can tell what <b>color(s)</b> a card is based on its <b>mana cost</b> in the top right.</p>
      
      <figure className="card-figure">
    {/*<img src="https://api.scryfall.com/cards/named?exact=Centaur+Courser&amp;format=image&amp;version=normal" width="215" height="300" />*/}
        <figcaption>Centaur Courser needs green mana to cast, so it's a green card.</figcaption>
      </figure>
  
      <p>They also have colored backgrounds that match what color they are, except for <b>two-colored</b> cards which have a gold background.</p>
      
      <figure className="card-figure">
    {/*<img src="https://api.scryfall.com/cards/named?exact=Empyrean+Eagle&amp;format=image&amp;version=normal" width="215" height="300" />*/}
        <figcaption>Empyrean Eagle needs white and blue mana to cast, so it's a white and blue card.</figcaption>
      </figure>
  
      <p><b>Lands</b> don’t have a <b>mana cost</b>, so you should look at what <b>colors</b> of <b>mana</b> they add. <b>Lands</b> that add both of your <b>colors</b> help your deck function smoothly.</p>
  
      <figure className="card-figure">
    {/*<img src="https://api.scryfall.com/cards/named?exact=Molten+Tributary&amp;format=image&amp;version=normal" width="215" height="300" />*/}
        <figcaption>Molten Tributary adds blue or red mana, so it's perfect for a deck playing both blue cards and red cards.</figcaption>
      </figure>
  
      <p>With that in mind, and remembering to <b>pick cards of only two colors</b>, it’s time to start the action!</p>
  
      <Link to="/grid-setup">
        <button className="large-nav-button">2 or 3 player setup</button>
      </Link>
      <Link to="/draft-setup">
        <button className="large-nav-button">4+ player setup</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
