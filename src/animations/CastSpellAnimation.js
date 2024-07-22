import Forest from '../images/Forest.webp';
import Mountain from '../images/Mountain.webp';
import GreenMana from '../icons/g.svg';
import RedMana from '../icons/r.svg';
import TwoMana from '../icons/2.svg';
import { animate, inView, timeline } from 'motion';
import { useEffect } from 'react';
import './castspellanimation.css';

export default function CastSpellAnimation() {
  const isReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  
  useEffect(() => {
    if (!isReducedMotion) {
      inView('.cast-spell-animation', fullAnimation);

      function fullAnimation() {
        const castSpell = timeline([
          'first',
          ['.cast-spell-animation .mana-cost .mana.two', { filter: 'drop-shadow(0 0 10px green)' }, { delay: 0.01, duration: 0.1, at: 'first' }],
          ['.cast-spell-animation .land.three', { transform: 'rotate(90deg)' }, { at: 'first' }],
          ['.cast-spell-animation .mana-pool .mana.three', { opacity: 1, duration: 0.1 }, { at: 'first' }],
          'second',
          ['.cast-spell-animation .land.two', { transform: 'rotate(90deg)' }, { at: 'second' }],
          ['.cast-spell-animation .mana-pool .mana.two', { opacity: 1 }, { at: 'second' }],
          'third',
          ['.cast-spell-animation .mana-cost .mana.one', { filter: 'drop-shadow(0 0 10px green)' }, { delay: 0.01, duration: 0.1, at: 'third' }],
          ['.cast-spell-animation .land.one', { transform: 'rotate(90deg)' }, { at: 'third' }],
          ['.cast-spell-animation .mana-pool .mana.one', { opacity: 1 }, { at: 'third' }],
          { name: 'reset', at: 1.2 },
          ['.cast-spell-animation .mana-cost .mana', { filter: 'none' }, { at: 'reset' }],
          ['.cast-spell-animation .mana-pool .mana', { opacity: 0 }, { at: 'reset' }],
          ['.cast-spell-animation .lands .land', { transform: 'rotate(0)' }, { at: 'reset' }]
        ], {
          duration: 5,
          defaultOptions: { ease: 'ease-in-out' },
          repeat: Infinity
        });

        return (leaveInfo) => {
          castSpell.cancel();
        }
      }
    }
  }, []);

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
