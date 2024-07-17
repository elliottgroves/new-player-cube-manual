import GrizzlyBears from '../images/Grizzly Bears.webp';
import CentaurCourser from '../images/Centaur Courser.webp';
import Forest from '../images/Forest.webp';
import Mountain from '../images/Mountain.webp';
import { animate, inView } from 'motion';
import { useEffect } from 'react';
import './attackanimation.css';


export default function AttackAnimation() {
  const isReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  
  useEffect(() => {
    if (!isReducedMotion) {
      inView('.attack-animation', fullAnimation);

      function fullAnimation() {
        const bear = animate('.bear', 
          { transform: [
            'translateY(0) rotate(0)', 
            'translateY(0) rotate(90deg)',
            'translateY(0) rotate(90deg)',
            'translateY(-75px) rotate(90deg)',
            'translateY(-75px) rotate(90deg)',
            'translateY(0) rotate(0)'
          ] },
          { offset: [0, 0.2, 0.25, 0.4, 0.7, 1], 
            easing: ['ease'],
            duration: 4, 
            repeat: Infinity }
        );

        return (leaveInfo) => bear.cancel();
      }
    }
  }, []);

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
