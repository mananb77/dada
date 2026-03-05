import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './LifeStory.css';

function LifeStory() {
  const containerRef = useScrollReveal();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="ls-progress" style={{ width: `${progress}%` }} />

      <nav className="ls-nav">
        <div className="ls-nav-inner">
          <Link to="/" className="ls-nav-back">&larr; Memorial</Link>
          <span className="ls-nav-title">जीवन कथा</span>
        </div>
      </nav>

      <section className="ls-hero">
        <p className="ls-hero-label">Life Story</p>
        <h1>Dada&rsquo;s Life Story</h1>
        <p className="ls-hero-hindi">दादा जी की जीवन कथा</p>
        <p className="ls-hero-meta">Content coming soon</p>
      </section>

      <div className="ls-content">
        <div className="ls-chapter fade-in">
          <p className="ls-para">
            This page will contain Dada&rsquo;s full life story. Content to be added.
          </p>
        </div>

        <div className="ls-closing fade-in">
          <p className="ls-closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <div className="ls-links">
            <Link to="/" className="ls-back-home">&larr; Back to Memorial</Link>
            <Link to="/manan" className="ls-back-home">Manan&rsquo;s Memories &rarr;</Link>
          </div>
        </div>
      </div>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div className="ls-footer-links">
            <Link to="/" className="ls-footer-link">Memorial</Link>
            <Link to="/memories" className="ls-footer-link">Memories</Link>
            <Link to="/manan" className="ls-footer-link">Manan&rsquo;s Memories</Link>
          </div>
          <p className="ls-footer-family">The Bhargava Family</p>
          <p className="ls-footer-family-hindi">भार्गव परिवार</p>
        </div>
      </footer>
    </div>
  );
}

export default LifeStory;
