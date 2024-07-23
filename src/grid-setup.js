import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';

export default function GridSetupPage() {
  return (
    <AnimatedLayout>
    <section>
      <RelativeNavHeader
        pageTitle='2 or 3 player setup ("Grid Draft")'
        previousLinkPath="/build"
        previousTitle="Back"
        nextLinkPath="/finish-build"
        nextTitle="Next"
      />
      
      <p>With this number of players it’s easiest to draft from face-up community packs. Start by taking the big stack of cards and shuffling them all together so everyone’s packs will be nice and random.

Once the cards are shuffled, we need to make our packs - we’ll need 18 face-down packs of 9 cards each.

And remember the only guideline to follow:</p>

      <strong>Choose two colors and try to draft only cards of those two colors!</strong>
      
      <div className="button-group">
        <button className="active">2 players</button>
        <button>3 players</button>
      </div>

      <div className="two-player-setup">
        <h3>Two Players</h3>
        <p>Decide who will pick first. Then, take a pack of 9 cards and lay it out in a 3 by 3 grid in front of both players like so.</p>

        <p>The first player chooses a row or a column of 3 cards (no diagonals) and adds them to their pile.</p>

        <p>The next player then picks a row or column and adds them to their pile. There may be only two cards in their row or column.</p>

        <p>Discard the remaining cards from the pack then lay out the next pack. Alternate who picks first.</p>
      </div>
      <div className="three-player-setup">
        <p>For three players, pick who’ll draft first, then lay out a pack of 9 cards in a 3x3 grid. The first player takes either a row or column. Afterwards, replace those cards with 3 random cards from the big stack.</p>

        <p>After they pick, the second player picks a row or a column.</p>

        <p>Then the third player picks a row or a column. Their row or column may only have two cards. Diagonals aren’t allowed.</p>

        <p>Discard the remaining cards from the pack and lay out the next, rotating who picks first each pack.

Once you’ve gone through all 18 packs, you’re ready to turn the cards in front of you into a deck! Let’s do it!</p>
      </div>

      <Link to="/finish-build">
        <button className="large-nav-button">Finish your deck</button>
      </Link>

      <p>[Thank you to <a href="https://luckypaper.co/resources/formats/grid-draft/" target="_blank" rel="noreferrer">LuckyPaper</a> for their explainer article and Jason Waddell who designed this type of draft!]</p>
    </section>
    </AnimatedLayout>
  );
}
