import { Link } from 'react-router-dom';
import AnimatedLayout from './animatedlayout.js';

export default function CheatSheetPage() {
  return (
    <AnimatedLayout>
    <section>
      <h2>Turn Cheat Sheet</h2>
      <Link to="/tutorial">
        <button className="large-nav-button">Full game tutorial</button>
      </Link>
    </section>
    </AnimatedLayout>
  );
}
