const industries = [
  'Jewellery & Fashion',
  'Real Estate',
  'Photography & Studios',
  'Beauty & Aesthetics',
  'Media & Production',
  'Wellness & Lifestyle',
  'Digital Agencies',
  'E-commerce',
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <p className="eyebrow fi">Industries</p>
      <h2 className="fi">
        15+ brands. 8+ industries.<br />Every project different.
      </h2>
      <div className="ind-grid fi">
        {industries.map(ind => (
          <span key={ind} className="ind-tag">{ind}</span>
        ))}
      </div>
    </section>
  )
}
