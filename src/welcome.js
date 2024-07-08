import RelativeNavHeader from './relative-nav.js';

export default function WelcomePage() {
  return (
    <section>
      <RelativeNavHeader
        pageTitle="Welcome!"
        previousLinkPath="/"
        previousTitle="Back"
        nextLinkPath="/"
        nextTitle="Next"
      />
      
      <p><b>MAGIC: THE GATHERING</b> is an infinitely replayable, fantasical card game for 2 or more players. You’re about to play your very first game, but first let’s introduce the three types of cards you’ll see!</p>

      <img src="https://api.scryfall.com/cards/named?exact=Centaur+Courser&amp;format=image&amp;version=normal" width="215" height="300" />

      <p>Tap a card above to learn more about its type. Once you’re ready, we can talk about how you’ll build your first deck.</p>
    </section>
  );
}
