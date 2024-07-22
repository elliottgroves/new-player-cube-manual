import { useState, useCallback } from 'react';
import { animate, spring } from 'motion';
import './scroll.css';

export default function Scroll({ title, children }) {
  const [scrollOpen, setScrollOpen] = useState(false);

  const toggleScrollOpen = useCallback(() => {
    setScrollOpen(!scrollOpen);
  });

  return (
    <div className={'scroll' + (scrollOpen ? ' open' : '')} onClick={toggleScrollOpen}>
      <h3 className="title">{ title }</h3>
      <div className="content">
        {children}
      </div>
    </div>
  );
}
