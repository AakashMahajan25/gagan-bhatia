import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Left — main content */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          Digital Marketing Specialist · Available for Consulting
        </p>
        <h1>
          Your brand has<br />
          a story. I make<br />
          sure the <span className="teal">right<br />people</span> see it.
        </h1>
        <p className="hero-sub">
          I&apos;m Gagaan Bhatia. 4+ years running social media campaigns, Meta ad
          strategies, and content systems for brands across India — from jewellery
          labels to real estate.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Let&apos;s Work Together
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="btn-ghost">
            See my work ↓
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div className="hero-visual">
        <div className="hero-photo-frame">
          <Image
            src="/gagan.png"
            alt="Gagaan Bhatia"
            fill
            priority
            sizes="(max-width: 960px) 0px, 340px"
            style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
          />
          <div className="hero-photo-overlay" />
          <div className="hero-photo-badge">
            <span className="hc-dot" />
            Available for new projects
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-line" />
        scroll to explore
      </div>
    </section>
  )
}
