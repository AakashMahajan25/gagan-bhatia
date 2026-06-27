const contacts = [
  {
    platform: 'WhatsApp',
    label: 'Send a message',
    value: '+91 99583 02595',
    href: 'https://wa.me/919958302595',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.526 5.852L.057 23.428a.5.5 0 0 0 .614.614l5.576-1.469A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 0 1-4.966-1.365l-.355-.21-3.685.97.987-3.595-.23-.37A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
      </svg>
    ),
    bg: 'rgba(37,211,102,0.08)',
    iconColor: '#1DA851',
  },
  {
    platform: 'Instagram',
    label: 'Follow along',
    value: '@gagaan_bhatia',
    href: 'https://www.instagram.com/gagaan_bhatia/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
      </svg>
    ),
    bg: 'rgba(214,41,118,0.07)',
    iconColor: '#C13584',
  },
  {
    platform: 'LinkedIn',
    label: 'Connect with me',
    value: 'Gagaan Bhatia',
    href: 'https://www.linkedin.com/in/gagaan-bhatia-077746213/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: 'rgba(10,102,194,0.07)',
    iconColor: '#0A66C2',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left fi">
        <p className="eyebrow">Let&apos;s Work Together</p>
        <h2>Ready to grow your brand online?</h2>
        <p>
          Whether you need a full social media strategy, a Meta ads overhaul, or
          consistent content management — I&apos;m open to new projects. I work with
          brands that are serious about results.
        </p>
        <p className="contact-note">
          Reach out on any platform — I typically respond within a few hours.
        </p>
      </div>

      <div className="contact-methods fi">
        {contacts.map(c => (
          <a
            key={c.platform}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div
              className="contact-card-icon"
              style={{ background: c.bg, color: c.iconColor }}
            >
              {c.icon}
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">{c.label}</span>
              <span className="contact-card-value">{c.value}</span>
            </div>
            <div className="contact-card-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
