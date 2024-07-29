import './tutorial.css';
import RelativeNavHeader from './relative-nav.js';
import Scroll from './Scroll.js';
import { Link } from 'react-router-dom';
import CastSpellAnimation from './animations/CastSpellAnimation.js';
import AttackAnimation from './animations/AttackAnimation.js';
import BlockAnimation from './animations/BlockAnimation.js';
import OrderBlockersAnimation from './animations/OrderBlockersAnimation.js';
import DamageAnimation from './animations/DamageAnimation.js';
import two from './icons/2.svg';
import g from './icons/g.svg';
import CentaurCourser from './images/Centaur Courser.webp';
import AnimatedLayout from './animatedlayout.js';
import { Crown } from '@phosphor-icons/react';

export default function TutorialPage() {
  return (
    <AnimatedLayout>
    <article>
    <section>
      <RelativeNavHeader
        pageTitle="How to play"
        previousLinkPath="/finish-build"
        previousTitle="Back"
        nextLinkPath="/cheat-sheet"
        nextTitle="Next"
        iconFunction={() => <Crown />}
        artCardScryfallId="b88a762d-19ed-451d-a3a9-b3e7eea40f67"
      />

      <p>Let's start by deciding who's going first. Roll dice or whatever random method you like, and whoever wins gets to pick if they want to <b>play</b> first or <b>draw</b> first. The player who goes first skips their draw on their first turn, but gets the chance to play cards before their opponent.</p>
      <p>Once that's decided, shuffle up your deck face down, then draw 7 cards. You need a good mix of lands and spells to play - if you have 1 or less lands or 6 or more lands, you should take a mulligan.
      </p>

      <Scroll style={{ background: 'red' }} title={'Tell me how to mulligan'}>
        <p>Shuffle your hand back into your deck and draw a new hand of 7 cards. If you keep that hand, put one card from your hand on the bottom of your deck.</p>
        <p>The offical rule if you need to mulligan multiple times is to put one additional card back each time (2 mulligans means put 2 on bottom, etc). For your first games if you need to mulligan more than once I would recommend putting only one card back after any mulligans so you can both play a more fun game, but it's up to you.</p>
      </Scroll>
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
      <img className="centaur-courser" src={CentaurCourser} />
      <p>Centaur Courser is a creature with a <b>mana cost</b> of <img src={two} alt="{2}"/><img src={g} alt="{G}"/>. This means you have to spend <b>one green mana</b> and <b>two mana of <i>any color</i></b> to pay for Centaur Courser.</p>

      <CastSpellAnimation />

      <p>Each land adds one mana per turn - even though you tapped it this turn, each turn starts by untapping all your cards.</p>
<p>That’s it for the main phases! You can play one land card per turn during either main phase, and then tap lands to play spells during your main phase.</p>
    </section>
    <section className="combat-section">
    <h3>Combat</h3>
      <ul>Key points:
        <li>Attack your opponent by tapping creatures you've controlled since last turn</li>
        <li>Your opponent can block with their untapped creatures. Multiple creatures can block one attacker.</li>
        <li>Unblocked creatures deal their power's worth of damage to your opponent</li>
        <li>Blocked creatures each deal their power's worth of damage to the others' toughness</li>
        <li>If a creature takes more damage than its toughness it dies and goes to the graveyard</li>
      </ul>
      
      <button>Tell me more</button>
    <p>Now for how to win the game - combat. To sum it up, you can use your creatures to attack your opponent, and they can use their creatures to block your attacks.</p>
    <p>Go to combat any time during your first main phase by saying so ("go to combat"). You can then pick any of your <b>untapped</b> creatures to declare as attackers, as long as you played them before this turn, since <b>creatures can’t attack the turn they’re played</b>.</p>

<p>You show which creatures are attacking your opponent by <b>tapping</b> them, just like a land you’re using for mana - turn em sideways!</p>

      <AttackAnimation />

      <p>After you’ve declared all your attackers, your opponent gets a chance to block your attackers with their untapped creatures. Blocked creatures deal no damage to your opponent, but damage the blocking creature(s) instead.</p>
      
      <BlockAnimation />

      <p>Once blocks are declared, damage is dealt. If multiple creatures are blocking one attacking creature, the attacker decides in what order their creature deals damage to the blockers.</p>
      
      <OrderBlockersAnimation />
      
    <p>All the creatures deal damage equal to their power (first number in the bottom right box) to the other creatures' toughness (second number in the bottom right). Unblocked creatures damage your opponent!</p>
      
      <DamageAnimation />
      
      <p>If a creature takes as much damage as its toughness in a turn, it has taken lethal damage - it dies and is put into the graveyard. At the end of the turn, damage wears off of creatures that are still around (it doesn't persist between turns).</p>
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
    </AnimatedLayout>
  );
}
