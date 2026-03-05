import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './PersonalMemories.css';

function PersonalMemories() {
  const containerRef = useScrollReveal();

  return (
    <div className="pm" ref={containerRef}>
      {/* Nav */}
      <nav className="pm-nav">
        <Link to="/" className="pm-back">&larr;</Link>
        <span className="pm-nav-title">Manan&rsquo;s Memories with Dada</span>
      </nav>

      {/* Hero */}
      <header className="pm-hero">
        <h1 className="pm-heading fade-in">Manan&rsquo;s Memories with Dada</h1>
        <p className="pm-heading-hindi fade-in">दादा जी के साथ मनन की यादें</p>
        <p className="pm-intro fade-in">
          Personal memories and moments shared with Dada. Content to be added.
        </p>
      </header>

      {/* Closing */}
      <section className="pm-section pm-closing fade-in">
        <div className="pm-closing-om fade-in">
          <p>&#2384; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367;</p>
        </div>

        <Link to="/" className="pm-back-link fade-in">
          &larr; Back to Memorial
        </Link>
      </section>
    </div>
  );
}

export default PersonalMemories;
