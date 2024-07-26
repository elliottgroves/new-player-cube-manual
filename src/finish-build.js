import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';
import Scroll from './Scroll.js';
import { Info, DotOutline } from '@phosphor-icons/react';
import two from './icons/2.svg';
import r from './icons/r.svg';

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
        artCardScryfallId="b78e2bca-bc93-464a-8911-8361abff2ac6"
      />

      <p>Almost time to play! We're going to play with 40 card decks. Over many years of playing Magic players have figured out that a 40 card deck should have 17 <b>lands</b> to cast all its cards and not run out of steam. We're going to add <b>basic lands</b> to your deck to give you enough. Basic lands only tap for one color of mana.</p>

      <p>Hopefully you were able to pick up cards of two colors. First, set aside all cards that aren’t those colors. Golden two-color cards that are both your colors can stay, same with lands that tap for both your colors.</p>

      <p>Now we need to pick our 23 favorite cards, then we can finalize our deck by adding basic lands. Picking which cards to include isn’t an exact science. For your first game, don’t sweat it too much.</p>
      <Scroll title={'Help me pick my best cards'}>
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
        <p>You can also decide what to include based on its <b>mana cost</b>. You want your deck to have a good balance of early and late plays.</p>
        <p>You can figure out how much total mana a card costs by adding the number of colored mana symbols (<img src={r}/>) to the other number (<img src={two} />). That number means you can spend mana of any color when paying for that part of the mana cost.</p>
      
        <p>For example, <img src={two}/><img src={r}/><img src={r}/> means a card costs <b>four mana</b> total: <b>two mana of any color</b> and <b>two red mana</b>.</p> 
      </Scroll>

      <p>Once you have 23 cards chosen, add basic lands until you have a 40 card deck. If your deck has more cards of one color than the other, add more basic lands that add that color.</p>
      <p>And with that, you are an officially licensed Magic deckbuilder! If you have an odd number of people, feel free to play a 3-player game or take turns playing. Otherwise split into 2 person groups and get ready to play!</p>
      <Link to="/tutorial">
        <button className="large-nav-button">How to play</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
