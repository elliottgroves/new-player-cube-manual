import { Link } from 'react-router-dom';
import AnimatedLayout from './animatedlayout.js';
import RelativeNavHeader from './relative-nav.js';
import { ArrowBendRightDown, Info, DotOutline } from '@phosphor-icons/react';
import './cheat-sheet.css';

export default function CheatSheetPage() {
  return (
    <AnimatedLayout>
    <section className="cheat-sheet">
      <div className="color-key">
        <p>
          <div className="color sorceries"></div>
          <span>Can cast <b>creatures, sorceries, instants</b></span>
        </p>
        <p>
          <div className="color instants"></div>
          <span>Can <i>only</i> cast <b>instant</b> spells</span>
        </p>
        <p>
          <div className="color none"></div>
          <span>Can't cast spells</span>
        </p>
      </div>
      
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
        <h3>Combat Tips</h3>
        <ul>
          <li>
            <DotOutline size={24}/><span>Creatures can't tap the turn you play them, so they also can't attack.</span>
          </li>
          <li>
            <DotOutline size={24}/><span>You declare all your attackers at the same time. Tap a creature to attack with it.</span>
          </li>
          <li>
            <DotOutline size={24}/><span>The defending player can block your attackers with their untapped creatures.</span>
          </li>
          <li>
            <DotOutline size={24}/><span>Multiple creatures can block one attacker. The attacking player picks the order the blockers take damage.</span>
          </li>
          <li>
            <DotOutline size={24}/><span>A creature that takes more damage than its toughness in one turn dies and is put in the graveyard.</span>
          </li>
        </ul>
      </div>

      {/* combat animation here */}

      <Link to="/tutorial">
        <button className="large-nav-button">Full tutorial</button>
      </Link>
      <Link to="/instants">
        <button className="large-nav-button">Detailed instants rules</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
