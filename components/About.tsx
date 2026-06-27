const skills = [
  'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Content Strategy',
  'Social Media Management', 'Lead Generation', 'Brand Strategy',
  'Campaign Analytics', 'Graphic Design', 'Video Production',
  'CRM', 'Business Development',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left fi">
        <p className="eyebrow">About Me</p>
        <h2>I didn&apos;t start with a degree. I started with curiosity.</h2>
        <div className="about-badges">
          <div className="about-badge">
            <span className="about-badge-dot" />
            B.Com student, 2023–2027
          </div>
          <div className="about-badge">
            <span className="about-badge-dot" />
            Based in India
          </div>
          <div className="about-badge">
            <span className="about-badge-dot" />
            Open to remote &amp; on-site
          </div>
        </div>
      </div>
      <div className="about-right fi">
        <p>
          Over the past 4 years, I&apos;ve worked with <strong>15+ brands</strong> across
          industries — full-time, freelance, remote, and on-site. Jewellery brands. Real
          estate firms. Photography studios. Fashion houses. Production companies. Each one
          taught me something different about audiences, content, and what actually converts.
        </p>
        <p>
          There&apos;s no one-size campaign. Every brand has a specific audience, a specific
          voice, and a specific set of numbers that matter. My job is to find that
          intersection and build something around it.
        </p>
        <p>
          Currently pursuing B.Com (2023–2027) while actively consulting for brands that
          want their digital presence to do more than just look good.
        </p>
        <div className="skills">
          {skills.map(skill => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
