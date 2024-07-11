import { Link } from 'react-router-dom';

export default function CheatSheetPage() {
  return (
    <section>
      <h2>Turn Cheat Sheet</h2>
      <Link to="/tutorial">
        <button className="large-nav-button">Full game tutorial</button>
      </Link>
    </section>
  );
}
