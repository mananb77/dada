import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

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
          <li><a href="#wisdom" onClick={closeMenu}>Wisdom</a></li>
          <li><a href="#values" onClick={closeMenu}>Values</a></li>
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

function Diya() {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya-container">
      <button
        className={`diya ${lit ? 'diya-lit' : ''}`}
        onClick={() => !lit && setLit(true)}
        aria-label={lit ? 'Diya is lit' : 'Light a diya'}
      >
        <div className="diya-flame-wrap">
          {lit && (
            <>
              <div className="diya-glow" />
              <div className="diya-flame" />
              <div className="diya-flame-inner" />
            </>
          )}
          <div className="diya-wick" />
        </div>
        <svg className="diya-bowl" viewBox="0 0 70 35" fill="none">
          <path d="M5 8 Q5 0 18 0 L52 0 Q65 0 65 8 L60 30 Q58 35 35 35 Q12 35 10 30 Z" fill="#C4A35A" />
          <path d="M5 8 Q5 0 18 0 L52 0 Q65 0 65 8 L60 12 Q58 16 35 16 Q12 16 10 12 Z" fill="#D4B36A" />
        </svg>
      </button>
      <p className="diya-label">{lit ? 'Diya lit for Dada' : 'Light a diya for Dada'}</p>
      <p className="diya-label-hindi">{lit ? 'दादा के लिए दीया जलाया' : 'दादा के लिए दीया जलाएं'}</p>
    </div>
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
            <img src="/dada/photos/dada-hero.png" alt="Kailash Nath Bhargava" />
          </div>

          <h1 className="hero-name-hindi">कैलाश नाथ भार्गव</h1>
          <p className="hero-name-english">Kailash Nath Bhargava</p>
          <p className="hero-years">February 13, 1941 &ndash; March 4, 2026</p>
          <p className="hero-subtitle">
            A Life of Generosity, Hard Work, &amp; Discipline
          </p>
          <p className="hero-subtitle-hindi">उदारता, मेहनत और अनुशासन का जीवन</p>
          <div className="hero-quote">
            <p className="hero-quote-hindi">जीवन में दूसरों का भला चाहता है, उसका भला अपने आप भगवान करता है।</p>
            <p className="hero-quote-english">&ldquo;In life, whoever wishes well for others &mdash; God automatically does good for them.&rdquo;</p>
          </div>

          <div className="hero-links">
            <Link to="/lifestory" className="hero-link hero-link-primary">
              Read His Life Story
            </Link>
            <a href="https://youtu.be/r78Pt9suaz0" target="_blank" rel="noopener noreferrer" className="hero-link">
              Watch Life Story Video
            </a>
            <a href="https://photos.app.goo.gl/naoPTqv14p7ocMEZ7" target="_blank" rel="noopener noreferrer" className="hero-link">
              Best Photos
            </a>
            <Link to="/memories" className="hero-link">
              Leave a Memory
            </Link>
            <a href="https://api.whatsapp.com/send?text=In%20loving%20memory%20of%20Kailash%20Nath%20Bhargava%20%E2%80%94%20A%20Life%20of%20Generosity%2C%20Hard%20Work%2C%20%26%20Discipline%20%F0%9F%99%8F%20https%3A%2F%2Fmananb77.github.io%2Fdada%2F" target="_blank" rel="noopener noreferrer" className="hero-link">
              Share on WhatsApp
            </a>
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
            Born on February 13, 1941, in Beawar, Rajasthan, into a family whose legacy of generosity and service shaped everything that followed. A boy who milked buffaloes at dawn, walked fifteen kilometers daily to college, and built every opportunity through quiet relationships and unwavering character.
          </p>
          <p className="bio-text bio-text-hindi">
            13 फरवरी, 1941 को बेअवर, राजस्थान में जन्मे — एक ऐसे परिवार में जिसकी उदारता और सेवा की विरासत ने उनके पूरे जीवन को आकार दिया। एक लड़का जो सुबह भैंसों का दूध निकालता था, कॉलेज जाने के लिए रोज़ पंद्रह किलोमीटर पैदल चलता था, और शांत रिश्तों और अडिग चरित्र से हर अवसर बनाता गया।
          </p>

          <div className="bio-cards">
            <div className="bio-card">
              <span className="bio-card-label">Smart</span>
              <span className="bio-card-hindi">बुद्धिमान</span>
              <span className="bio-card-detail">Sharp mind, quick learner</span>
              <span className="bio-card-detail-hindi">तेज़ दिमाग, जल्दी सीखने वाले</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Kind</span>
              <span className="bio-card-hindi">दयालु</span>
              <span className="bio-card-detail">Compassion for all</span>
              <span className="bio-card-detail-hindi">सबके लिए करुणा</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Talented</span>
              <span className="bio-card-hindi">प्रतिभाशाली</span>
              <span className="bio-card-detail">Sportsman, leader, banker</span>
              <span className="bio-card-detail-hindi">खिलाड़ी, नेता, बैंकर</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Caring</span>
              <span className="bio-card-hindi">परवाह करने वाले</span>
              <span className="bio-card-detail">For the entire Bhargava sabha &amp; thousands more</span>
              <span className="bio-card-detail-hindi">पूरी भार्गव सभा और हज़ारों लोगों के लिए</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Determined</span>
              <span className="bio-card-hindi">दृढ़ निश्चयी</span>
              <span className="bio-card-detail">Work was his passion</span>
              <span className="bio-card-detail-hindi">काम उनका जुनून था</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Devoted</span>
              <span className="bio-card-hindi">समर्पित</span>
              <span className="bio-card-detail">To family, faith &amp; service</span>
              <span className="bio-card-detail-hindi">परिवार, श्रद्धा और सेवा के प्रति</span>
            </div>
          </div>

          <div className="bio-cta fade-in">
            <Link to="/lifestory" className="bio-cta-link">
              Read His Full Life Story
              <span className="bio-cta-hindi">संपूर्ण जीवन कथा पढ़ें</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======== FAMILY ======== */}
      <section className="family-tree" id="family">
        <div className="section-inner">
          <h2 className="section-title fade-in">Our Family</h2>
          <p className="section-title-hindi fade-in">हमारा परिवार</p>

          <div className="ft fade-in">
            {/* Generation 1: Parents */}
            <div className="ft-gen ft-gen-parents">
              <div className="ft-node">
                <span className="ft-name">Mahesh Prasad Bhargava</span>
                <span className="ft-name-hindi">महेश प्रसाद भार्गव</span>
                <span className="ft-role">Father · पिताजी</span>
              </div>
              <span className="ft-amp">&amp;</span>
              <div className="ft-node">
                <span className="ft-name">Shanti Bhargava</span>
                <span className="ft-name-hindi">शान्ति भार्गव</span>
                <span className="ft-role">Mother · माताजी</span>
              </div>
            </div>

            <div className="ft-connector" />

            {/* Siblings row */}
            <p className="ft-sibling-label">Their Children · उनकी संतान</p>
            <div className="ft-siblings">
              <div className="ft-sibling">
                <span className="ft-name">Prem Prakash</span>
                <span className="ft-name-hindi">प्रेम प्रकाश</span>
              </div>
              <div className="ft-sibling ft-sibling-self">
                <span className="ft-name">Kailash Nath</span>
                <span className="ft-name-hindi">कैलाश नाथ</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Shambu Nath</span>
                <span className="ft-name-hindi">शम्भू नाथ</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Naresh</span>
                <span className="ft-name-hindi">नरेश</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Usha</span>
                <span className="ft-name-hindi">उषा</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Pramod (Munna)</span>
                <span className="ft-name-hindi">प्रमोद (मुन्ना)</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Rajni</span>
                <span className="ft-name-hindi">रजनी</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Madhu</span>
                <span className="ft-name-hindi">मधु</span>
              </div>
              <div className="ft-sibling">
                <span className="ft-name">Sudha</span>
                <span className="ft-name-hindi">सुधा</span>
              </div>
            </div>

            <div className="ft-connector" />

            {/* Generation 2: Dada & Dadi */}
            <div className="ft-gen ft-gen-center">
              <div className="ft-node ft-node-highlight">
                <span className="ft-name">Kailash Nath Bhargava</span>
                <span className="ft-name-hindi">कैलाश नाथ भार्गव</span>
                <span className="ft-years">Dada</span>
              </div>
              <span className="ft-amp">&amp;</span>
              <div className="ft-node">
                <span className="ft-name">Kalpana Bhargava</span>
                <span className="ft-name-hindi">कल्पना भार्गव</span>
                <span className="ft-role">Wife · पत्नी</span>
              </div>
            </div>

            <div className="ft-connector" />

            {/* Generation 3 & 4: Sons, spouses, children */}
            <div className="ft-branches">
              {/* Branch 1: Harsh */}
              <div className="ft-branch">
                <div className="ft-couple">
                  <div className="ft-node">
                    <span className="ft-name">Harsh &ldquo;Tinu&rdquo;</span>
                    <span className="ft-name-hindi">हर्ष &ldquo;टीनू&rdquo;</span>
                  </div>
                  <span className="ft-amp">&amp;</span>
                  <div className="ft-node">
                    <span className="ft-name">Aparna</span>
                    <span className="ft-name-hindi">अपर्णा</span>
                  </div>
                </div>
                <div className="ft-connector ft-connector-sm" />
                <div className="ft-grandchildren">
                  <div className="ft-leaf">
                    <span className="ft-name">Naman</span>
                    <span className="ft-name-hindi">नमन</span>
                  </div>
                  <div className="ft-leaf">
                    <span className="ft-name">Manan</span>
                    <span className="ft-name-hindi">मनन</span>
                  </div>
                </div>
              </div>

              {/* Branch 2: Shailendra */}
              <div className="ft-branch">
                <div className="ft-couple">
                  <div className="ft-node">
                    <span className="ft-name">Shailendra &ldquo;Binu&rdquo;</span>
                    <span className="ft-name-hindi">शैलेन्द्र &ldquo;बीनू&rdquo;</span>
                  </div>
                  <span className="ft-amp">&amp;</span>
                  <div className="ft-node">
                    <span className="ft-name">Chavi</span>
                    <span className="ft-name-hindi">छवि</span>
                  </div>
                </div>
                <div className="ft-connector ft-connector-sm" />
                <div className="ft-grandchildren">
                  <div className="ft-leaf">
                    <span className="ft-name">Vedang</span>
                    <span className="ft-name-hindi">वेदांग</span>
                  </div>
                  <div className="ft-leaf">
                    <span className="ft-name">Anisha</span>
                    <span className="ft-name-hindi">अनीशा</span>
                  </div>
                </div>
              </div>

              {/* Branch 3: Bhaiyu */}
              <div className="ft-branch">
                <div className="ft-couple">
                  <div className="ft-node">
                    <span className="ft-name">Bhaiyu</span>
                    <span className="ft-name-hindi">भैयू</span>
                  </div>
                  <span className="ft-amp">&amp;</span>
                  <div className="ft-node">
                    <span className="ft-name">Yuthika</span>
                    <span className="ft-name-hindi">युथिका</span>
                  </div>
                </div>
                <div className="ft-connector ft-connector-sm" />
                <div className="ft-grandchildren">
                  <div className="ft-leaf">
                    <span className="ft-name">Somya</span>
                    <span className="ft-name-hindi">सौम्या</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== JOURNEY / TIMELINE ======== */}
      <section className="timeline" id="journey">
        <div className="section-inner fade-in">
          <h2 className="section-title">His Journey</h2>
          <p className="section-title-hindi">उनकी यात्रा</p>

          <div className="timeline-container">
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">1941</p>
              <p className="timeline-city">Beawar · बेअवर</p>
              <p className="timeline-desc">Born on February 13 in Diggi Mohalla, into the Bhargava family. Grew up in Bhargava Gali, surrounded by kinship and legacy.</p>
              <p className="timeline-desc-hindi">13 फरवरी को डिग्गी मोहल्ला में भार्गव परिवार में जन्म। भार्गव गली में बड़े हुए, रिश्तों और विरासत के बीच।</p>
            </div>
