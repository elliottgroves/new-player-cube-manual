import Forest from '../images/Forest.webp';
import Mountain from '../images/Mountain.webp';
import GreenMana from '../icons/g.svg';
import RedMana from '../icons/r.svg';
import TwoMana from '../icons/2.svg';
import './castspellanimation.css';

export default function CastSpellAnimation() {
  return (
    <figure className="cast-spell-animation">
      <div className="mana-cost">
        <img className="mana one" src={TwoMana} alt="{2}"/>
        <img className="mana two" src={GreenMana} alt="{G}"/>
      </div>
      <div className="mana-pool">
        <img className="mana one" src={RedMana} alt="{R}"/>
        <img className="mana two" src={GreenMana} alt="{G}"/>
        <img className="mana three" src={GreenMana} alt="{G}"/>
      </div>
      <div className="lands">
        <img className="land one" src={Mountain} alt="Mountain"/>
        <img className="land two" src={Forest} alt="Forest"/>
        <img className="land three" src={Forest} alt="Forest"/>
      </div>
    </figure>
  );
}
