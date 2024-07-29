import RelativeNavHeader from './relative-nav.js';
import AnimatedLayout from './animatedlayout.js';
import { Link } from 'react-router-dom';
import Scroll from './Scroll.js';
import { GridNine, Info } from '@phosphor-icons/react';
import './grid-setup.css';

export default function GridSetupPage() {
  return (
    <AnimatedLayout>
    <section>
      <RelativeNavHeader
        pageTitle="2 or 3 player setup"
        previousLinkPath="/build"
        previousTitle="Back"
        nextLinkPath="/finish-build"
        nextTitle="Next"
        iconFunction={() => <GridNine />}
        artCardScryfallId="7cb7ec70-a5a4-4188-ba1a-e88b81bdbad0"
      />
      
      <p>With this number of players it’s easiest to draft from face-up community packs. Start by taking the big stack of cards and shuffling them all together. We'll be drafting <b>18</b> packs - either count out <b>162</b> total cards ahead of time or count up to 18 packs as you go, either works. And remember:</p>

      <p className="two-colors-reminder">
        <strong>Pick 2 colors and try to<br/>draft only those colors!</strong>
      </p>
      
      <div className="grid-explainer">
        <div className="grid-display">
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
          <div className="grid-card"/>
        </div>
        <article>
          <p className="mb-1">Decide who picks first. Then take 9 cards from the stack and lay them out face up in a 3 by 3 grid.</p>
          <p>The first player chooses a <b>row</b> or a <b>column</b> of 3 cards (no diagonals) and adds them to their pile.</p>
          <p>The next player then picks a row or column and adds them to their pile. There may be only two cards in their row or column.</p>
          <p>Discard the remaining cards then lay out 9 more. Alternate who picks first.</p>
        </article>
      </div>

      <Scroll title={'3 player instructions'}>
        <p>For 3 players, follow the same steps above, except after the first pick, <i>replace the 3 missing cards</i> with new ones before the second player's pick.</p>
        <p>You're still drafting 18 packs, but you'll need 216 cards instead of 162 to draft this way.</p>
      </Scroll>
    
      <p>Once you’ve gone through 18 packs, you’re ready to turn the cards in front of you into a deck! Let’s do it!</p>

      <Link to="/finish-build">
        <button className="large-nav-button">Finish your deck</button>
      </Link>

      <p className="postscript"><Info className="inline-icon"/>Thank you to <a href="https://luckypaper.co/resources/formats/grid-draft/" target="_blank" rel="noreferrer">LuckyPaper</a> for their explainer article and Jason Waddell who designed this type of draft!</p>
    </section>
    </AnimatedLayout>
  );
}