<div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">1951</p>
              <p className="timeline-city">The Bageecha · बगीचा</p>
              <p className="timeline-desc">Family moved to the twenty-eight bigha garden. Began raising cows, buffaloes, and thirteen goats. Built the body that would carry him through decades.</p>
              <p className="timeline-desc-hindi">परिवार अट्ठाईस बीघा के बगीचे में आया। गाय, भैंस और तेरह बकरियाँ पालने लगे। वो शरीर बना जो दशकों तक साथ रहा।</p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">1955</p>
              <p className="timeline-city">NCC &amp; School · एनसीसी और स्कूल</p>
              <p className="timeline-desc">Joined the NCC at fourteen, rising to Sergeant. Attended the Sanatan Dharm School his great-grandfather had built. Basketball became his great love.</p>
              <p className="timeline-desc-hindi">चौदह साल की उम्र में एनसीसी में शामिल हुए, सार्जेंट बने। परदादा द्वारा बनाए सनातन धर्म स्कूल में पढ़े। बास्केटबॉल उनका बड़ा प्यार बन गया।</p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">1959</p>
              <p className="timeline-city">Ajmer · अजमेर</p>
              <p className="timeline-desc">Arrived for B.Com Previous with thirty rupees a month. Taught his landlord&rsquo;s children in exchange for rent and meals.</p>
              <p className="timeline-desc-hindi">बी.कॉम प्रीवियस के लिए तीस रुपये महीने पर आए। मकान मालिक के बच्चों को पढ़ाकर किराया और खाना मिलता था।</p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">1961</p>
              <p className="timeline-city">Jaipur · जयपुर</p>
              <p className="timeline-desc">Walked fifteen kilometers daily to Commerce College. Rose to NCC Underofficer. Selected for military commission during the 1962 China war.</p>
              <p className="timeline-desc-hindi">कॉमर्स कॉलेज के लिए रोज़ पंद्रह किलोमीटर पैदल चलते थे। एनसीसी अंडरऑफिसर बने। 1962 के चीन युद्ध में सैन्य कमीशन के लिए चुने गए।</p>
            </div>
