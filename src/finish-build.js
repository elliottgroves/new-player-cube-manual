import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';
import Scroll from './Scroll.js';
import { SealCheck, Info, DotOutline, Mountains, Sword, MagicWand, Stack } from '@phosphor-icons/react';
import two from './icons/2.svg';
import r from './icons/r.svg';
import './finish-build.css';

export default function BuildPage() {
  return (
    <AnimatedLayout>
    <section>
      <RelativeNavHeader
        pageTitle="Finish your deck"
        previousLinkPath="/grid-setup"
        previousTitle="Back"
        nextLinkPath="/tutorial"
        nextTitle="Next"
        iconFunction={() => <SealCheck />}
        artCardScryfallId="b78e2bca-bc93-464a-8911-8361abff2ac6"
      />

      <p>Now that we have our cards, we need to build our deck. Let's start by grabbing all our cards that are our two colors. This includes gold cards that are both our colors and lands that add both our colors of mana.</p>
      
      <p>We're going to make a 40 card deck. You want your deck to be mostly creatures and lands with some other spells to round it out. Grab as many <b>basic lands</b> as you need from the cube box - if your deck has more cards of one color, include more basic lands that add that color. A good starting point is this:</p>
      
      <div className="deck-ratio-explainer">
        <figure>
          <Mountains size={48} />
          <figcaption><span className="num">17-18</span>lands</figcaption>
        </figure>
        <figure>
          <Sword size={48} />
          <figcaption><span className="num">15-17</span>creatures</figcaption>
        </figure>
        <figure>
          <MagicWand size={48} />
          <figcaption><span className="num">6-8</span>other</figcaption>
        </figure>
        <div>=</div>
        <figure>
          <Stack size={48} />
          <figcaption><span className="num">40</span>total</figcaption>
        </figure>
      </div>
      
      <p>It's also a good idea to tend towards cards with lower mana costs, having mostly cards that cost 2-4 mana. You can figure out how much total mana a card costs by adding the number of colored mana symbols <span className="inline-no-wrap">(<img src={r}/>)</span> to the other number <span className="inline-no-wrap">(<img src={two} />)</span>.</p>
    <p>That first number means you can spend mana of any color when paying for that part of the mana cost. For example, <span className="inline-no-wrap"><img src={two}/><img src={r}/><img src={r}/></span> means a card costs <b>four mana</b> total: <b>two mana of any color</b> and <b>two red mana</b>.</p> 

      <Scroll title={'Need help choosing?'}>
        <p>The <i>Magic</i> community has an acronym to help evaluate which cards are best in a draft:</p>
        <div className="bread-explainer">
          <h4>B.R.E.A.D.</h4>
          <ul className="bread-list">
            <li>
              <b>Bombs</b><span> (your biggest, most powerful creatures and other spells)</span>
            </li>
            <li>
              <b>Removal</b><span> (cards that destroy creatures)</span>
            </li>
            <li>
              <b>Evasion</b><span> (creatures that can't be blocked easily)</span>
            </li>
            <li>
              <b>Attackers</b> <span> (creatures that attack well)</span>
            </li>
            <li>
              <b>Duds</b><span> (everything else)</span>
            </li>
          </ul>
        </div>
        <p>If you're stuck picking between a couple cards to remove, you can try and put them in these categories as a tiebreaker. The higher up the category is, the better.</p>
        <p>Also, generally speaking, cards that are two colors are more powerful than mono-colored cards, so it's a good idea to include the cards that are both your colors in your deck.</p>
      </Scroll>

      <p>Congratulations - you are an officially licensed <i>Magic</i> deckbuilder! If you have an odd number of people, feel free to play a 3-player game or take turns playing. Otherwise split into 2 person groups and get ready to play!</p>
      <Link to="/tutorial">
        <button className="large-nav-button">How to play</button>
      </Link>
      <p className="postscript"><Info className="inline-icon"/>Deckbuilding tips inspired by Wizards of the Coast's official <a href="https://magic.wizards.com/en/products/companion-app" target="_blank" rel="noreferrer">MTG Companion App</a> - go check it out!</p>
    </section>
    </AnimatedLayout>
  );
}
