import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';

export default function BuildPage() {
  return (
    <AnimatedLayout>
    <section>
      <RelativeNavHeader
        pageTitle="Build Your Deck"
        previousLinkPath="/welcome"
        previousTitle="Back"
        nextLinkPath="/grid-setup"
        nextTitle="Next"
        titleEmoji="🔨"
        artCardScryfallId="31782426-4128-47af-8922-0207a3233885"
      />
  
      <p>You’re about to play one of the most time-honored types of <i>Magic: the Gathering</i>: <b>draft</b>. You all are about to make decks on the fly using the cards in front of you.
  
  The setup depends on how many people are playing, but the reasons to pick cards are the same. These cards are specially selected so you’ll be able to make a deck that works as long as you follow one guideline:</p>
      
      <strong>Choose two colors and try to draft only cards of those two colors!</strong>
      
      <p>There are five <b>colors</b> of <b>mana</b> in <i>Magic</i>:</p>
      
      <ul className="colors-list">
        <li className="colors-list-color"><image src="%PUBLIC_URL%/icons/w.svg" />White
          <ul>
            <li>Types of creatures: humans, birds, cats, angels</li>
            <li>Playstyle: play a lot of creatures to overwhelm your opponent</li>
          </ul>
        </li>
        <li className="colors-list-color"><image src="%PUBLIC_URL%/icons/u.svg" />Blue
          <ul>
            <li>Types of creatures: faeries, merfolk, wizards</li>
            <li>Playstyle: outwit your opponent with evasive creatures and tricksy spells</li>
          </ul>
        </li>
        <li className="colors-list-color"><image src="%PUBLIC_URL%/icons/b.svg" />Black
          <ul>
            <li>Types of creatures: zombies, vampires, spirits</li>
            <li>Playstyle: benefit from creatures dying, drain your opponent's life</li>
          </ul>
        </li>
        <li className="colors-list-color"><image src="%PUBLIC_URL%/icons/b.svg" />Red
          <ul>
            <li>Types of creatures: goblins, shamans, dragons</li>
            <li>Playstyle: damage your opponent as quickly as possible, be aggressive</li>
          </ul>
        </li>
        <li className="colors-list-color"><image src="%PUBLIC_URL%/icons/b.svg" />Green
          <ul>
            <li>Types of creatures: elves, plants, frogs</li>
            <li>Playstyle: get lots of mana, play big creatures</li>
          </ul>
        </li>
      </ul>
  
      <p>You can tell what <b>color(s)</b> a card is based on its <b>mana cost</b> in the top right.</p>
      
      <figure className="card-figure">
        <img src="https://api.scryfall.com/cards/named?exact=Centaur+Courser&amp;format=image&amp;version=normal" width="215" height="300" />
        <figcaption>Centaur Courser needs green mana to cast, so it's a green card.</figcaption>
      </figure>
  
      <p>They also have colored backgrounds that match what color they are, except for <b>two-colored</b> cards which have a gold background.</p>
      
      <figure className="card-figure">
        <img src="https://api.scryfall.com/cards/named?exact=Empyrean+Eagle&amp;format=image&amp;version=normal" width="215" height="300" />
        <figcaption>Empyrean Eagle needs white and blue mana to cast, so it's a white and blue card.</figcaption>
      </figure>
  
      <p><b>Lands</b> don’t have a <b>mana cost</b>, so you should look at what <b>colors</b> of <b>mana</b> they add. <b>Lands</b> that add both of your <b>colors</b> help your deck function smoothly.</p>
  
      <figure className="card-figure">
        <img src="https://api.scryfall.com/cards/named?exact=Molten+Tributary&amp;format=image&amp;version=normal" width="215" height="300" />
        <figcaption>Molten Tributary adds blue or red mana, so it's perfect for a deck playing both blue cards and red cards.</figcaption>
      </figure>
  
      <p>With that in mind, and remembering to <b>pick cards of only two colors</b>, it’s time to start the action!</p>
  
      <Link to="/grid-setup">
        <button className="large-nav-button">2 or 3 player draft setup</button>
      </Link>
      <Link to="/draft-setup">
        <button className="large-nav-button">4 or more player draft setup</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
