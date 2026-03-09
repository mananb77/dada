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
          <li><a href="#voices" onClick={closeMenu}>Voices</a></li>
          <li><Link to="/memories" style={{ color: 'var(--gold)' }} onClick={closeMenu}>Memories</Link></li>
          <li><Link to="/lifestory" style={{ color: 'var(--gold)' }} onClick={closeMenu}>His Story</Link></li>
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
          <p className="hero-prayer">ॐ शान्ति शान्ति शान्ति</p>

          <div className="hero-photo-container">
            <img src="/dada/photos/dada-hero.jpg" alt="Kailash Nath Bhargava" />
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
            <a href="https://docs.google.com/presentation/d/1LEMkIERNfFJ5H0DFkRDD8EUPIDhNzp15z-kVHpMO4TA/edit" target="_blank" rel="noopener noreferrer" className="hero-link">
              Life Story Slides
            </a>
            <a href="https://photos.app.goo.gl/naoPTqv14p7ocMEZ7" target="_blank" rel="noopener noreferrer" className="hero-link">
              Best Photos
            </a>
            <a href="https://api.whatsapp.com/send?text=In%20loving%20memory%20of%20Kailash%20Nath%20Bhargava%20%E2%80%94%20A%20Life%20of%20Generosity%2C%20Hard%20Work%2C%20%26%20Discipline%20%F0%9F%99%8F%20https%3A%2F%2Fmananb77.github.io%2Fdada%2F" target="_blank" rel="noopener noreferrer" className="hero-link">
              Share on WhatsApp
            </a>
          </div>
          <div className="hero-memory-row">
            <Link to="/memories" className="hero-link hero-link-memory">
              Leave a Memory
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
            Born on February 13, 1941, in Beawar, Rajasthan &mdash; in Diggi Mohalla, surrounded by Bhargava families whose legacy of generosity and service shaped everything that followed. A boy who sold candles, milked buffaloes at dawn, taught his landlord&rsquo;s children in exchange for rent, and walked fifteen kilometers daily to college rather than spend four annas on a bus. He worked his way into banking, where colleagues said: &ldquo;When Bhargava Sahib was transferred in, the branch came back to life.&rdquo; After decades of turning loss-making branches profitable across Rajasthan, he did what most only talk about &mdash; started his own business in retirement, taught himself astrology and homeopathy, and made business calls the very morning he left this world.
          </p>
          <p className="bio-text bio-text-hindi">
            13 फरवरी, 1941 को बेअवर, राजस्थान में डिग्गी मोहल्ला में जन्मे — भार्गव परिवारों के बीच, जिनकी उदारता और सेवा की विरासत ने उनके पूरे जीवन को आकार दिया। एक लड़का जो मोमबत्तियाँ बेचता था, सुबह भैंसों का दूध निकालता था, किराये के बदले बच्चों को पढ़ाता था, और बस के चार आने बचाने के लिए रोज़ पंद्रह किलोमीटर पैदल चलता था। बैंकिंग में घाटे वाली शाखाओं को लाभदायक बनाने के लिए प्रसिद्ध हुए। रिटायरमेंट में अपना व्यापार शुरू किया, ज्योतिष और होम्योपैथी सीखी — और अंतिम दिन की सुबह भी व्यापार की कॉल की।
          </p>

          <div className="bio-cards">
            <div className="bio-card">
              <span className="bio-card-label">Sharp Mind</span>
              <span className="bio-card-hindi">तेज़ दिमाग</span>
              <span className="bio-card-detail">Remembered 101 family names, taught himself astrology &amp; homeopathy</span>
              <span className="bio-card-detail-hindi">101 परिवारिक नाम याद, खुद ज्योतिष और होम्योपैथी सीखी</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Kind to All</span>
              <span className="bio-card-hindi">सबके लिए दयालु</span>
              <span className="bio-card-detail">Gardener or general manager &mdash; everyone got the same respect</span>
              <span className="bio-card-detail-hindi">माली हो या जनरल मैनेजर — सबको एक जैसा सम्मान</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Athlete</span>
              <span className="bio-card-hindi">खिलाड़ी</span>
              <span className="bio-card-detail">Basketball, NCC sergeant at 14, stamina that outlasted men half his age</span>
              <span className="bio-card-detail-hindi">बास्केटबॉल, 14 में एनसीसी सार्जेंट, आधी उम्र के लोगों से ज़्यादा ऊर्जा</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Connector</span>
              <span className="bio-card-hindi">जोड़ने वाले</span>
              <span className="bio-card-detail">Built a network spanning continents &mdash; Bhargavas in every city connected through him</span>
              <span className="bio-card-detail-hindi">महाद्वीपों में फैला नेटवर्क बनाया — हर शहर में भार्गव उनसे जुड़े</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Unstoppable</span>
              <span className="bio-card-hindi">अथक</span>
              <span className="bio-card-detail">Signed cheques in the ICU, made business calls the morning he passed</span>
              <span className="bio-card-detail-hindi">ICU में चेक साइन किए, अंतिम दिन सुबह भी व्यापार की कॉल की</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Devoted</span>
              <span className="bio-card-hindi">समर्पित</span>
              <span className="bio-card-detail">To Mami, his children, his faith &mdash; followed her 26 days later</span>
              <span className="bio-card-detail-hindi">मामी, बच्चों, श्रद्धा के प्रति — उनके 26 दिन बाद चल बसे</span>
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
              <p className="timeline-desc">Served in Jaipur Bank and later Union Bank across Rajasthan &mdash; Jodhpur, Kota, Ajmer, Udaipur. Famous for being posted to loss-making branches and turning them profitable. Colleagues said: when Bhargava Sahib was transferred in, the branch came back to life. Rose to Branch Manager. Built a family. Carried forward the values of seven generations.</p>
              <p className="timeline-desc-hindi">जयपुर बैंक और बाद में यूनियन बैंक में पूरे राजस्थान में सेवा दी। घाटे वाली शाखाओं को लाभदायक बनाने के लिए प्रसिद्ध थे। ब्रांच मैनेजर बने। परिवार बसाया। सात पीढ़ियों के संस्कार आगे बढ़ाए।</p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">Retirement</p>
              <p className="timeline-city">The Second Innings · दूसरी पारी</p>
              <p className="timeline-desc">While peers dreamed of business after retirement, Dada actually launched one. Explored astrology, homeopathy, real estate, and multiple ventures &mdash; not out of financial need, but out of a deep-rooted drive to keep contributing. He was the only one among all the people the family knew who actually started something after retirement.</p>
              <p className="timeline-desc-hindi">जबकि साथियों ने रिटायरमेंट के बाद व्यापार का सपना देखा, दादा ने वास्तव में शुरू किया। ज्योतिष, होम्योपैथी, रियल एस्टेट — योगदान करने की गहरी ललक से।</p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-years">2017</p>
              <p className="timeline-city">Recovery &amp; Resolve</p>
              <p className="timeline-desc">Underwent TAVR heart surgery. While still in the ICU, he asked for his chequebook and began signing cheques for pending commitments. Dr. Rao photographed the moment in disbelief &mdash; a patient who refused to stop working even from a hospital bed.</p>
              <p className="timeline-desc-hindi">TAVR हृदय शल्य चिकित्सा हुई। ICU में रहते हुए भी उन्होंने चेकबुक मँगवाई और लंबित कामों के लिए चेक साइन किए। डॉ. राव ने अचंभित होकर उस पल की तस्वीर ली।</p>
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
            <div className="quote-card fade-in">
              <p className="quote-hindi">खुश होकेय रहना है यहाँ। खुश होकेय जाना।</p>
              <p className="quote-english">&ldquo;Be happy while you&rsquo;re here. Leave happy.&rdquo;</p>
              <p className="quote-context">His words 48 hours before passing · जाने से 48 घंटे पहले के शब्द</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">अपनी फैमिली को साथ लेके चलो। अपनी कम्युनिटी को साथ लेके चलो।</p>
              <p className="quote-english">&ldquo;Walk together with your family. Walk together with your community.&rdquo;</p>
              <p className="quote-context">His consistent message · उनका निरंतर संदेश</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">एक लीटर दूध पी लिया करो, सत्तू खाओ, बादाम खाओ।</p>
              <p className="quote-english">&ldquo;Drink a litre of milk daily, eat sattoo, eat almonds &mdash; and build your stamina young. You&rsquo;ll need it for a long innings.&rdquo;</p>
              <p className="quote-context">On health &amp; longevity · स्वास्थ्य और दीर्घायु पर</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">अगर भार्गव है, तो अपना ही है। जाओ और मिल लो।</p>
              <p className="quote-english">&ldquo;If they&rsquo;re a Bhargava, they&rsquo;re our own. Go and meet them.&rdquo;</p>
              <p className="quote-context">On community · समुदाय पर</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">तुझे रोक के ही छोड़ूंगा।</p>
              <p className="quote-english">&ldquo;I will send you only after I&rsquo;ve made you stay longer.&rdquo;</p>
              <p className="quote-context">To his son, hours before passing · अपने बेटे से, जाने से कुछ घंटे पहले</p>
            </div>
            <div className="quote-card fade-in">
              <p className="quote-hindi">मामी का काम सब अच्छे से हो गया? कोई कमी तो नहीं रही?</p>
              <p className="quote-english">&ldquo;Has everything been done properly for Mami? Nothing left incomplete?&rdquo;</p>
              <p className="quote-context">48 hours before passing &mdash; still thinking of others · जाने से 48 घंटे पहले — अभी भी दूसरों की चिंता</p>
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
                His great-grandfather gave away a hundred bighas of land to people in need. His grandfather gave up his family to help a stranger marry. Kailash taught children for free and received kindness in return. He quietly paid the medical bills for his household staff and once stopped on a highway to rescue a stranger&rsquo;s family. Generosity was the family&rsquo;s inheritance.
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
                Up at four in the morning to milk the animals. NCC sergeant at fourteen. Underofficer by college. Basketball until the sweat could fill half a bucket. He outworked men in their thirties well into his seventies. He committed fully to everything he did.
              </p>
              <p className="bio-personality-desc-hindi">सुबह चार बजे उठकर दूध निकालना, चौदह साल में एनसीसी सार्जेंट। हर काम पूरे मन से करते थे।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Faith</span>
              <span className="bio-personality-hindi">श्रद्धा</span>
              <p className="bio-personality-desc">
                &ldquo;God will provide on His own. This is Shiva&rsquo;s grace upon me.&rdquo; His quiet faith was not passive &mdash; it was built on a lifetime of doing the right thing and trusting the outcome. Mami was his spiritual armor &mdash; her devotion anchored the family&rsquo;s faith.
              </p>
              <p className="bio-personality-desc-hindi">उनकी शांत श्रद्धा सही काम करने और परिणाम पर भरोसा रखने पर बनी थी।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Family Legacy</span>
              <span className="bio-personality-hindi">पारिवारिक विरासत</span>
              <p className="bio-personality-desc">
                &ldquo;Seven generations should remain in your knowledge.&rdquo; He believed that knowing where you come from is not vanity &mdash; it is instruction. Every ancestor&rsquo;s story carries a lesson. He could name all 101 members of the extended family from memory.
              </p>
              <p className="bio-personality-desc-hindi">सात पीढ़ियों की जानकारी रखना — हर पूर्वज की कहानी में एक सबक है।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Service to Others</span>
              <span className="bio-personality-hindi">सेवा</span>
              <p className="bio-personality-desc">
                He found his brother a job without being asked. He taught children who needed help. He invested in others first, and the world &mdash; mysteriously, consistently &mdash; returned the favor. The network he built spanned continents &mdash; his relationships are an inheritance the family still draws from.
              </p>
              <p className="bio-personality-desc-hindi">बिना माँगे भाई की नौकरी लगवाई, बच्चों को पढ़ाया। दूसरों में पहले निवेश करते थे।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Undivided Presence</span>
              <span className="bio-personality-hindi">पूर्ण ध्यान</span>
              <p className="bio-personality-desc">
                When he spoke with you, nothing else existed. Whether on a brief call or a thirty-minute conversation, he was fully present. He never seemed distracted, never made you feel like an interruption. Even in hospital post-surgery, the first thing he asked visitors was about their trip, not his own pain.
              </p>
              <p className="bio-personality-desc-hindi">जब वो आपसे बात करते थे, तो बस आप ही थे। कभी विचलित नहीं हुए, कभी किसी को बोझ नहीं लगने दिया।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">The Communicator</span>
              <span className="bio-personality-hindi">संवाद कला</span>
              <p className="bio-personality-desc">
                A master of warmth and persuasion. He could charm anyone with sweet, thoughtful words &mdash; &ldquo;meeta bolta tha&rdquo; was the universal observation. He made people feel important the moment they spoke with him. He could convince his family to stay four more years in the country, or convince a nurse to return his phone.
              </p>
              <p className="bio-personality-desc-hindi">मीठा बोलते थे — यह सबका अनुभव था। किसी को भी अपनी बात मनवा लेते थे, प्यार से।</p>
            </div>
            <div className="bio-personality-card fade-in">
              <span className="bio-personality-label">Physical Stamina</span>
              <span className="bio-personality-hindi">शारीरिक ऊर्जा</span>
              <p className="bio-personality-desc">
                He treated the body as the foundation for everything else. Morning walks, a litre of milk daily, sattoo, almonds &mdash; non-negotiable. Well into his seventies, he could outwork people in their thirties. He drove cars at high speed into old age. His mental clarity at eighty was proof that a cared-for body sustains the mind.
              </p>
              <p className="bio-personality-desc-hindi">शरीर को सब कुछ की नींव मानते थे। सुबह की सैर, एक लीटर दूध, सत्तू, बादाम — अस्सी की उम्र में भी दिमाग तेज़ था।</p>
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


      {/* ======== FAMILY VOICES ======== */}
      <section className="voices" id="voices">
        <div className="section-inner fade-in">
          <h2 className="section-title">Family Voices</h2>
          <p className="section-title-hindi">परिवार की आवाज़ें</p>

          <div className="voices-grid">
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;Whenever you spoke to him, his entire concentration was just on you. Nothing in that moment mattered but you.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;जब भी आप उनसे बात करते थे, उनका पूरा ध्यान सिर्फ़ आप पर होता था। उस पल में आपके सिवा कुछ नहीं मायने रखता था।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He respected every human being. A gardener, a doctor, a ward boy &mdash; they all got the same quality of attention.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;वो हर इंसान का सम्मान करते थे। माली हो, डॉक्टर हो, वार्ड बॉय हो — सबको एक जैसा ध्यान मिलता था।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He was mentally 40 or 50 years old. His body was just an instrument he had largely disconnected from.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;मानसिक रूप से वो 40-50 साल के थे। शरीर तो बस एक साधन था जिससे उन्होंने काफ़ी हद तक नाता तोड़ लिया था।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;Hi my lovely grandson&rdquo; &mdash; every single call started that way. Every single time.</p>
              <p className="voice-quote-hindi">&ldquo;Hi my lovely grandson&rdquo; — हर कॉल ऐसे ही शुरू होती थी। हर बार।</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;If there is to be a father, let him be like this...&rdquo;</p>
              <p className="voice-quote-hindi">पिता हो तो ऐसा हो...</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;The network he built &mdash; we are still reaping from it. He invested in relationships. We get the dividends without having done the work. That&rsquo;s the real inheritance.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;जो नेटवर्क उन्होंने बनाया — हम आज भी उसका फल खा रहे हैं। उन्होंने रिश्तों में निवेश किया। हमें बिना मेहनत किए लाभांश मिलता है। यही असली विरासत है।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He was a great salesman. He sold me the idea of morning walks. I didn&rsquo;t even realise it was happening.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;वो बहुत अच्छे सेल्समैन थे। उन्होंने मुझे सुबह की सैर का आइडिया बेच दिया। मुझे पता भी नहीं चला कब।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He would wake up early just to see her off, cut her favourite fruits, always answered when she called.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;वो सुबह जल्दी उठकर उसे विदा करते थे, उसके पसंदीदा फल काटकर रखते थे, और जब भी वो बुलाती — हमेशा जवाब देते थे।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;I don&rsquo;t know where the fuel was coming from. Subah se raat tak &mdash; he could do different things without stopping.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;पता नहीं ऊर्जा कहाँ से आती थी। सुबह से रात तक — बिना रुके अलग-अलग काम करते रहते थे।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He was tired, he had just had surgery &mdash; but the first thing he asked me was &lsquo;beta, tera trip kaisa ja raha hai?&rsquo;&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;वो थके हुए थे, अभी सर्जरी हुई थी — लेकिन सबसे पहले पूछा &lsquo;बेटा, तेरा ट्रिप कैसा जा रहा है?&rsquo;&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;He has set a standard for us. Itna toh kiya hi ja sakta hai. We have seen it. When we fall short, we can always think: he did this. So can we.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;उन्होंने हमारे लिए एक मानक स्थापित किया है। इतना तो किया ही जा सकता है। हमने देखा है। जब हम कमज़ोर पड़ें, तो सोच सकते हैं: उन्होंने किया। हम भी कर सकते हैं।&rdquo;</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;It was a bond of seven lifetimes. When one left, the other followed.&rdquo;</p>
              <p className="voice-quote-hindi">सात जनम का बंधन था। एक गए, दूसरे भी गए।</p>
            </div>
            <div className="voice-card fade-in">
              <p className="voice-quote">&ldquo;We take it for granted &mdash; &lsquo;of course I can call so-and-so.&rsquo; But not every family has this. Dada created it. We must now weave our own section of that fabric.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;हम इसे मान लेते हैं — &lsquo;हाँ, फ़लाने को फ़ोन कर लेंगे।&rsquo; लेकिन हर परिवार में यह नहीं होता। दादा ने यह बनाया। अब हमें इस ताने-बाने का अपना हिस्सा बुनना है।&rdquo;</p>
            </div>
            <div className="voice-card voice-card-collective fade-in">
              <p className="voice-quote">&ldquo;He is not gone. What we are doing right now &mdash; meeting together, sharing memories &mdash; that is a continuation of his existence.&rdquo;</p>
              <p className="voice-quote-hindi">&ldquo;वो गए नहीं हैं। हम अभी जो कर रहे हैं — साथ मिलना, यादें बाँटना — यही उनके अस्तित्व की निरंतरता है।&rdquo;</p>
            </div>
          </div>

          <div className="voices-cta fade-in">
            <Link to="/stories" className="voices-cta-link">
              Read Family Stories
              <span className="voices-cta-hindi">परिवार की कहानियाँ पढ़ें</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======== IMPORTANT DATES ======== */}
      <section className="dates" id="dates">
        <div className="section-inner fade-in">
          <h2 className="section-title">Important Dates</h2>
          <p className="section-title-hindi">महत्वपूर्ण तिथियाँ</p>

          <div className="dates-grid">
            <div className="date-card fade-in">
              <p className="date-label">Passing</p>
              <p className="date-label-hindi">निधन</p>
              <p className="date-value">March 4, 2026</p>
            </div>
            <div className="date-card fade-in">
              <p className="date-label">Chautha (4th Day)</p>
              <p className="date-label-hindi">चौथा</p>
              <p className="date-value">March 7, 2026</p>
            </div>
            <div className="date-card fade-in">
              <p className="date-label">Daswan (10th Day)</p>
              <p className="date-label-hindi">दसवाँ</p>
              <p className="date-value">March 13, 2026</p>
            </div>
            <div className="date-card fade-in">
              <p className="date-label">Tehrvi (13th Day)</p>
              <p className="date-label-hindi">तेरहवीं</p>
              <p className="date-value">March 16, 2026</p>
            </div>
            <div className="date-card fade-in">
              <p className="date-label">Monthly Shraddh</p>
              <p className="date-label-hindi">मासिक श्राद्ध</p>
              <p className="date-value">4th of each month</p>
            </div>
            <div className="date-card fade-in">
              <p className="date-label">Barsi (1st Anniversary)</p>
              <p className="date-label-hindi">बरसी</p>
              <p className="date-value">March 4, 2027</p>
            </div>
          </div>

          <p className="dates-note fade-in">Dates calculated from the date of passing: March 4, 2026</p>
        </div>
      </section>

      {/* ======== CLOSING ======== */}
      <section className="closing">
        <div className="closing-inner fade-in">
          <p className="closing-tribute">
            He didn&rsquo;t just live 85 years. He lived with generosity, built everything through hard work, raised his family with values, served thousands without expectation, and carried the legacy of seven generations forward. His light continues through all of us.
          </p>
          <p className="closing-tribute-hindi">
            उन्होंने सिर्फ़ 85 साल नहीं जिए। उन्होंने उदारता से जीवन जिया, मेहनत से सब कुछ बनाया, संस्कारों से परिवार पाला, बिना किसी अपेक्षा के हज़ारों की सेवा की, और सात पीढ़ियों की विरासत को आगे बढ़ाया। उनका प्रकाश हम सभी में जीवित है।
          </p>

          <p className="closing-diya-prompt">Press to light a diya in his memory</p>
          <p className="closing-diya-prompt-hindi">उनकी याद में दीया जलाने के लिए दबाएँ</p>

          <Diya />

          <p className="closing-together">दोनों साथ हैं। जहाँ भी हैं।</p>
          <p className="closing-together-english">They are together. Wherever they are.</p>

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
            <Link to="/stories" className="footer-link">Family Stories</Link>
            <Link to="/memories" className="footer-link">Share a Memory</Link>
          </div>
          <a href="https://api.whatsapp.com/send?text=In%20loving%20memory%20of%20Kailash%20Nath%20Bhargava%20%E2%80%94%20A%20Life%20of%20Generosity%2C%20Hard%20Work%2C%20%26%20Discipline%20%F0%9F%99%8F%20https%3A%2F%2Fmananb77.github.io%2Fdada%2F" target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
            Share on WhatsApp
          </a>
          <p className="footer-family">The Bhargava Family</p>
          <p className="footer-family-hindi">भार्गव परिवार</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
