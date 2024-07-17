import './orderblockersanimation.css';
import BraveKinDuo from '../images/Brave-Kin Duo.webp';
import NightveilSprite from '../images/Nightveil Sprite.webp';
import GrizzlyBears from '../images/Grizzly Bears.webp';

export default function OrderBlockersAnimation () {
  return (
    <figure className="order-blockers-animation">
      <div className="opponent-creatures">
        <img className="duo" src={BraveKinDuo} alt="Brave-Kin Duo" />
        <img className="sprite" src={NightveilSprite} alt="Nightveil Sprite" />
      </div>
      <div className="your-creatures">
        <img className="bears" src={GrizzlyBears} alt="Grizzly Bears" />
      </div>
      <figcaption>Decide if Brave-Kin Duo or Nightveil Sprite should take damage first.</figcaption>
    </figure>
  );
}
