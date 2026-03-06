import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './LifeStory.css';

function LifeStory() {
  const containerRef = useScrollReveal();
  const [progress, setProgress] = useState(0);
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(scrolled);
      setNavLinksVisible(window.scrollY > 300);
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
        <div className={`ls-nav-links ${navLinksVisible ? 'ls-nav-links-visible' : ''}`}>
          <a href="#prologue">Prologue</a>
          <a href="#ch1">Beawar</a>
          <a href="#ch3">1947</a>
          <a href="#ch4">Garden</a>
          <a href="#ch6">NCC</a>
          <a href="#ch7">Sports</a>
          <a href="#ch9">Jaipur</a>
          <a href="#ch12">Banking</a>
          <a href="#ch13">Philosophy</a>
        </div>
      </nav>

      <section className="ls-hero">
        <p className="ls-hero-label">Life Story</p>
        <h1>A Life Well Lived</h1>
        <p className="ls-hero-hindi">कैलाश नाथ भार्गव की जीवन कथा</p>
        <p className="ls-hero-meta">A narrative compiled from a call with grandkids, January 2023</p>
      </section>

      <div className="ls-content">

        {/* ============ PROLOGUE ============ */}
        <div className="ls-chapter fade-in" id="prologue">
          <p className="ls-chapter-number">Prologue</p>
          <h2>The Man Who Never Had to Run</h2>

          <p className="ls-para">
            There is a particular kind of man who does not chase the world. He does not send applications into the void or lobby for positions or scramble after opportunity. Instead, he lives well &mdash; with discipline, with generosity, with a quiet and unshakeable faith &mdash; and somehow, mysteriously, the world arranges itself around him. Doors open that he never knocked on. Jobs appear the morning after exams. Bank positions are offered over morning walks.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">मैंने कोई चला के apply नहीं किया। Automatic मतलब सारी चीज़ें आई हैं।</p>
            <p className="ls-pullquote-english">&ldquo;I never ran around applying. Everything came on its own.&rdquo;</p>
          </div>

          <p className="ls-para">
            This is the story of how that happened &mdash; and why.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 1 ============ */}
        <div className="ls-chapter fade-in" id="ch1">
          <p className="ls-chapter-number">Chapter One</p>
          <h2>Diggi Mohalla</h2>

          <p className="ls-para">
            On the thirteenth of February, 1941, in the ancient walled city of Beawar, a boy was born into the Bhargav family. Beawar sat in the heart of Rajasthan, 180 kilometers from Jaipur, a city of merchants, masons, and old families who had lived in the same lanes for generations. The boy&rsquo;s family lived in a neighborhood called Diggi Mohalla, on a lane so thoroughly populated by Bhargavs that the locals simply called it <em>Bhargav Gali</em> &mdash; Bhargav Street.
          </p>

          <p className="ls-para">
            The house was a traditional haveli. Entering through the main lane, visitors would pass the ground floor, where a tenant named Devilal lived. The family occupied the upper floor, where rooms were arranged in an L-shape around a central space. At the deepest corner sat a small <em>kothri</em> &mdash; a compact inner chamber &mdash; and it was in this room that Kailash Nath Bhargav first drew breath.
          </p>

          <p className="ls-para">
            His father, Mahesh Prasad Bhargav, was a man of education and standing. The neighborhood was not merely a place of residence; it was a living network of kinship and obligation, of shared celebrations and shared sorrows. The boy who would be called Kailash grew up surrounded by all of this. His younger brother Shambhu arrived about two and a half years later, and together they formed the core of a childhood that would expand into a sprawling family of nine siblings.
          </p>

          <h3 className="ls-chapter-sub fade-in">The Earliest Memory</h3>

          <p className="ls-para">
            He was four years old, and his brother Shambhu was not yet three. In one of the upper-floor rooms there was a <em>chabutra</em> &mdash; a raised platform, about two and a half feet high &mdash; positioned beneath a window that overlooked the chowk outside. Shambhu could climb it easily. Kailash, a full year older, could not. He would try &mdash; stepping up, stretching, scrambling &mdash; and the platform would defeat him each time.
          </p>

          <p className="ls-para">
            It is a modest memory. There is no drama in it. And yet it has stayed with him for more than eight decades, clear as the day it happened. Perhaps what makes it worth keeping is precisely its smallness: a boy and his younger brother, a window and a platform, the ordinary competition of childhood, and an autumn afternoon in Beawar when the world was still very new.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 2 ============ */}
        <div className="ls-chapter fade-in" id="ch2">
          <p className="ls-chapter-number">Chapter Two</p>
          <h2>The Weight of a Name</h2>

          <p className="ls-para">
            To understand Kailash Nath Bhargav, one must first understand the towering figure of his great-grandfather: Dewan Bahadur Pyarilal Ji Bhargav.
          </p>

          <p className="ls-para">
            In the days of British India, when Ajmer-Merwara functioned as a Central Government district administered directly from Delhi, Pyarilal Ji rose to become the Excise and Income Tax Commissioner. The British recognized his abilities with the title <em>Dewan Bahadur</em>, an honorific reserved for those who had rendered exceptional service to the Crown.
          </p>

          <p className="ls-para">
            But it is not for his government work that history remembers him. It is for what he built. He gave the city a school &mdash; the Sanatan Dharm School, where generations of Beawar&rsquo;s children would receive their education, including Kailash himself. He gave the city a college. He had the entire building constructed at his own expense. And then he donated one hundred bighas of land to the institution.
          </p>

          <p className="ls-para">
            For himself, he kept twenty-eight bighas. A garden. A <em>bageecha</em>. A place of green and shade on the edge of a Rajasthani city where summer heat could be merciless.
          </p>

          <p className="ls-para">
            This was the inheritance Kailash Nath Bhargav was born into &mdash; not of money, for the money had largely been given away, but of reputation, of expectation, of a family name that carried genuine weight.
          </p>

          <h3 className="ls-chapter-sub fade-in">The Family Tree</h3>

          <p className="ls-para">
            Kailash&rsquo;s grandfather Sitaram Ji had come to Beawar from Jodhpur. His story speaks to the family&rsquo;s recurring willingness to sacrifice personal advantage for others. Sitaram Ji agreed to be formally adopted into another family &mdash; to become a bride&rsquo;s brother so that a marriage could proceed. He gave up his place in a family of five brothers and became the sole heir of three households. The college, the school, the gardens &mdash; all of this eventually flowed through him to the generations that followed.
          </p>

          <p className="ls-para">
            Sitaram Ji died young, at forty-five, when his son Mahesh Prasad was only twelve. The family relocated from Jodhpur to Beawar, and Mahesh Prasad grew up in the shadow of his grandfather&rsquo;s legacy.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 3 ============ */}
        <div className="ls-chapter fade-in" id="ch3">
          <p className="ls-chapter-number">Chapter Three</p>
          <h2>The Summer of 1947</h2>

          <p className="ls-para">
            The summer of 1947 was not like other summers. Even a child of six could feel it &mdash; the air had changed, thickened with something the adults couldn&rsquo;t quite name out loud. August 15th came, and India was free.
          </p>

          <p className="ls-para">
            For Kailash, the date arrived wrapped in both joy and terror. The transfer of populations between India and Pakistan was unfolding with violence no one had fully anticipated. Trains rolled in both directions across the border, and sometimes the trains that arrived from Pakistan were carrying the dead.
          </p>

          <p className="ls-para">
            In Beawar, the family waited for news of Om Bhai Sahab &mdash; a young kinsman traveling from Ajmer when the chaos overtook him. The only way to get news was through the lawyer across the lane, who had a telephone.
          </p>

          <h3 className="ls-chapter-sub fade-in">Mor Singh and the Salt of Dewan Bahadur</h3>

          <p className="ls-para">
            Near a village called Kharwa, a dacoit named Mor Singh stopped a train. Every passenger was brought onto the platform. Hindus on one side, Muslims on the other. Om Bhai Sahab stood without his sacred thread. When Mor Singh&rsquo;s voice rang out &mdash; <em>&ldquo;Are you Hindu?&rdquo;</em> &mdash; he answered without hesitation.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-english">&ldquo;Go. I have eaten the salt of Dewan Bahadur Sahab. You may pass freely. I will send one of my men to escort you all the way to Beawar.&rdquo;</p>
          </div>

          <p className="ls-para">
            A dacoit&rsquo;s code of loyalty &mdash; the old compact of salt, of <em>namak</em>, of the debt owed to those whose bread you had eaten &mdash; saved a man&rsquo;s life on the day India was born. Kailash Nath Bhargav was six years old when he witnessed this. He would never forget it.
          </p>

          <p className="ls-para">
            He carries these memories not as wounds but as lessons. He saw what happened when communities turned on each other. He saw what happened when one man&rsquo;s loyalty to a generous ancestor saved another man&rsquo;s life. Generosity generates protection. Hatred generates more hatred.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 4 ============ */}
        <div className="ls-chapter fade-in" id="ch4">
          <p className="ls-chapter-number">Chapter Four</p>
          <h2>The Garden and the Steel Body</h2>

          <p className="ls-para">
            Around 1951, when Kailash was approximately ten, the family moved from the city house to the family garden &mdash; the <em>bageecha</em> that Dewan Bahadur had kept. Twenty-eight bighas of green, with a mali, with servants, with trees and space and the luxury of room to move.
          </p>

          <p className="ls-para">
            He was ten years old when he decided to start raising animals. First: two cows. Then two buffaloes. Then thirteen goats. Every morning, before the sun had properly risen, Kailash would be up &mdash; four o&rsquo;clock, sometimes five. He would spread the fodder, fill the water troughs, and begin milking.
          </p>

          <p className="ls-para">
            The milk produced about eight kilos a day, churned into butter. Kailash would consume a <em>katora</em> of fresh butter in a sitting &mdash; approximately two hundred grams. Then three kilos of milk. Then another <em>katora</em> of fresh ghee with a little sugar. At eighteen, he won a bet by drinking five liters of milk in a single sitting.
          </p>

          <p className="ls-para">
            The body built by this regimen was extraordinary. Broad, strong, radiantly healthy, with a complexion that made people stop and look twice. When he was taken as a child to visit relatives in Ajmer, neighbors would come to see him &mdash; calling out <em>&ldquo;Kahan hai Babbu?&rdquo;</em> &mdash; pressing their hands to his cheeks, unable to resist.
          </p>

          <h3 className="ls-chapter-sub fade-in">The Red Tomatoes</h3>

          <p className="ls-para">
            In the cold months, the fields near the bageecha produced tomatoes &mdash; deep red, fully ripe, heavy with juice. Kailash and Shambhu would rise early, run directly into the field in their undershirts, and eat tomatoes straight from the vine &mdash; one after another, a kilo, sometimes two, sometimes more. There were moolis and gajar too &mdash; radishes and carrots, pulled from the earth and eaten in the early morning. These were the breakfasts that built the body Kailash would carry through eight decades of living.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 5 ============ */}
        <div className="ls-chapter fade-in" id="ch5">
          <p className="ls-chapter-number">Chapter Five</p>
          <h2>School and the Games of Bhargav Gali</h2>

          <p className="ls-para">
            The school his great-grandfather had built was the school Kailash attended. Every morning, he would run to school &mdash; not walk, <em>run</em>. The route took him through familiar streets. The school sat in Shahpura Mohalla, and the teaching was serious.
          </p>

          <p className="ls-para">
            Half-time &mdash; the thirty-minute break &mdash; was an occasion for organized joy. Five, six, seven boys in the school courtyard: <em>satoiiya</em>, <em>langdi tang</em>, <em>kho-kho</em>. They shouted and sweated and crashed into each other and conducted themselves as boys have always conducted themselves when briefly freed from the requirement to sit still.
          </p>

          <p className="ls-para">
            His father had been clear: nothing bought on the street. The family brought their food from home, packed in a <em>katordaan</em>. He did not feel deprived. The roti from home was good. The company was better.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 6 ============ */}
        <div className="ls-chapter fade-in" id="ch6">
          <p className="ls-chapter-number">Chapter Six</p>
          <h2>The NCC Years</h2>

          <p className="ls-para">
            When Kailash reached the eighth standard, approximately fourteen years old, he joined the National Cadet Corps. He took to it immediately. By his later years in the junior division, he held the rank of sergeant &mdash; calling out parade commands, leading formations of classmates across the school grounds.
          </p>

          <p className="ls-para">
            In college, he joined the senior division and remained for five years. He was promoted to Underofficer &mdash; the highest non-commissioned rank, equivalent to Subedar in the regular army.
          </p>

          <p className="ls-para">
            When the 1962 war with China created an urgent need for NCC instructors, Kailash was selected for a commission &mdash; not merely as a cadet, but as a commissioned officer. Other paths opened before the commission could be finalized, but the selection itself is part of the record of who he was at twenty-one.
          </p>

          <p className="ls-para">
            The NCC also gave him tea. At home, tea was carefully rationed &mdash; perhaps half a small cup. But at NCC training, they served tea in full mugs, deep brown and strong. His tiredness would lift. The world would sharpen. This discovery would become critically useful during examinations, when he would skip dinner entirely, drinking tea and pushing through.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 7 ============ */}
        <div className="ls-chapter fade-in" id="ch7">
          <p className="ls-chapter-number">Chapter Seven</p>
          <h2>The Art of the Game</h2>

          <p className="ls-para">
            By college, he had played cricket, hockey, kabaddi, kho-kho, run races, thrown javelins, and competed in cycle races. He was a versatile and natural sportsman. But his great love was basketball.
          </p>

          <p className="ls-para">
            Basketball, as Kailash describes it, is a game that <em>takes</em> something from you. After thirty minutes on the court, the sweat would pour off him completely. His banyaan could be twisted and wrung like a wet cloth &mdash; a full wringing could produce half a bucket of water.
          </p>

          <p className="ls-para">
            Total physical commitment required total physical recovery. Kailash slept with a depth that made waking him an engineering challenge. His father&rsquo;s sequence: call, shake, louder call, louder shake, and then a full bucket of cold water poured directly onto the sleeping boy. Sometimes two buckets. Sometimes the second bucket was still not enough.
          </p>

          <p className="ls-para">
            College life had a recurring structure: Kailash would resolve to focus on studies, and then someone would discover he was an exceptional sportsman. Teams needed him for tournaments in Jodhpur, Ajmer, Bikaner, Jaipur. Off he would go, representing his college, while the books waited patiently at home.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 8 ============ */}
        <div className="ls-chapter fade-in" id="ch8">
          <p className="ls-chapter-number">Chapter Eight</p>
          <h2>A Family of Nine</h2>

          <p className="ls-para">
            Nine siblings. Their parents. Their grandmother. All of them occupying the same space in Beawar &mdash; reduced by a dispute with their uncle, who exercised his claims to the family property with a selfishness the wider family found difficult to forgive.
          </p>

          <p className="ls-para">
            The result: Kailash, his eight siblings, his parents, and his grandmother occupied two rooms in a three-room house, with the third room locked against them. Nine children sleeping in rows, like berths in a railway carriage, a system worked out of pure necessity.
          </p>

          <h3 className="ls-chapter-sub fade-in">The Cottage Industry</h3>

          <p className="ls-para">
            Mahesh Prasad understood that a single income required supplementation. So the family started making things. Candles first &mdash; in hundred-kilo batches. Two hundred candles in a day, sometimes more. Then bindis. Then nail polish. A small inventory of beauty products, manufactured in a garden house in Beawar, the profits flowing back to feed and clothe a family of eleven.
          </p>

          <p className="ls-para">
            It was not glamorous work. It was honest work. And Kailash learned from it that production, however small-scale, is dignified. That making a thing is better than waiting for a thing to be given to you.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 9 ============ */}
        <div className="ls-chapter fade-in" id="ch9">
          <p className="ls-chapter-number">Chapter Nine</p>
          <h2>The Road to Jaipur</h2>

          <h3 className="ls-chapter-sub fade-in">Ajmer First</h3>

          <p className="ls-para">
            For his B.Com Previous studies, Kailash came to Ajmer. His room cost eighteen rupees a month. His budget was thirty rupees a month &mdash; the proceeds from three months of vacation work as a stenographer at Edwards Mill.
          </p>

          <p className="ls-para">
            He began teaching the landlord&rsquo;s children downstairs &mdash; not for payment, simply because they needed help and he was there. The children&rsquo;s grades improved. One afternoon the women of the house took away his cooking supplies and told him: <em>&ldquo;We will send your food up from now on.&rdquo;</em>
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-english">He did not have to ask for this. He did not expect it. It came, as so many things in his life would come, because he had given something first.</p>
          </div>

          <p className="ls-para">
            Rent: the family stopped charging him. Food: it arrived from below. On thirty rupees a month, he was managing his year with resources to spare.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 10 ============ */}
        <div className="ls-chapter fade-in" id="ch10">
          <p className="ls-chapter-number">Chapter Ten</p>
          <h2>Fifteen Kilometers a Day</h2>

          <p className="ls-para">
            For his B.Com Final, Kailash came to Jaipur. The Commerce College was seven kilometers away. He did not have a bicycle. He did not have money for bus fare. The bus cost four annas one way. Every paisa counted. He would walk.
          </p>

          <p className="ls-para">
            Seven kilometers in the morning. Seven kilometers in the afternoon. One more kilometer around campus. Fifteen kilometers daily, in the heat of Jaipur summers and the chill of its winters.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">भाई, exercise हो जाती है मेरी।</p>
            <p className="ls-pullquote-english">&ldquo;Brother, I get my exercise this way.&rdquo;</p>
          </div>

          <p className="ls-para">
            It was true enough. It was also not the whole truth. The whole truth was that he was managing an entire year on resources that a middle-class family today might spend on a single dinner.
          </p>

          <p className="ls-para">
            He was twenty years old, building a body and a character simultaneously, neither one aware of what it was becoming.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 11 ============ */}
        <div className="ls-chapter fade-in" id="ch11">
          <p className="ls-chapter-number">Chapter Eleven</p>
          <h2>The Brother&rsquo;s Debt</h2>

          <p className="ls-para">
            Kailash&rsquo;s elder brother Prem Bhai Sahab had come to Jaipur in 1956. One of the interviewers at Maharaja School was a man who had studied with their father in Jodhpur. When Prem identified himself as Mahesh Prasad&rsquo;s son, the interviewer&rsquo;s face changed entirely.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-english">&ldquo;Oh! He is my friend! You are his son? Come tomorrow. The job is yours.&rdquo;</p>
          </div>

          <p className="ls-para">
            A father&rsquo;s friendship, maintained through the years, converting directly into a son&rsquo;s employment. Prem Bhai Sahab worked at Maharaja School for five years, cultivating relationships, giving his skills for free &mdash; typing letters, preparing notes. He was not calculating. He was simply generous.
          </p>

          <p className="ls-para">
            When Kailash later noticed a job posting for a Stenographer Instructor at Commerce College, he went directly to the principal: <em>&ldquo;Sir, my elder brother &mdash; why don&rsquo;t you hire him?&rdquo;</em> The appointment letter was typed on the spot.
          </p>

          <p className="ls-para">
            For Kailash, this was confirmation of a deep principle: the way to secure your own future is not to pursue it directly, but to invest in others first.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 12 ============ */}
        <div className="ls-chapter fade-in" id="ch12">
          <p className="ls-chapter-number">Chapter Twelve</p>
          <h2>The Road to Banking</h2>

          <p className="ls-para">
            In the building where Kailash lived, there was an elder named Shyamlal Ji Bhargav &mdash; retired as General Manager of Jaipur Bank, eleven sons, and every morning he and Kailash would walk together through the early hours of Jaipur.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-english">&ldquo;Kailash, join a bank. Any bank. A bank clerk&rsquo;s position is better than almost anything else you can do.&rdquo;</p>
          </div>

          <p className="ls-para">
            One morning, Shyamlal Ji became specific: <em>&ldquo;Union Bank has an interview tomorrow. You should go. I&rsquo;ve already spoken to them.&rdquo;</em>
          </p>

          <p className="ls-para">
            What followed was a sequence of relationships activating simultaneously. Kailash&rsquo;s maternal uncle&rsquo;s Ramlila companion happened to be the assistant to the interviewer. Two men in dhotis walked through the early morning streets and arrived at the home of Ambe Prasad Ji, who said: <em>&ldquo;Don&rsquo;t worry. The appointment will happen.&rdquo;</em>
          </p>

          <p className="ls-para">
            The process was a formality. The decision had been made by the network of relationships that surrounded him. He was offered the position and accepted it.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">मैं तो देखो, pick करके लिया है service के अंदर। हमेशा मैंने कोई चला के apply नहीं किया। Automatic मतलब सारी चीज़ें आई हैं।</p>
            <p className="ls-pullquote-english">&ldquo;Look &mdash; I was picked and brought into service. I never ran around applying. Everything came on its own.&rdquo;</p>
          </div>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ CHAPTER 13 ============ */}
        <div className="ls-chapter fade-in" id="ch13">
          <p className="ls-chapter-number">Chapter Thirteen</p>
          <h2>The Philosophy</h2>

          <p className="ls-para">
            Kailash Nath Bhargav has been many things across the decades. A boy who milked buffaloes at four in the morning. A young man who walked fifteen kilometers daily. A basketball player who sweated through his shirts. An NCC sergeant at fourteen. An underofficer selected for military commission. A student who cooked his own meals and received hospitality in return. A brother who found his sibling a job without being asked. A banker who received postings without requesting them.
          </p>

          <p className="ls-para">
            He would tell you that these are not separate things. They are expressions of the same principle, applied across different domains.
          </p>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">जीवन में दूसरों का भला चाहता है, उसका भला अपने आप भगवान करता है।</p>
            <p className="ls-pullquote-english">&ldquo;In life, whoever wishes well for others &mdash; God automatically does good for them.&rdquo;</p>
          </div>

          <p className="ls-para">
            This is not a passive principle. It means walking the fifteen kilometers when the bus would be faster. It means teaching children who never asked you to. It means picking up the telephone for your brother. It means eating someone&rsquo;s salt and remembering whose table you ate at.
          </p>

          <h3 className="ls-chapter-sub fade-in">The Weight of Seven Generations</h3>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">सात पीढ़ी की... दादा दादा के दादा दादा के दादा... ये सब तुम्हारी knowledge में रहे।</p>
            <p className="ls-pullquote-english">&ldquo;Seven generations. Your grandfather&rsquo;s grandfather&rsquo;s grandfather. All of this should remain in your knowledge.&rdquo;</p>
          </div>

          <p className="ls-para">
            This is not vanity. It is a belief that the stories of the past are not ornaments but instructions. That knowing about Sitaram Ji&rsquo;s sacrifice teaches something about sacrifice. That knowing about Mor Singh&rsquo;s loyalty teaches something about loyalty. That knowing about the walks and the candle-making and the three hundred and thirty rupees teaches something about what a human being can do when circumstances require it.
          </p>
        </div>

        <div className="ls-divider"><span className="ls-divider-dot" /></div>

        {/* ============ EPILOGUE ============ */}
        <div className="ls-chapter fade-in" id="epilogue">
          <p className="ls-chapter-number">Epilogue</p>
          <h2>The Stories That Remain</h2>

          <div className="ls-pullquote fade-in">
            <p className="ls-pullquote-hindi">दस रोज़ तक discuss करें तो ख़त्म नहीं होंगे।</p>
            <p className="ls-pullquote-english">&ldquo;If we discussed for ten days, the stories wouldn&rsquo;t finish.&rdquo;</p>
          </div>

          <p className="ls-para">
            There is still the marriage to be told &mdash; the baraat that traveled to Delhi. There is the banking career: the decades at Union Bank, the transfers from city to city, Jodhpur and Kota and Ajmer and Udaipur, the branch managership. There are the colleagues and the crises, the promotions and the challenges.
          </p>

          <p className="ls-para">
            Perhaps this: that the boy who could not climb the <em>chabutra</em> while his younger brother could &mdash; that boy grew up to understand that there are always things you cannot do, always moments of early defeat, and that what matters is not whether you can climb the platform on the first try, but whether you keep trying, and whether, while you are trying, you notice that someone else needs help getting up too.
          </p>

          <p className="ls-para">
            Seven generations. Harbaksh Singh. Kanhaiya Lal. Sitaram Ji. Mahesh Prasad. Kailash Nath. And after him: the children and grandchildren scattered across cities and countries, carrying the name and the values, telling the stories, building the next chapter of a family history that will be the history of a people who believed that generosity is the most practical thing in the world.
          </p>

          <p className="ls-para ls-meta">
            <em>This narrative is based on the first recorded session of Dada&rsquo;s oral history, conducted via video call, February 2026. Part 1 of an ongoing life story documentation project.</em>
          </p>
        </div>

        {/* ============ CLOSING ============ */}
        <div className="ls-closing fade-in">
          <div className="ls-closing-quote">
            <p className="ls-pullquote-hindi">जीवन में दूसरों का भला चाहता है, उसका भला अपने आप भगवान करता है।</p>
            <p className="ls-pullquote-english"><em>In life, whoever wishes well for others &mdash; God automatically does good for them.</em></p>
            <p className="ls-closing-attr">&mdash; Kailash Nath Bhargav, b. February 13, 1941, Beawar, Rajasthan</p>
          </div>

          <p className="ls-closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <div className="ls-links">
            <Link to="/" className="ls-back-home">&larr; Back to Memorial</Link>
          </div>
        </div>
      </div>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div className="ls-footer-links">
            <Link to="/" className="ls-footer-link">Memorial</Link>
            <Link to="/memories" className="ls-footer-link">Memories</Link>
          </div>
          <p className="ls-footer-family">The Bhargava Family</p>
          <p className="ls-footer-family-hindi">भार्गव परिवार</p>
        </div>
      </footer>
    </div>
  );
}

export default LifeStory;
