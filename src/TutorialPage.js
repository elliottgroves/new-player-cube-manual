import './tutorial-page.css';
import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import CollapsibleScroll from './CollapsibleScroll.js';
import { Link } from 'react-router-dom';
import { Info, Sword, Shield, Crown, Lightning, Scroll } from '@phosphor-icons/react';
import t from './icons/t.svg';

export default function TutorialPage() {
  return (
    <AnimatedLayout>
      <section className="tutorial-page">
        <PageHeaderCard
          pageTitle="How to play"
          iconFunction={() => <Crown />}
          artCardScryfallId="b88a762d-19ed-451d-a3a9-b3e7eea40f67"
        />

        <p>Now that you've put your cards into a deck, they've become your <b>library</b> of spells. You and your opponent are about to put each others' libraries to the test!</p>
  
        <p>Let's start by deciding who's going first. Take turns rolling two dice, and whoever rolled higher gets to choose if they want to <b>play</b> first or <b>draw</b> first.</p>

        <p className="tip"><Info className="inline-icon"/>The player who goes first <b>skips their draw on the first turn</b> but gets to play cards first, which is a big advantage.</p>

        <p>Once that's decided, shuffle up your library face down, then draw <b>7</b> cards. You need a good mix of lands and spells to play - if that hand has 1 or less lands or 6 or more lands, you should take a mulligan.</p>
  
        <CollapsibleScroll style={{ background: 'red' }} title={'Tell me how to mulligan'}>
          <p>Shuffle your hand back into your library and draw a new hand of 7 cards. If you keep that hand, put one card from your hand on the bottom of your deck.</p>
          <p>The offical rule if you need to mulligan multiple times is to put one additional card back each time (2 mulligans means put 2 on bottom, etc). For your first games if you need to mulligan more than once I would recommend putting only one card back after any mulligans so you can both play a more fun game, but it's up to you.</p>
        </CollapsibleScroll>
        
        <p>Once both players keep their hands, it's time to start the game. Both players start at <b>20 life points</b> - you win by getting your opponent to 0 life.</p> 
        
        <p>Here's a guideline of what your board will look like as you play.</p>
        
        <div className="board">
          <div className="creatures">Creatures</div>
          <div className="lands">Lands</div>
          <div className="library">Library</div>
          <div className="graveyard">Graveyard</div>
        </div>

        <p>Finally, try and announce everything you're doing to make sure it's clear to your opponent, and ask you're opponent if you're not sure what they're doing.</p>

        <p>Let's start your first turn!</p>
        
        <h3>Beginning Phase</h3>

        <p>You begin each turn with three quick steps.</p>

        <ul className="tutorial-list">
          <li><b>Untap</b> all your creatures and lands</li>
          <li><b>Upkeep</b> <span className="note">(chance to cast instants)</span></li>
          <li><b>Draw</b> a card from your library</li>
        </ul>
        
        <p>We'll go into more details in a sec. Right after your draw step, you enter your first of two <b>Main Phases</b>.</p>

        <h3>Main Phase</h3>
        
        <p className="mb-1">During your main phases, you're able to:</p>

        <ul className="tutorial-list">
          <li>Play a land <span className="note">(one each turn)</span></li>
          <li><img src={t} className="symbol"/> <b>Tap</b> your lands for mana to cast spells <span className="note">(creatures, sorceries, or instants)</span></li>
        </ul>
        
        <figure className="tap-explainer">
          <div className="tap-diagram">
            <div className="card untapped"/>
            <img src={t}/>
            <div className="card tapped"/>
          </div>
          <figcaption>Tap a card by turning it sideways, showing that you've used it this turn.</figcaption>
        </figure>

        <p>When you cast a sorcery spell or an instant spell, its effect happens, then it goes to the graveyard.</p> 

        <p>Creature spells you cast become creatures on the battlefield. The turn a creature enters the battlefield, it has <b>summoning sickness</b> and can't attack or <img src={t} className="symbol"/> tap to activate abilities yet.</p>

        <p>The majority of <i>Magic</i> games are won by attacking your opponent with your creatures. You do this in the Combat Phase - move to the Combat Phase during your first main by saying so:</p>
        
        <q>Go to combat</q>

        <h3>Combat Phase</h3>
  
        <p>The Combat Phase has the following steps:</p>

        <ul className="tutorial-list">
          <li><b>Beginning of combat</b> <span className="note">(chance to cast instants)</span></li>
          <li><b>Declare Attackers</b>: declare all your attacking creatures by tapping them</li>
          <li><b>Declare Blockers</b>: the defending player can block attackers with their untapped creatures</li>
          <li><b>Damage</b>: blocked attackers <b>fight</b> their blockers, unblocked creatures damage the defending player</li>
          <li><b>End of combat</b> <span className="note">(chance to cast instants)</span></li>
        </ul>
        
        <figure className="block-explainer">
          <div className="block-diagram">
            <div className="card attacker">
              <Sword size={32} />
            </div>
            <div className="card blocker">
              <Shield size={32} />
            </div>
          </div>
          <figcaption>You can show that a creature is blocking by putting it in front of the attacking creature.</figcaption>
        </figure>

        <p>When creatures fight, each deals damage equal to its <span className="inline-no-wrap"><Sword className="inline-icon"/><b>Power</b></span> to the other's <span className="inline-no-wrap"><Shield className="inline-icon"/><b>Toughness</b></span>. Creatures that take more damage than their Toughness in a turn die - they go to the graveyard.</p>
        
        <p className="tip">A creature's <span className="inline-no-wrap"><Sword className="inline-icon"/>Power</span> and <span className="inline-no-wrap"><Shield className="inline-icon"/>Toughness</span> are in the box in bottom right. A 2/3 has 2 <span className="inline-no-wrap"><Sword className="inline-icon"/>Power</span> and 3 <span className="inline-no-wrap"><Shield className="inline-icon"/>Toughness</span>.</p>
        
        <p>Also, multiple creatures can block one attacker. When this happens, all the blockers fight the attacker:</p>

        <ul className="tutorial-list">
          <li>All the blocking creatures deal damage equal to their power to the attacker</li>
          <li>The attacker chooses in what order the blocking creatures take damage</li>
          <li>If a blocker dies, keep dealing damage to the rest</li>
          <li>Continue until the attacker has dealt its entire <span className="inline-no-wrap"><Sword className="inline-icon"/>Power</span> worth of damage</li>
        </ul>
        
        <p>Once damage has been dealt, you enter your second Main Phase for the turn. It's the same as the first - you can play your land for turn if you haven't already, or cast any spells you want after combat.</p>

        <h3>Ending Phase</h3>

        <p>After your second Main Phase is over, so is your turn! At the end of turn, damage wears off of your creatures and you discard to 7 cards in hand if you have more than that. Pass to your opponent and they start from the top.</p>

        <p>To recap, each turn:</p>

        <ul className="tutorial-list">
          <li><b>Untap</b> all your cards, <b>upkeep</b> <span className="note">(can cast instants)</span>, then <b>draw</b> a card <span className="note">(first player skips all this on the first turn)</span></li>
          <li><b>First main phase</b> - you can play one land a turn and cast creature, instant, and sorcery spells</li>
          <li><b>Combat</b> - attack with your attackers, then your opponent can block with their untapped creatures, then damage is dealt</li>
          <li><b>Second main phase</b> - play land if you haven't, cast spells</li>
          <li><b>End turn</b> - damage wears off, discard to 7</li>
        </ul>
        
        <h3>Finally - Instant Spells</h3>

        <p>You have probably noticed a bunch of places to cast instants. Actually, you can cast an instant spell <em>at any time</em> on either player's turn. Casting your instant spells at the right time is a big way to get an edge in a game.</p>
      
        <p>A great time to cast instants is during combat. Your opponent might have lined up the perfect blocks, but you can surprise them with an instant spell before damage! You can announce it after blocks are declared:</p>
      
        <figure className="card-figure">
          <img 
            className="card-image" 
            alt="Giant Growth" 
            src="https://cards.scryfall.io/normal/front/f/3/f349c459-6d80-4919-bb49-f1613f9b8d1f.jpg?1573513727" />
          <figcaption>"Before damage, I cast Giant Growth on my creature"</figcaption>
        </figure> 

        <p>Giant Growth can turn a tiny 1/1 into a powerful 4/4 and have it live through or deal crucial damage! Instants during combat can completely change the tide of battle.</p>

        <p>You can also cast instants <b>"in response"</b> to other spells. If you want to master all the rules of instants, check out the rules below. For your first games, don't sweat it too much.</p>
        
        <Link to="/instants">
          <button className="large-nav-button">Instants Rules<Lightning className="inline-icon" /></button>
        </Link>

        <p><b>That's it!</b> Get out there and game!</p>
  
        <Link to="/cheat-sheet">
          <button className="large-nav-button">Turn cheat sheet<Scroll className="inline-icon" /></button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