<div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">Decades</p>
              <p className="timeline-city">Banking Career · बैंकिंग करियर</p>
              <p className="timeline-desc">Served across Rajasthan &mdash; Jodhpur, Kota, Ajmer, Udaipur. Rose to Branch Manager. Built a family. Carried forward the values of seven generations.</p>
              <p className="timeline-desc-hindi">पूरे राजस्थान में सेवा दी — जोधपुर, कोटा, अजमेर, उदयपुर। ब्रांच मैनेजर बने। परिवार बसाया। सात पीढ़ियों के संस्कार आगे बढ़ाए।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== WISDOM / QUOTES ======== */}
      <section className="quotes" id="wisdom">
        <div className="section-inner fade-in">
          <h2 className="section-title">His Words</h2>
          <p className="section-title-hindi">उनकी बातें</p>

          <div className="quotes-grid">
            <div className="quote-card fade-in">
              <p className="quote-hindi">जीवन के अंदर दूसरों का भला चाहो, उसका भला अपने आप भगवान करता है।</p>
              <p className="quote-english">&ldquo;In life, wish well for others &mdash; God takes care of the rest Himself.&rdquo;</p>
              <p className="quote-context">His life&rsquo;s central philosophy · उनके जीवन का मूल दर्शन</p>
            </div>
