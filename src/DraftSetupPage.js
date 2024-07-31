import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import { Link } from 'react-router-dom';
import { Stack, SealCheck } from '@phosphor-icons/react';

export default function DraftSetupPage() {
  return (
    <AnimatedLayout>
      <section>
        <PageHeaderCard
          pageTitle="4+ player setup"
          iconFunction={() => <Stack />}
          artCardScryfallId="880047fd-d258-40fb-bcd5-37cb26678dfe"
        />
        
        <p>With four or more players, you can draft decks by passing around packs of cards. Start by shuffling the big stack of cards. Then each player can make their face-down packs.</p>
        <p>For 4-7 players, 6 packs of 7 cards works out well. For 8 or more players, 3 packs of 15 cards each is the traditional number. (These are also just recommendations, feel free to experiment after playing some.)</p>
        
        <p>Get ready to draft, and remember:</p>
  
        <p className="two-colors-reminder">
          <strong>Pick 2 colors and try to<br/>draft only those colors!</strong>
        </p>
  
        <p>Take your first face-down pack and look at it without showing anyone. Choose a card from it and put it in front of you face down. Afterwards, pass your pack face-down to the left. Then pick up the pack the player to your right has passed you and repeat this process until there are no cards left in this round's packs.</p>
  
        <p>Continue the process with the next pack, switching which direction you pass with each new pack you open. (Pack one to the left, two to the right, etc.) Keep drafting until all the cards are chosen.
  
  Once you’re all done choosing cards you’re ready to turn the cards in front of you into a deck! Let’s do it!</p>
  
        <Link to="/finish-build">
          <button className="large-nav-button">Finish your deck<SealCheck className="inline-icon" /></button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
