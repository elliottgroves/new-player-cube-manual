import './cheat-sheet-page.css';
import AnimatedLayout from './AnimatedLayout.js';
import { Link } from 'react-router-dom';
import { ArrowBendRightDown, Crown, Lightning } from '@phosphor-icons/react';
import t from './icons/t.svg';

export default function CheatSheetPage() {
  return (
    <AnimatedLayout>
      <figure className="cheat-sheet">
        <figcaption className="color-key">
          <p>
            <span className="color sorceries"/>
            <span>Can cast <b>creatures, sorceries, instants</b></span>
          </p>
          <p>
            <span className="color instants"/>
            <span>Can <i>only</i> cast <b>instant</b> spells</span>
          </p>
          <p>
            <span className="color none"/>
            <span>Can't cast spells</span>
          </p>
        </figcaption>
        
        <ul className="steps-and-phases">
          <li className="none">
            <b>Untap</b><span>Untap your lands and creatures</span>
          </li>
          <li className="instants">
            <b>Upkeep</b>
          </li>
          <li className="instants">
            <b>Draw</b><span>Draw one card for turn</span>
          </li>
          <li className="sorceries">
            <b>First Main Phase</b><span>Play land (one per turn)</span>
          </li>
          <li className="instants sublist">
            <div className="sublist-title">
              <h3>Beginning of Combat</h3><ArrowBendRightDown size={16} />
            </div>
            <ul>
              <li>Declare Attackers</li>
              <li>Declare Blockers</li>
              <li>Damage</li>
              <li>End of Combat</li>
            </ul>
          </li>
          <li className="sorceries">
            <b>Second Main Phase</b><span>Play land (if able)</span>
          </li>
          <li className="instants"><b>End Step</b></li>
          <li className="none">
            <b>Cleanup</b>
            <span>Discard to 7 cards, damage wears off</span>
          </li>
        </ul>
  
        <div className="combat-tips">
          <h3>Combat Reminders</h3>
          <ul>
            <li>Creatures played this turn have <i>summoning sickness</i> and can't attack or activate <img src={t} alt="Tap symbol" className="symbol"/> tap abilities until your next turn</li>
            <li>Declare all attacking creatures at the same time by tapping them</li>
            <li>The defending player can block attacking creatures with their untapped creatures</li>
            <li>Blocked attackers fight their blockers, unblocked creatures damage the defending player</li>
            <li>Fighting creatures deal damage to each other equal to their power</li>
            <li>A creature that takes more damage than its toughness in one turn dies and goes to the graveyard</li>
            <li>Multiple creatures can block one attacker - the attacking player picks the order the blockers take damage, then all the creatures fight</li>
          </ul>
        </div>
  
        <Link to="/tutorial">
          <button className="large-nav-button">Full tutorial<Crown className="inline-icon" /></button>
        </Link>
        <Link to="/instants">
          <button className="large-nav-button">Instants rules<Lightning className="inline-icon" /></button>
        </Link>
      </figure>
    </AnimatedLayout>
  );
}
