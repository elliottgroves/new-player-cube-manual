import './tutorial-page.css';
import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import CollapsibleScroll from './CollapsibleScroll.js';
import { Link } from 'react-router-dom';
import { Crown, Lightning, Scroll } from '@phosphor-icons/react';

export default function TutorialPage() {
  return (
    <AnimatedLayout>
      <section>
        <PageHeaderCard
          pageTitle="How to play"
          iconFunction={() => <Crown />}
          artCardScryfallId="b88a762d-19ed-451d-a3a9-b3e7eea40f67"
        />
  
        <p>Let's start by deciding who's going first. Roll dice or whatever random method you like, and whoever wins gets to pick if they want to <b>play</b> first or <b>draw</b> first. The player who goes first skips their draw on their first turn, but gets the chance to play cards before their opponent.</p>
        <p>Once that's decided, shuffle up your deck face down, then draw 7 cards. You need a good mix of lands and spells to play - if you have 1 or less lands or 6 or more lands, you should take a mulligan.
        </p>
  
        <CollapsibleScroll style={{ background: 'red' }} title={'Tell me how to mulligan'}>
          <p>Shuffle your hand back into your deck and draw a new hand of 7 cards. If you keep that hand, put one card from your hand on the bottom of your deck.</p>
          <p>The offical rule if you need to mulligan multiple times is to put one additional card back each time (2 mulligans means put 2 on bottom, etc). For your first games if you need to mulligan more than once I would recommend putting only one card back after any mulligans so you can both play a more fun game, but it's up to you.</p>
        </CollapsibleScroll>

        <Link to="/instants">
          <button className="large-nav-button">Instants Rules<Lightning className="inline-icon" /></button>
        </Link>
  
        <Link to="/cheat-sheet">
          <button className="large-nav-button">Turn cheat sheet<Scroll className="inline-icon" /></button>
        </Link>
      </section>
    </AnimatedLayout>
  );
}
