const stats = [
  {
    target: 4,
    label: 'Years of Experience',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    target: 15,
    label: 'Brands Worked With',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    target: 8,
    label: 'Industries Covered',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    target: 3,
    label: 'Years Running Meta Ads',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <div className="stats">
      {stats.map(s => (
        <div key={s.label} className="stat-item fi">
          <div className="stat-icon">{s.icon}</div>
          <span className="stat-num" data-target={s.target}>
            0<span className="plus">+</span>
          </span>
          <span className="stat-lbl">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
