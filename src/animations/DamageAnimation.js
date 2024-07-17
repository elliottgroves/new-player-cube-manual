import './damageanimation.css';
import Damage from '../images/Damage.webp';

export default function OrderBlockersAnimation () {
  return (
    <figure className="damage-animation">
      <div className="explainer-container">
        <img src={Damage} alt="Damage explanation graphic" />
        <div className="damage-labels">
          <div className="sprite-damage">
            <span>-1</span>
          </div>
          <div className="duo-damage">
            <span className="number">-1</span><span className="graveyard">🪦</span>
          </div>
          <div className="bears-damage">
            <span className="duo">-1</span><span className="sprite">-1</span><span>🪦</span>
          </div>
        </div>
      </div>
      <figcaption>Brave-Kin Duo taking damage first.</figcaption>
    </figure>
  );
}
