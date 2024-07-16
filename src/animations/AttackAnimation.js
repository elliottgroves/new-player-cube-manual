import GrizzlyBears from '../images/Grizzly Bears.webp';
import CentaurCourser from '../images/Centaur Courser.webp';
import Forest from '../images/Forest.webp';
import Mountain from '../images/Mountain.webp';
import './attackanimation.css';

export default function AttackAnimation() {
  return (
    <figure className="attack-animation">
      <div className="creatures">
        <img className="bear" src={GrizzlyBears} alt="Grizzly Bears" />
        <div className="centaur">
          <img src={CentaurCourser} alt="Centaur Courser, summoning sick" />
        </div>
      </div>
      <div className="lands">
        <img className="land one" src={Mountain} alt="Mountain"/>
        <img className="land two" src={Forest} alt="Forest"/>
        <img className="land three" src={Forest} alt="Forest"/>
      </div>
      <figcaption>Attacking with Grizzly Bears. Centaur Courser can't attack yet because it was played this turn.</figcaption>
    </figure>
  );
}
