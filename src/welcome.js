import './welcome.css';
import RelativeNavHeader from './relative-nav.js';
import Book from './book.js';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section>
      <RelativeNavHeader
        pageTitle="Welcome!"
        previousLinkPath="/"
        previousTitle="Back"
        nextLinkPath="/build"
        nextTitle="Next"
      />
      
      <p><b>MAGIC: THE GATHERING</b> is an infinitely replayable, fantasical card game for 2 or more players. You’re about to play your very first game, but first let’s introduce the types of cards you’ll see!</p>


      <Book />

      <p>Tap above to learn more about card types. Once you’re ready, we can talk about how you’ll build your first deck.</p>

      <Link to="/build">
        <button className="large-nav-button">Build my deck</button>
      </Link>
    </section>
  );
}

//      <div className="welcome-card-group">
//        <img className="card card-one" src="https://api.scryfall.com/cards/named?exact=Bayou&amp;format=image&amp;version=normal" width="215" height="300" />
//        <img className="card card-two" src="https://api.scryfall.com/cards/named?exact=Alpine+Watchdog&amp;format=image&amp;version=normal" width="215" height="300" />
//        <img className="card card-three" src="https://api.scryfall.com/cards/named?exact=Slick+Sequence&set_uri=m20&amp;format=image&amp;version=normal" width="215" height="300" />
//      </div>
//
