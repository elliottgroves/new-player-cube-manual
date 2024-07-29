import { useState, useCallback } from 'react';
import { animate, spring } from 'motion';
import './collapsible-scroll.css';

export default function CollapsibleScroll({ title, children }) {
  const [scrollOpen, setScrollOpen] = useState(false);

  const toggleScrollOpen = useCallback(() => {
    setScrollOpen(!scrollOpen);
  });

  return (
    <div className={'collapsible-scroll' + (scrollOpen ? ' open' : '')} onClick={toggleScrollOpen}>
      <h3 className="title">{ title }</h3>
      <div className="content" onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
}
