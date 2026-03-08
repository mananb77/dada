import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './FamilyStories.css';

function FamilyStories() {
  const containerRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fs" ref={containerRef}>
      {/* Nav */}
      <nav className="fs-nav">
        <Link to="/" className="fs-back">&larr;</Link>
        <span className="fs-nav-title">Family Stories</span>
      </nav>

      {/* Hero */}
      <header className="fs-hero">
        <h1 className="fs-heading fade-in">Family Stories</h1>
        <p className="fs-heading-hindi fade-in">परिवार की कहानियाँ</p>
        <p className="fs-intro fade-in">
          The longer stories shared by family &mdash; moments that capture who Dada really was. Compiled from the family&rsquo;s remembrance call.
        </p>
      </header>

      {/* Story: The Property Prank */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">The Property Prank</h2>
        <p>
          Sonu called Dada pretending to be a real estate agent, saying there was land available for sale in Kanota. Dada had no idea it was a prank. He was so engaged &mdash; asking about the property in detail, the price, the dimensions &mdash; that he had already begun moving toward his car to go and see it before Sonu revealed who she really was.
        </p>
        <blockquote className="fs-quote">
          &ldquo;Meri bahut hi mazedaar yaadon mein se hai yeh. He was so ready to go &mdash; that was Dada.&rdquo;
        </blockquote>
      </section>

      {/* Story: Hospital Phone Standoff */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">The Hospital Phone Standoff</h2>
        <p>
          After his TAVR procedure, a junior ward staff member refused to give Dada his mobile phone, saying it would drain his energy. Dada, undeterred, quietly mobilised his network: he got a message out via the milk-delivery boy&rsquo;s son, called his daughter-in-law, asked her to bring &ldquo;Coco&rdquo; (a favourite companion), and eventually had Dr. Rao himself intervene to restore his phone. He did not rest until he had it back.
        </p>
        <blockquote className="fs-quote">
          &ldquo;Mujhe phone nahi de rahe &mdash; mujhse itne tameez se baat nahi ki jaise kisi insaan se nahi ki. Abhi ke abhi aao.&rdquo; &mdash; Dada to his son, at 2 AM
        </blockquote>
      </section>

      {/* Story: Signing Cheques in the ICU */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">Signing Cheques in the ICU</h2>
        <p>
          The day after his TAVR surgery, Dada was signing business cheques for the hostel from his hospital bed. When Dr. Ravindra Rao walked in and saw this, he took out his phone and photographed it &mdash; saying this was exactly the kind of recovery proof he wanted to show for his procedure. Most patients could barely sit up. Dada was doing accounts.
        </p>
      </section>

      {/* Story: Teaching Anish the Stairs */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">Teaching Anish to Climb Stairs</h2>
        <p>
          When Anish was barely able to walk, Dada spent fifteen-minute sessions teaching him to climb stairs at Pramod Chacha&rsquo;s house &mdash; stairs that had no railing on one side. He came down to the child&rsquo;s level, used only actions and sounds (not words, since Anish couldn&rsquo;t yet speak), showed each step patiently, and once Anish had it, the child was unstoppable &mdash; running up and down every staircase he could find.
        </p>
        <blockquote className="fs-quote">
          &ldquo;It was like watching someone teach not with words, but with love and patience. He connected through action and emotion. That stayed with Anish.&rdquo;
        </blockquote>
      </section>

      {/* Story: The Mehandipur Balaji Trips */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">The Mehandipur Balaji Trips</h2>
        <p>
          On Sunday mornings, out of nowhere, a call would come: Dada was on his way, and everyone had fifteen to twenty minutes to get ready. Half an hour later, the whole family would be in the car heading to Mehandipur Balaji or some other destination. No planning, no agenda &mdash; just joy and movement.
        </p>
        <blockquote className="fs-quote">
          &ldquo;That was his way of doing family time. Not scheduled, not formal &mdash; just &lsquo;chalo, chal rahe hain.&rsquo;&rdquo;
        </blockquote>
      </section>

      {/* Story: The Trimbakeshwar Trip */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">The Trimbakeshwar Trip</h2>
        <p>
          After his TAVR recovery, one of Dada&rsquo;s wishes was to visit Trimbakeshwar. He invited his daughter-in-law to join him, stayed at the Taj Hotel in Bombay, negotiated shrines at Shirdi (Sai Baba) and Shani Maharaj into the itinerary &mdash; all under the same cab arrangement &mdash; and called the entire adventure &ldquo;advertising for Dr. Rao,&rdquo; since he sent so many people to the doctor afterward.
        </p>
        <p>
          What the family remembers most is not the temples. It&rsquo;s the evening afterward, when Dada sat with everyone and told stories about his own father and grandfather&rsquo;s faith. Three generations sat together and felt connected to something ancient.
        </p>
      </section>

      {/* Story: His Bond with Mami */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">His Bond with Mami</h2>
        <p>
          Their love was a force. Mami was his spiritual anchor &mdash; her devotion gave the household its rhythm of prayer and ritual. He was her worldly protector &mdash; making sure the family was provided for, connected, and safe. They rarely spoke about their bond publicly, but everyone who saw them together understood: this was a marriage built on deep, quiet respect.
        </p>
        <p>
          Mami passed away on February 6th. Dada followed her approximately twenty-six days later. Family members felt that Mami had been Dada&rsquo;s spiritual shield &mdash; his &ldquo;armor&rdquo; &mdash; and that once she was gone, nothing held him here.
        </p>
        <blockquote className="fs-quote">
          &ldquo;Mami used to say: &lsquo;Mujhe suhaagan hi jaana hai &mdash; mere suhag ko kuch nahi hoga.&rsquo; She was right. He couldn&rsquo;t survive long without her.&rdquo;
        </blockquote>
        <blockquote className="fs-quote">
          सात जनम का बंधन था। एक गए, दूसरे भी गए।
        </blockquote>
      </section>

      {/* Story: His Final Days */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">His Final Days</h2>
        <p>
          In his last forty-eight hours, Dada remained entirely himself. He organised Buaji&rsquo;s life story to be recorded at the dining table, with a microphone. He checked that every ritual for Mami had been completed properly &mdash; &ldquo;Mami ka kaam sab achhe se ho gaya? Koi kami toh nahi rahi?&rdquo; He set aside two prasad boxes &mdash; one for Anisha, one for Vedang &mdash; to be taken back to the US, so the grandchildren received Mami&rsquo;s prasad. He told his son: &ldquo;Khush hokey jaana. Khush hokey rehna hai yahan.&rdquo;
        </p>
        <p>
          The morning he left, he made business calls. Dr. Sanjiv checked his vitals at 3 PM &mdash; all normal, declared fit and fine. He called his son through Bhai Ji approximately two and a half hours before passing to ask him to stay fifteen more days. He said: &ldquo;Tujhe rook ke hi chhodunga&rdquo; &mdash; I will send you only after I&rsquo;ve made you stay longer.
        </p>
        <p>
          He left at approximately 7:20 PM. He did not complain, he did not ask for pity, and he did not waver. Present until the very end. Generous until his last breath.
        </p>
      </section>

      {/* Story: The Standard He Set */}
      <section className="fs-section fade-in">
        <h2 className="fs-section-title">What He Leaves Behind</h2>
        <p>
          A family that knows how to show up for each other. A model of entrepreneurship, learning, and never stopping. The demonstration that stamina built young sustains you for a lifetime. The proof that every person deserves your full presence, not a distracted half-attention. The lesson that love &mdash; for spouse, children, grandchildren, community &mdash; is a verb, not a feeling.
        </p>
        <blockquote className="fs-quote">
          &ldquo;He has set a standard for us. Itna toh kiya hi ja sakta hai. We have seen it. When we fall short, we can always think: he did this. So can we.&rdquo;
        </blockquote>
        <p className="fs-together">दोनों साथ हैं। जहाँ भी हैं।</p>
        <p className="fs-together-english">They are together. Wherever they are.</p>
      </section>

      {/* Closing */}
      <section className="fs-section fs-closing fade-in">
        <div className="fs-closing-om fade-in">
          <p>&#2384; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367;</p>
        </div>

        <Link to="/" className="fs-back-link fade-in">
          &larr; Back to Memorial
        </Link>
      </section>
    </div>
  );
}

export default FamilyStories;
