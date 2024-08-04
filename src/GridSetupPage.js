import './grid-setup-page.css';
import AnimatedLayout from './AnimatedLayout.js';
import PageHeaderCard from './PageHeaderCard.js';
import CollapsibleScroll from './CollapsibleScroll.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GridNine, Trash, SealCheck, Info } from '@phosphor-icons/react';

export default function GridSetupPage() {
  function labelVariants(frameNumber) {
    let opacityFrames = [0, 1, 1];
    let yFrames = [10, 0, 0];
    

    for (let i = 0; i < frameNumber; i++) {
      opacityFrames.push(1);
      yFrames.push(0);
    }

    for (let j = opacityFrames.length; j < 7; j++) {
      opacityFrames.push(0);
      yFrames.push(10);
    }

    return {
      visible: {
        opacity: opacityFrames,
        y: yFrames,
        transition: {
          duration: 6,
          times: [0, 0.1, 0.5, 0.65, 0.8, 0.95, 1],
          repeat: Infinity,
          ease: 'easeOut',
        }
      }
    }
  }
  return (
    <AnimatedLayout>
      <section>
        <PageHeaderCard
          pageTitle="2 or 3 player setup"
          iconFunction={() => <GridNine />}
          artCardScryfallId="7cb7ec70-a5a4-4188-ba1a-e88b81bdbad0"
        />
        
        <p>With this number of players it’s easiest to draft from face-up community packs. Start by taking the big stack of cards and shuffling them all together. We'll be drafting <b>18</b> packs - either count out <b>162</b> total cards ahead of time or count up to 18 packs as you go, either works. And remember:</p>
  
        <p className="two-colors-reminder">
          <strong>Pick 2 colors and try to<br/>draft only those colors!</strong>
        </p>
        
        <figure className="grid-explainer">
          <motion.div whileInView="visible" className="grid-display">
            <motion.div variants={labelVariants(1)} className="grid-card">
              <span>2</span>
            </motion.div>
            <motion.div variants={labelVariants(2)} className="grid-card">
              <Trash/> 
            </motion.div>
            <motion.div variants={labelVariants(2)} className="grid-card">
              <Trash/> 
            </motion.div>
            <motion.div variants={labelVariants(0)} className="grid-card">
              <span>1</span>
            </motion.div>
            <motion.div variants={labelVariants(0)} className="grid-card">
              <span>1</span>
            </motion.div>
            <motion.div variants={labelVariants(0)} className="grid-card">
              <span>1</span>
            </motion.div>
            <motion.div variants={labelVariants(1)} className="grid-card">
              <span>2</span>
            </motion.div>
            <motion.div variants={labelVariants(2)} className="grid-card">
              <Trash/> 
            </motion.div>
            <motion.div variants={labelVariants(2)} className="grid-card">
              <Trash/> 
            </motion.div>
          </motion.div>
          <figcaption>
            <p className="mb-1">Decide who picks first. Then take 9 cards from the stack and lay them out face up in a 3 by 3 grid.</p>
            <p>The first player chooses a <b>row</b> or a <b>column</b> of 3 cards (no diagonals) and adds them to their pile.</p>
            <p>The next player then picks a row or column and adds them to their pile. There may be only two cards in their row or column.</p>
            <p>Discard the remaining cards then lay out 9 more. Alternate who picks first.</p>
          </figcaption>
        </figure>
  
        <CollapsibleScroll title={'3 player instructions'}>
          <p>For 3 players, follow the same steps above, except after the first pick, <i>replace the 3 missing cards</i> with new ones before the second player's pick.</p>
          <p>You're still drafting 18 packs, but you'll need 216 cards instead of 162 to draft this way.</p>
        </CollapsibleScroll>
      
        <p>Once you’ve gone through 18 packs, you’re ready to turn the cards in front of you into a deck! Let’s do it!</p>
  
        <Link to="/finish-build">
          <button className="large-nav-button">Finish your deck<SealCheck className="inline-icon" /></button>
        </Link>
  
        <p className="postscript"><Info className="inline-icon"/>Thank you to <a href="https://luckypaper.co/resources/formats/grid-draft/" target="_blank" rel="noreferrer">LuckyPaper</a> for their explainer article and Jason Waddell who designed this type of draft.</p>
      </section>
    </AnimatedLayout>
  );
}
