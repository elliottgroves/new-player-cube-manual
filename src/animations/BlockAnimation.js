import './blockanimation.css';
import TolarianScholar from '../images/Tolarian Scholar.webp';
import BraveKinDuo from '../images/Brave-Kin Duo.webp';
import NightveilSprite from '../images/Nightveil Sprite.webp';
import GrizzlyBears from '../images/Grizzly Bears.webp';

export default function BlockAnimation () {
  return (
    <figure className="block-animation">
      <div className="opponent-creatures">
        <img className="duo" src={BraveKinDuo} alt="Brave-Kin Duo" />
        <img className="sprite" src={NightveilSprite} alt="Nightveil Sprite" />
        <img className="scholar" src={TolarianScholar} alt="Tolarian Scholar" />
      </div>
      <hr />
      <div className="your-creatures">
        <img className="bears" src={GrizzlyBears} alt="Grizzly Bears" />
      </div>
      <figcaption>Your opponent can block with either or both of their untapped creatures, but not their tapped creature.</figcaption>
    </figure>
  );
}
