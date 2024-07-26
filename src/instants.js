import { Link } from 'react-router-dom';
import AnimatedLayout from './animatedlayout.js';

export default function CheatSheetPage() {
  return (
    <AnimatedLayout>
    <section>
      <h2>Nerdy Instants Rules</h2>
      <p>So! You want to know everything about instants.

Instants can really be played any time. They can even be played <b>"in response"</b> to other instant cards.

Let's say your opponent says they want to Shock your Grizzly Bears. Before that Shock <b>"resolves"</b> (happens), you can say, <b>"in response"</b>, and cast Giant Growth on your Grizzly Bears. If your opponent does not have another response, then the two spells happen: yours first, then theirs. Your Grizzly Bears will be a 5/5 with 2 damage on it. 
      </p>

      <p>How did we know who's spell resolved first? We keep track of it using <b>the stack</b>. Things go in on top of the stack, and once both players are done adding to it, it resolves from the top down. In the example above, Shock went on the stack first, then Giant Growth, and the stack gets resolved from the top down: Giant Growth resolves, then Shock resolves.</p>

      <p>Some instant cards even <b>counter</b> other spells - countered spells have no effect and go straight to the graveyard.</p>

      <figure>
        <img src="https://api.scryfall.com/cards/named?exact=Cancel&amp;format=image&amp;version=normal" width="215" height="300" />
        <figcaption>Cancel can stop any nonland card your opponent plays.</figcaption>
      </figure>

      <p>When your opponent plays a card, it starts off <b>on the stack</b> so you have a chance to respond to it. If you have a Cancel in hand and the mana to cast it untapped, you can say <b>"In response"</b> and play your Cancel. We resolve the stack from top to bottom - Cancel says you counter the creature so it goes from the stack to the graveyard, then the stack is empty and you continue play.</p>
      
      <p>There is no limit to how big the stack can be. There are many epic moments of huge stacks of spells in the history of competitive <i>Magic</i> - even the most experienced players can have difficulty keeping track when it gets out of hand, so don't be worried if it's a lot to take in.</p>

      <p>Now, since you want all the information, the last thing to know is the times on your turn and your opponent's that you can cast instants. The main thing to note is whoever's turn it is gets the first chance to play things at each step of a turn. Here is the detailed list of a structure of a turn - you can cast an instant at any time, as long as you stop your opponent before they move to the next step.</p>
      
      <ul>
        <li>Upkeep step</li>
        <li>Draw phase</li>
        <li>First main phase</li>
        <li>Beginning of combat</li>
        <li>Declare attackers</li>
        <li>Declare blockers</li>
        <li>Damage step</li>
        <li>Second main phase</li>
        <li>End step</li>
      </ul>

      <p>For instance, if you would like to say, tap an opponent's untapped creature before it gets a chance to attack, and have an instant that can tap a creature, you have to stop your opponent before they reach the Declare Attackers Step and say you have something to cast.</p>

      <q>Hold on, before declare attackers, I have a card to cast.</q>

      <p>It's that easy! It's an overwhelming set of choices to make, but now you're armed with all the information you need to make some epic plays.</p>
    
      <Link to="/tutorial">
        <button className="large-nav-button">Back to full game tutorial</button>
      </Link>
      <Link to="/cheat-sheet">
        <button className="large-nav-button">Skip to turn cheat sheet</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