<div className="quote-card fade-in">
              <p className="quote-hindi">भगवान अपने आप देगा। मेरे तो ये शिव जी की कृपा है।</p>
              <p className="quote-english">&ldquo;God will provide on His own. This is Shiva&rsquo;s grace upon me.&rdquo;</p>
              <p className="quote-context">On faith and self-reliance · श्रद्धा और आत्मनिर्भरता पर</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">जो लेने में ही बिलीव करते हैं उनका भगवान बहुत बुरा करता है।</p>
              <p className="quote-english">&ldquo;Those who only believe in taking &mdash; God does not spare them.&rdquo;</p>
              <p className="quote-context">On sacrifice and family · त्याग और परिवार पर</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">सात पीढ़ी की नॉलेज रहे &mdash; दादा के दादा के दादा &mdash; ये सब तुम्हारी नॉलेज में रहे।</p>
              <p className="quote-english">&ldquo;Let the knowledge of seven generations remain with you &mdash; all of them should live in your memory.&rdquo;</p>
              <p className="quote-context">His parting words to the family · परिवार के लिए उनके अंतिम शब्द</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">इतनी स्टोरी है कि 10 रोज तक अपन डिस्कस करें तो खत्म नहीं हुए।</p>
              <p className="quote-english">&ldquo;There are so many stories, we could talk for 10 days and still not finish.&rdquo;</p>
              <p className="quote-context">On his life&rsquo;s many chapters · उनके जीवन के अनेक अध्यायों पर</p>
            </div>
          </div>
        </div>
      </section>


      {/* ======== VALUES ======== */}
      <section className="values" id="values">
        <div className="section-inner fade-in">
          <h2 className="section-title">What He Lived By</h2>
          <p className="section-title-hindi">उनके जीवन मूल्य</p>

          <div className="bio-personality-cards">
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Generosity</span>
              <span className="bio-personality-hindi">उदारता</span>
              <p className="bio-personality-desc">
                His great-grandfather gave away a hundred bighas of land to people in need. His grandfather gave up his family to help a stranger marry. Kailash taught children for free and received kindness in return. Generosity was the family&rsquo;s inheritance.
              </p>
              <p className="bio-personality-desc-hindi">उदारता परिवार की विरासत थी — परदादा ने ज़रूरतमंदों को सौ बीघा ज़मीन दान की, दादा ने बच्चों को मुफ्त पढ़ाया।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Self-Reliance</span>
              <span className="bio-personality-hindi">आत्मनिर्भरता</span>
              <p className="bio-personality-desc">
                He walked fifteen kilometers daily rather than spend four annas on a bus. He cooked his own meals, managed his year on thirty rupees a month. He never waited for things to be given to him.
              </p>
              <p className="bio-personality-desc-hindi">बस के चार आने बचाने के लिए रोज़ पंद्रह किलोमीटर पैदल चलते थे। कभी किसी से कुछ माँगा नहीं।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Discipline</span>
              <span className="bio-personality-hindi">अनुशासन</span>
              <p className="bio-personality-desc">
                Up at four in the morning to milk the animals. NCC sergeant at fourteen. Underofficer by college. Basketball until the sweat could fill half a bucket. He committed fully to everything he did.
              </p>
              <p className="bio-personality-desc-hindi">सुबह चार बजे उठकर दूध निकालना, चौदह साल में एनसीसी सार्जेंट। हर काम पूरे मन से करते थे।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Faith</span>
              <span className="bio-personality-hindi">श्रद्धा</span>
              <p className="bio-personality-desc">
                &ldquo;God will provide on His own. This is Shiva&rsquo;s grace upon me.&rdquo; His quiet faith was not passive &mdash; it was built on a lifetime of doing the right thing and trusting the outcome.
              </p>
              <p className="bio-personality-desc-hindi">उनकी शांत श्रद्धा सही काम करने और परिणाम पर भरोसा रखने पर बनी थी।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Family Legacy</span>
              <span className="bio-personality-hindi">पारिवारिक विरासत</span>
              <p className="bio-personality-desc">
                &ldquo;Seven generations should remain in your knowledge.&rdquo; He believed that knowing where you come from is not vanity &mdash; it is instruction. Every ancestor&rsquo;s story carries a lesson.
              </p>
              <p className="bio-personality-desc-hindi">सात पीढ़ियों की जानकारी रखना — हर पूर्वज की कहानी में एक सबक है।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Service to Others</span>
              <span className="bio-personality-hindi">सेवा</span>
              <p className="bio-personality-desc">
                He found his brother a job without being asked. He taught children who needed help. He invested in others first, and the world &mdash; mysteriously, consistently &mdash; returned the favor.
              </p>
              <p className="bio-personality-desc-hindi">बिना माँगे भाई की नौकरी लगवाई, बच्चों को पढ़ाया। दूसरों में पहले निवेश करते थे।</p>
            </div>
          </div>
        </div>
      </section>


      {/* ======== GALLERY ======== */}
      <section className="gallery" id="gallery">
        <div className="section-inner fade-in">
          <h2 className="section-title">Photos</h2>
          <p className="section-title-hindi">तस्वीरें</p>

          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img src="/dada/photos/dada-portrait.jpg" alt="Dada portrait" />
            </div>
            <div className="gallery-item fade-in">
              <img src="/dada/photos/dada-garden.jpg" alt="Dada in the garden" />
            </div>
            <div className="gallery-item fade-in">
              <img src="/dada/photos/dada-dadi.jpg" alt="Dada and Dadi together" />
            </div>
          </div>

          <div className="gallery-album fade-in">
            <a href="https://photos.app.goo.gl/2MM5gnukU3JEBBr69" target="_blank" rel="noopener noreferrer" className="gallery-album-link">
              View Full Photo Album
              <span className="gallery-album-hindi">सभी तस्वीरें देखें</span>
            </a>
          </div>
        </div>
      </section>


      {/* ======== CLOSING ======== */}
      <section className="closing">
        <div className="closing-inner fade-in">
          <p className="closing-tribute">
            He didn&rsquo;t just live 84 years. He lived with generosity, built everything through hard work, raised his family with values, served thousands without expectation, and carried the legacy of seven generations forward. His light continues through all of us.
          </p>
          <p className="closing-tribute-hindi">
            उन्होंने सिर्फ़ 84 साल नहीं जिए। उन्होंने उदारता से जीवन जिया, मेहनत से सब कुछ बनाया, संस्कारों से परिवार पाला, बिना किसी अपेक्षा के हज़ारों की सेवा की, और सात पीढ़ियों की विरासत को आगे बढ़ाया। उनका प्रकाश हम सभी में जीवित है।
          </p>

          <p className="closing-diya-prompt">Press to light a diya in his memory</p>
          <p className="closing-diya-prompt-hindi">उनकी याद में दीया जलाने के लिए दबाएँ</p>

          <Diya />

          <p className="closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <p className="closing-shanti">Om Shanti Shanti Shanti</p>
          <p className="closing-years">1941 &mdash; 2026</p>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-links">
            <Link to="/lifestory" className="footer-link">Life Story</Link>
            <Link to="/memories" className="footer-link">Memories</Link>
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
