import { Link } from 'react-router-dom';
import AnimatedLayout from './animatedlayout.js';
import RelativeNavHeader from './relative-nav.js';
import { Lightning } from '@phosphor-icons/react';
import CentaurCourser from './images/Centaur Courser.webp';

export default function InstantsPage() {
  return (
    <AnimatedLayout>
      <section>
        <RelativeNavHeader
          pageTitle="Instants"
          previousLinkPath="/grid-setup"
          previousTitle="Back"
          nextLinkPath="/tutorial"
          nextTitle="Next"
          iconFunction={() => <Lightning />}
          artCardScryfallId="b78e2bca-bc93-464a-8911-8361abff2ac6"
        />
        <p>Instant spells can really be cast any time. They can even be cast <b>"in response"</b> to other instant spells. Let's show an example with these spells.</p>
        
        <div className="instants-cards">
          <img src={CentaurCourser} />
          <img src={CentaurCourser} />
          <img src={CentaurCourser} />
        </div> 
  
        <p>Let's say your opponent plays Shock targeting your Grizzly Bears. Normally, Shock would deal 2 damage to Grizzly Bears and destroy it - but it hasn't happened quite yet. Before that Shock <b>"resolves"</b> (happens), you can say, <b>"in response"</b>, and cast Giant Growth on your Grizzly Bears. If your opponent does not have another response, then the two spells happen: yours first, then theirs. Giant Growth will make your Grizzly Bears a 5/5, then Shock will deal 2 damage to it. It lives!</p>
  
        <p>How did we know whose spell resolved first? We keep track of it using <b>the stack</b>. Cast spells go on the top of the stack, and once both players are done adding to it, it resolves from the top down. In the example above, Shock went on the stack first, then Giant Growth, so the stack gets resolved from the top down: Giant Growth resolves, then Shock resolves.</p>
  
        <p className="mb-1">Some instant spells even <b>counter</b> other spells - countered spells have no effect and go straight to the graveyard.</p>
  
        <figure className="instants-card">
          <img src="https://api.scryfall.com/cards/named?exact=Cancel&amp;format=image&amp;version=normal" width="215" height="300" />
          <figcaption>Cancel can stop any spell your opponent casts.</figcaption>
        </figure>
  
        <p>When your opponent casts a spell, it starts off <b>on the stack</b> so you get a chance to respond to it. If you have Cancel in hand and the lands to cast it untapped, you can say <b>"in response"</b> and cast your Cancel. If your opponent has no responses, the stack resolves from top to bottom - Cancel counters the creature spell so it goes from the stack to the graveyard, then the stack is empty and you continue play.</p>

        <p>The final relevant rule is <b>priority</b>. Whosever turn it is gets the first chance to act at each step. If you have an instant you would like to cast on your opponent's turn, you have to wait until they play a card first or until they say that they're moving to the next step.</p> 

        <p>For example, let's say you have an instant that can tap an opponent's creature, and you would like to tap that creature before it attacks during their turn. Once your opponent says they're going to combat, you get a window to stop them and cast your instant:</p>
  
        <q>Hold on, before declare attackers, I have a spell to cast.</q>
  
        <p>It's that easy! The possibilities are endless, and now you're armed with the knowledge to make some epic plays. Check out the turn cheat sheet for a reference of when you can cast instants.</p>
      
        <Link to="/tutorial">
          <button className="large-nav-button">Full game tutorial</button>
        </Link>
        <Link to="/cheat-sheet">
          <button className="large-nav-button">Turn cheat sheet</button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
