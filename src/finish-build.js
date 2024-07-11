import RelativeNavHeader from './relative-nav.js';
import { Link } from 'react-router-dom';

export default function BuildPage() {
  return (
    <section>
      <RelativeNavHeader
        pageTitle="Finish your deck"
        previousLinkPath="/grid-setup"
        previousTitle="Back"
        nextLinkPath="/tutorial"
        nextTitle="Next"
      />

      <p>Almost time to play! To finish your deck, we need to pick your best cards add enough basic land cards so you can get the mana you need! You’re going to build a 40 card deck, and over many years of playing Magic players have figured out that a 40 card deck should have 17 lands to cast all its cards and not run out of steam.

Hopefully you were able to pick up cards of two colors. First step: take out all cards that aren’t those colors. Golden two-color cards that are both your colors can stay, same with lands that tap for both your colors.

</p>

      <p>Now we have all the information we need. We need to remove cards until there are 23 non-lands left, then we can add basic lands to finalize our deck.

Picking which cards to remove isn’t an exact science. For your first game, don’t sweat it too much.</p>

      <div className="tips-section">
        <button>Give me tips on what to remove</button>
        <p>Generally, creatures are better than instants and sorceries, and you want to have more cheap cards than expensive cards. You ideally would like a curve that has mostly cards that cost 2 and 3, with maybe a few big creatures. 

    (i) You can figure out how many total mana a card costs by adding the number of colored mana symbols to the number to their left. That number represents that you can spend mana of any color when paying for that part of the mana cost.</p>
      </div>

      <p>Once you have 23 cards chosen, add basic lands until you have a 40 card deck. If your deck has more of one color than the other, add more basic lands that add that color.

And with that, you are an officially licensed Magic deckbuilder! Give yourself a pat on the back, and get ready to game!

If you have an odd number of people, feel free to play a 3-player game or take turns, otherwise split into 2 person groups and get ready to play!</p>

      <Link to="/tutorial">
        <button className="large-nav-button">How to play</button>
      </Link>
    </section>
  );
}
