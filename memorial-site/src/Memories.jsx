import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Memories.css';

function Memories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <nav className="mem-nav">
        <div className="mem-nav-inner">
          <Link to="/" className="mem-nav-back">&larr; Memorial</Link>
          <span className="mem-nav-title">यादें</span>
        </div>
      </nav>

      <section className="mem-hero">
        <h1 className="mem-hero-title">Leave a Memory</h1>
        <p className="mem-hero-hindi">एक याद छोड़ें</p>
        <p className="mem-hero-subtitle">
          Share what Dada meant to you &mdash; a happy memory, a lesson he taught you, or a few words of condolence.
        </p>
        <p className="mem-hero-subtitle-hindi">
          दादा जी आपके लिए क्या मायने रखते थे &mdash; कोई खुशी की याद, उनकी कोई सीख, या श्रद्धांजलि के कुछ शब्द।
        </p>
      </section>

      <section className="mem-content">
        <p className="mem-status">
          Memory sharing will be set up soon. Check back later.
        </p>
      </section>
    </div>
  );
}

export default Memories;
