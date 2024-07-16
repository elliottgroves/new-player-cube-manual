import Forest from '../images/Forest.webp';
import Mountain from '../images/Mountain.webp';
import GreenMana from '../icons/g.svg';
import RedMana from '../icons/r.svg';
import TwoMana from '../icons/2.svg';
import './castspellanimation.css';

export default function CastSpellAnimation() {
  return (
    <div className="cast-spell-animation">
      <div className="mana-cost">
        <img className="mana one" src={TwoMana} />
        <img className="mana two" src={GreenMana} />
      </div>
      <div className="mana-pool">
        <img className="mana one" src={RedMana} />
        <img className="mana two" src={GreenMana} />
        <img className="mana three" src={GreenMana} />
      </div>
      <div className="lands">
        <img className="land one" src={Mountain} />
        <img className="land two" src={Forest} />
        <img className="land three" src={Forest} />
      </div>
    </div>
  );
}
