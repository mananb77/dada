import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function Divider() {
  return (
    <div className="divider">
      <span className="divider-symbol">&#9753;</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-title">
          In Loving Memory<span>श्रद्धांजलि</span>
        </div>
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#bio" onClick={closeMenu}>His Life</a></li>
          <li><a href="#family" onClick={closeMenu}>Family</a></li>
          <li><a href="#journey" onClick={closeMenu}>Journey</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Photos</a></li>
        </ul>
      </div>
    </nav>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function App() {
  const containerRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef}>
      <Nav />

      {/* ======== HERO ======== */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-prayer">ॐ शान्ति</p>

          <div className="hero-photo-container">
            {/* Add hero photo here */}
          </div>

          <h1 className="hero-name-hindi">दादा जी</h1>
          <p className="hero-name-english">Dada</p>
          <p className="hero-years">&nbsp;</p>
          <p className="hero-subtitle">
            {/* Add subtitle here */}
          </p>

          <div className="hero-links">
            <Link to="/lifestory" className="hero-link hero-link-primary">
              Read His Life Story
            </Link>
            <Link to="/memories" className="hero-link">
              Leave a Memory
            </Link>
            <Link to="/manan" className="hero-link">
              Manan&rsquo;s Memories
            </Link>
          </div>

          <div className="hero-scroll-hint">
            <span className="hero-scroll-chevron">&#8964;</span>
          </div>
        </div>
      </section>

      {/* ======== BIO ======== */}
      <section className="bio" id="bio">
        <div className="section-inner fade-in">
          <h2 className="section-title">His Life</h2>
          <p className="section-title-hindi">उनका जीवन</p>

          <p className="bio-text">
            {/* Add bio content here */}
          </p>
        </div>
      </section>

      <Divider />

      {/* ======== FAMILY ======== */}
      <section className="family-tree" id="family">
        <div className="section-inner fade-in">
          <h2 className="section-title">Family</h2>
          <p className="section-title-hindi">परिवार</p>

          {/* Add family tree content here */}
        </div>
      </section>

      <Divider />

      {/* ======== JOURNEY / TIMELINE ======== */}
      <section className="timeline" id="journey">
        <div className="section-inner fade-in">
          <h2 className="section-title">His Journey</h2>
          <p className="section-title-hindi">उनकी यात्रा</p>

          {/* Add timeline content here */}
        </div>
      </section>

      <Divider />

      {/* ======== GALLERY ======== */}
      <section className="gallery" id="gallery">
        <div className="section-inner fade-in">
          <h2 className="section-title">Photos</h2>
          <p className="section-title-hindi">तस्वीरें</p>

          <p className="gallery-note">Photos coming soon.</p>
        </div>
      </section>

      <Divider />

      {/* ======== CLOSING ======== */}
      <section className="closing">
        <div className="closing-inner fade-in">
          <p className="closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <p className="closing-shanti">Om Shanti Shanti Shanti</p>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-links">
            <Link to="/lifestory" className="footer-link">Life Story</Link>
            <Link to="/memories" className="footer-link">Memories</Link>
            <Link to="/manan" className="footer-link">Manan&rsquo;s Memories</Link>
          </div>
          <p className="footer-family">The Bhargava Family</p>
          <p className="footer-family-hindi">भार्गव परिवार</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
