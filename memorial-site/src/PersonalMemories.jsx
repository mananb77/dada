import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './PersonalMemories.css';

function PersonalMemories() {
  const containerRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pm" ref={containerRef}>
      {/* Nav */}
      <nav className="pm-nav">
        <Link to="/" className="pm-back">&larr;</Link>
        <span className="pm-nav-title">From His Grandsons</span>
      </nav>

      {/* Hero */}
      <header className="pm-hero">
        <h1 className="pm-heading fade-in">From His Grandsons</h1>
        <p className="pm-heading-hindi fade-in">दादा जी के पोतों की यादें</p>
        <p className="pm-intro fade-in">
          We sat down together, pressed record, and just talked about Dada. No script, no plan &mdash; just the two of us sharing what we remember and what we don&rsquo;t want to forget. These are the memories we carry.
        </p>
      </header>

      {/* Who He Was */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Who He Was to Us</h2>
        <p className="pm-section-subtitle">जो दिखता था</p>
        <p>
          When we picture Dada, we see someone who was happy but always in motion &mdash; always forward-thinking, always on to the next thing for someone else. We don&rsquo;t know if he ever took time just for himself. It was always about looking out for others.
        </p>
        <p>
          What we&rsquo;d picture him doing is being on the phone with one person, then immediately moving on to the next call. He was an expert at using his phone, that&rsquo;s for sure.
        </p>
        <blockquote className="pm-quote">
          The biggest thing we can take away is he was a masterful multitasker. That&rsquo;s exactly how we&rsquo;d describe him.
        </blockquote>
        <p>
          He had his own specific way of doing things. And a smell that was just &mdash; him. Like India itself. Something like jasmine or rose. That&rsquo;s what comes back to us.
        </p>
      </section>

      {/* My Lovely Grandson */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">&ldquo;My Lovely Grandson&rdquo;</h2>
        <p className="pm-section-subtitle">उनकी आवाज़</p>
        <p>
          That&rsquo;s what he called us. <em>My lovely grandson.</em> And the way he sang happy birthday &mdash; that was unmistakable.
        </p>
        <blockquote className="pm-quote">
          &ldquo;Happy birthday to you, happy birthday to you. Happy birthday to my lovely grandson.&rdquo;
        </blockquote>
        <p>
          One birthday &mdash; sixth or seventh grade &mdash; they used it as a reason to invite the whole compound. A hundred people showed up in Jaipur. There was a chocolate cake with vanilla icing, and everyone gathered around. That&rsquo;s very clear in our heads &mdash; the birthdays.
        </p>
      </section>

      {/* The Jaipur House */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Jaipur House</h2>
        <p className="pm-section-subtitle">जयपुर का घर</p>
        <p>
          There were always a lot of people. Always very happening. Like eight people in the house at once &mdash; Chachi, Chacha, Samia, the drivers, the people from the business. Organized chaos, all the time.
        </p>
        <p>
          People would be eating at any hour, staggered, not always sitting together. It was just that kind of house &mdash; a place that was always alive.
        </p>
        <blockquote className="pm-quote">
          The AC room is my favorite. And going on the rooftop. The Jaipur home will always be there in our minds.
        </blockquote>
      </section>

      {/* His Routine */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">His Routine</h2>
        <p className="pm-section-subtitle">उनकी दिनचर्या</p>
        <p>
          Dada had a very set routine. Wake up, do his rounds of walking, then take a bath, eat, and go do real estate. Check on the mandir, call a bunch of people. Always on to the next problem, the next thing. Forward-thinking &mdash; like something was always coming.
        </p>
        <p>
          We guess that&rsquo;s a good skill &mdash; always thinking ahead. His work was what kept his brain moving. By continuing to work, continuing to support the business, continuing to do real estate &mdash; that&rsquo;s what kept him active and sharp.
        </p>
      </section>

      {/* Playing Cards */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Lighter Moments</h2>
        <p className="pm-section-subtitle">हँसी की बातें</p>
        <p>
          We played cards with him once &mdash; dosh or something &mdash; and he couldn&rsquo;t quite figure it out. And he was always offering snacks. <em>&ldquo;Can I get some nashta for you?&rdquo;</em> That was his way. He was always trying to get you something, feed you, take care of you.
        </p>
        <p>
          And then there was the time he was petting the cucumbers &mdash; we still laugh about that.
        </p>
      </section>

      {/* What He Taught Us */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What He Taught Us</h2>
        <p className="pm-section-subtitle">सबक जो सिखाए</p>
        <p>
          The most important thing we learned from watching him wasn&rsquo;t something he said &mdash; it was how he stayed connected. He was always bringing everyone together, hosting people, connecting one person to another. So that&rsquo;s the lesson: just keep connecting everyone together.
        </p>
        <p>
          His direct advice was straightforward: study hard, get a good naukri. He believed in the four stages of life &mdash; 0 to 25, 25 to 50, 50 to 75, and 75 onward &mdash; and that each stage had its purpose.
        </p>
        <blockquote className="pm-quote">
          जो दूसरों का भला चाहता है, भगवान उसका भला करता है।
          <br /><br />
          <em>Whoever does good to others, God gives them goodwill.</em>
        </blockquote>
        <p>
          He lived that out in front of us. He would donate, give plots of land, give sweets, food, supplies, money. He was always supporting education in some district, always funding some project. He was always giving.
        </p>
      </section>

      {/* What Surprised Us */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What Surprised Us</h2>
        <p className="pm-section-subtitle">जो हमें नहीं पता था</p>
        <p>
          That he played basketball. That he was in the army. That he survived the Partition. That he had raised animals and moved across different cities. His life was very full and very busy &mdash; much more than we realized growing up.
        </p>
        <p>
          The hardest part of his life was that he had to be the one to earn everything for the family, especially with three boys. And Dadi had to make sacrifices too &mdash; she couldn&rsquo;t pursue her economics career because someone had to hold the home together.
        </p>
      </section>

      {/* The Phone Calls */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Phone Calls</h2>
        <p className="pm-section-subtitle">वो फ़ोन कॉल्स</p>
        <p>
          A memory we&rsquo;re glad to have is some of those phone calls &mdash; where he would actually take out an hour or two just to talk to us as grandkids. With his routine and his lifestyle and so many things going on, just finding the time to talk to the grandkids was a big thing.
        </p>
        <p>
          We never went to India for Diwali &mdash; that would have been amazing to experience. But we had the birthdays, and the visits, and the calls. And those were enough to know he cared.
        </p>
      </section>

      {/* What We Wish We'd Said */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What We Wish We&rsquo;d Said</h2>
        <p className="pm-section-subtitle">काश कह पाते</p>
        <p>
          We wish we&rsquo;d asked him simple things &mdash; his favorite color, his favorite foods. Just the small details you assume you&rsquo;ll always have time to learn.
        </p>
        <p>
          And we wish we&rsquo;d said <em>thank you</em>. Thank you for all the opportunities. Thank you for making it possible for our parents to come to the United States and build a life here. Growing up in this immigrant family, seeing how our grandparents made so many sacrifices for us to be in this position &mdash; that&rsquo;s a privilege we don&rsquo;t take lightly.
        </p>
        <blockquote className="pm-quote">
          He always wanted the best for us. Education from the best universities. He even wanted us to study or work in India sometimes. But basically &mdash; he just wanted us to have every opportunity he could give.
        </blockquote>
      </section>

      {/* Who He Really Was */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Who He Really Was</h2>
        <p className="pm-section-subtitle">असली इंसान</p>
        <p>
          He was somebody who was very strong and caring and wanted the best for his kids, his grandkids, and the extended family. He wanted to take care of people. He wanted to make sure they had the best opportunities and didn&rsquo;t have to worry about basic needs.
        </p>
        <p>
          He made it so our parents could come to the United States and grow a life here. Growing up in this immigrant family, seeing how our grandparents made so many sacrifices for us to be here &mdash; to take certain types of jobs, to grow certain types of careers &mdash; that&rsquo;s a very big privilege. And that&rsquo;s who he was as a person.
        </p>
      </section>

      {/* What He Wanted For Us */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What He Wanted for Us</h2>
        <p className="pm-section-subtitle">उनकी इच्छा</p>
        <p>
          He wanted us to do good for the world. Give back through volunteering, through donating, through time. Be good, caring, kind people. Good family relations. No enemies. No hard things in the family. And he was most proud of always making sure the family was taken care of &mdash; good health, good responsibility, and giving back to others.
        </p>
        <p>
          He left his mark on the world through maintaining so many relationships and doing everything for so many people in so many different ways.
        </p>
      </section>

      {/* Carrying Him Forward */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Carrying Him Forward</h2>
        <p className="pm-section-subtitle">आगे ले जाना</p>
        <p>
          What we see of him in ourselves is the work ethic &mdash; being a hard worker, doing our best in everything, being honest and truthful and maintaining good relationships. That&rsquo;s how we carry him.
        </p>
        <p>
          Now all four of our grandparents are no more. So the one thing we&rsquo;ll do differently is care for our parents more &mdash; especially our dad, who will need our time and support. We want to be there for them the way they were there for us.
        </p>
        <blockquote className="pm-quote">
          The best thing we can do is remember the legacy our grandparents gave us. Their hard work, their wisdom, their quotes, their values &mdash; everything they stood for. Document it. Carry it. Pass it on.
        </blockquote>
      </section>

      {/* The Version We Remember */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Version We Remember</h2>
        <p className="pm-section-subtitle">हमारी याद</p>
        <p>
          The version of him we want to remember is the one where he&rsquo;s laughing, he&rsquo;s happy, he&rsquo;s running around &mdash; showing through his actions how important family is. Smiling and laughing and just being with us.
        </p>
        <p>
          What it means to keep someone alive after they&rsquo;re gone is remembering them through their stories, their memories, their prayers. Looking back on their birthdays, thinking through all the impact they left on us. Carrying on their narratives, their wisdom, their legacy. Honoring all the things they actually did &mdash; how many people they impacted, how much they gave.
        </p>
        <p>
          Life goes by really quickly. Before you know it, the time just flies by. So we&rsquo;ll live the way he showed us &mdash; connected, generous, forward &mdash; and we&rsquo;ll tell our kids about a man who was strong and sometimes strict but always motivating. A masterful multitasker. A leader you looked up to. Our grandfather.
        </p>
      </section>

      {/* Closing */}
      <section className="pm-section pm-closing fade-in">
        <p className="pm-closing-sign">&mdash; His grandsons</p>

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
