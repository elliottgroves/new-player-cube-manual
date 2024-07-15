import './tutorial.css';
import RelativeNavHeader from './relative-nav.js';
import { Link } from 'react-router-dom';
import CastSpellAnimation from './animations/CastSpellAnimation.js';

export default function TutorialPage() {
  return (
    <article>
    <section>
      <RelativeNavHeader
        pageTitle="How to play"
        previousLinkPath="/finish-build"
        previousTitle="Back"
        nextLinkPath="/cheat-sheet"
        nextTitle="Next"
      />

      <div>
        <p>Jump to</p>
        <ul>
          <li>Start the Game</li>
          <li>Main Phase</li>
          <li>Combat</li>
          <li>Instant Cards</li>
        </ul>
      </div>


      <p>Let's start by picking who's going first. Roll dice or whatever random method you like, and whoever wins gets to pick if they want to <b>play</b> first or <b>draw</b> first. The player who goes first skips their draw on their first turn, but gets the chance to play cards before their opponent.</p>
      <p>Once that's decided, shuffle up your deck face down, then draw 7 cards.

You need a good mix of lands and spells to play - if you have 1 or less lands or 6 or more lands, you should take a mulligan.
      </p>

      <div className="tips-section">
        <button>Tell me how to mulligan</button>
      </div>

      <p>Once both players are happy with their hands, let’s begin!

Both players start with 20 life points - you win by reducing your opponent’s life points to 0. The best way to do this is by attacking your opponent with your creatures.

Each turn, you can play one land, spend mana from your lands to pay for spells, and attack your opponent with your creatures.</p>

      <p>Let's show an overview of each turn, and then explain some details.</p>

      <ul>
        <li>Untap all your cards, upkeep, then draw a card</li>
        <li>First main phase</li>
        <li>Combat</li>
        <li>Second main phase</li>
        <li>End of turn</li>
      </ul>

      <p>Let’s explain starting with the main phase.</p>
    </section>
    <section className="main-phase-section">
      <h3>Main Phase</h3>
      <p>Each turn, you get to play one land card from your hand.</p>
    <p>Then, you can <b>add mana</b> from your <b>lands</b> to pay for the <b>mana cost</b> of any cards you want. You do that by <b>tapping</b> the lands you want to add mana from - turn them sideways to show that you’ve used them. Here’s an example:</p>

      <CastSpellAnimation />

      <p>Centaur Courser is a creature that has a mana cost of 2G. This means you can use one green mana and two mana of any color to pay for Centaur Courser. Each land adds one mana per turn - even though you tapped it this turn, each turn starts by untapping all your cards.</p>

<p>That’s it for the main phases! You can play one land card per turn during either main phase, and then tap lands to play spells during your main phase.</p>
    </section>
    <section className="combat-section">
    <h3>Combat</h3>
      <ul>TL;DR:
        <li>Attack your opponent by tapping creatures you've controlled since last turn</li>
        <li>Your opponent can block with their untapped creatures. Multiple creatures can block one attacker.</li>
        <li>Unblocked creatures deal their power's worth of damage to your opponent</li>
        <li>Blocked creatures each deal their power's worth of damage to the others' toughness</li>
        <li>If a creature takes more damage than its toughness it dies and goes to the graveyard</li>
      </ul>
      
      <button>Tell me more</button>
    <p>Now for how to win the game - combat. To sum it up, you can use your creatures to attack your opponent, and they can use their creatures to block your attacks.

Start combat any time during your first main phase by saying so (“go to combat”, “declare attacks”, “hi-yah”, anything works as long as your opponent gets it). You can then pick any of your untapped creatures to declare as attackers, as long as you played them before this turn, since creatures can’t attack the turn they’re played.

You show that your creatures are attacking your opponent by tapping them, just like a land you’re using for mana - turn em sideways!</p>

      <p>After you’ve declared all your attackers, your opponent gets a chance to block your attack with their untapped creatures. Blocked creatures deal no damage to your opponent.</p>

      <p>Above, your opponent can choose to block with either or both of their untapped creatures, but not their tapped creature.</p>

      <p>Once blocks are declared, damage is dealt. Both creatures deal damage equal to their power (first number in the bottom right box) to the other creature’s toughness (second number in the bottom right). Unblocked creatures damage your opponent!</p>
      
      <p>If a creature takes as much damage as its toughness in a turn, it has taken lethal damage - it dies and is put into the graveyard. At the end of the turn, damage wears off of creatures that are still around (it doesn't persist between turns).</p>

      <p>Lastly, multiple creatures are able to block a single attacking creature. Once the blocks are declared the attacker decides which creatures take damage first. For example:</p>

      <p>Your opponent is attacking you with a 4/4 (4 power, 4 toughness). You have two untapped creatures - a 2/2 and a 3/3. You can block the 4/4 with both of your creatures, then the attacking player orders the blockers in the order they'd like to damage them.</p>

      <p>If they order your 3/3 first, it'll take 3 damage which is enough to kill it, and the 4/4 still has 1 damage to deal. It deals 1 damage to the 2/2, leaving it alive.</p>
    </section>
    <section className="instant-cards-section">
      <h3>Instant Cards</h3>
      
      <p>We've talked about everything you'll be doing on your turn, but we saved the best for last: <b>instant</b> cards are special because they can be played at any time - <b>even on your opponent's turn</b>. They are a huge part of the strategy of <i>Magic</i> and a single well-timed <b>instant</b> can mean the difference between a win and a loss.</p>

      <p>You really can play an instant at any time. Let's show an example of a great time to cast an instant.</p>

      <p>It's your opponent's combat and they're attacking you with this 3/3. Normally, if you blocked with your 2/2, it would just die and your opponent's 3/3 would live, meaning you lost a creature for little value. But wait! You look down at your hand and see this instant card:</p>

      <figure>
        <img src="https://api.scryfall.com/cards/named?exact=Giant+Growth&amp;format=image&amp;version=normal" width="215" height="300" />
        <figcaption>You have a trick up your sleeve!</figcaption>
      </figure>

      <p>Before the creatures deal each other damage, you have a chance to act! You can tell your opponent, "before damage I have a spell to cast", or something to that effect. Once they acknowledge that, you can tap a land that adds a green mana to pay for the mana cost of Giant Growth and choose which creature to target with it - your blocking 2/2 could use a boost!</p>

      <p>With the effect of Giant Growth your 2/2 that would die to a 3/3 becomes a big 5/5 that easily defeats the 3/3 in combat! Now your opponent's creature dies instead of yours, and you've swung the tide of the game in your favor.</p>

      <p>In case you're curious to learn more:</p>

      <Link to="/instants">
        <button className="large-nav-button">Be like, way too specific about instants please</button>
      </Link>

      <p>You're done! For a quick reference to remember things, here's a cheat sheet that you can glance at if you want to know what to do next. Most important:</p>

      <strong>GHLF!</strong>

      <Link to="/cheat-sheet">
        <button className="large-nav-button">Turn cheat sheet</button>
      </Link>
    </section>
    </article>
  );
}
