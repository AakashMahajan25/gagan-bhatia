'use client'

import { useState } from 'react'

interface WorkEntry {
  period: string
  badge: string
  subtype?: string
  name: string
  desc: string
}

const featured: WorkEntry[] = [
  {
    period: 'Aug 2025 – Present',
    badge: 'Full-time',
    name: 'Lenseyezia Productions & Socialsviluppo',
    desc: 'Heading social media and Meta advertising for a full-service production company. Managing content strategy, paid campaigns, and cross-platform brand consistency.',
  },
  {
    period: 'Jul – Aug 2025',
    badge: 'Full-time',
    name: 'Tritiya Gold & Diamond Jewels',
    desc: 'Led social media strategy for a premium jewellery brand. Built paid campaign infrastructure on Facebook and Instagram, improving reach and customer interaction.',
  },
  {
    period: 'Feb – Mar 2025',
    badge: 'Full-time',
    name: 'Sidharth and Disha',
    desc: 'Led digital marketing strategy across multiple platforms. Increased online visibility and client engagement through targeted paid campaigns and content optimization.',
  },
  {
    period: 'Dec 2024 – Jan 2025',
    badge: 'Freelance',
    name: 'R R Homes',
    desc: 'Managed social media presence for a real estate brand. Developed advertising strategies and improved engagement through creative paid social campaigns.',
  },
  {
    period: 'Oct 2023 – Jan 2024',
    badge: 'Freelance',
    name: 'Motifiq',
    desc: 'Ran Meta ad campaigns and full social media strategy. Focused on audience growth and consistent campaign performance optimisation.',
  },
  {
    period: 'Aug 2023 – Jan 2024',
    badge: 'Full-time',
    name: 'Nirmal Lehenga House',
    desc: 'Handled social media campaigns and client follow-ups for a fashion label, boosting customer engagement and brand visibility.',
  },
]

const extra: WorkEntry[] = [
  {
    period: 'Nov 2024 – Dec 2024',
    badge: 'Freelance',
    subtype: 'Hybrid',
    name: 'Vita Calls',
    desc: 'Executed social media campaigns and managed graphic design tasks. Increased brand visibility through well-targeted ad placements.',
  },
  {
    period: 'Oct 2024 – Nov 2024',
    badge: 'Freelance',
    subtype: 'Remote',
    name: 'Indian Summer',
    desc: 'Formulated and executed social media strategies to boost online presence. Handled paid advertising on Facebook and Instagram.',
  },
  {
    period: 'May 2024 – Oct 2024',
    badge: 'Full-time',
    subtype: 'Remote',
    name: 'Imagerevisionist1',
    desc: 'Managed multi-channel social media marketing strategies. Focused on paid social media advertising and content optimization.',
  },
  {
    period: 'Jun 2024 – Jul 2024',
    badge: 'Freelance',
    subtype: 'Hybrid',
    name: 'Fingers and Toes Studio',
    desc: 'Managed digital marketing campaigns with a focus on customer engagement.',
  },
  {
    period: 'Feb 2024 – May 2024',
    badge: 'Freelance',
    subtype: 'Hybrid',
    name: 'Bhartismakeupandstylingstudio',
    desc: 'Developed digital marketing strategies and optimized content for social platforms.',
  },
  {
    period: 'Apr 2024',
    badge: 'Freelance',
    subtype: 'Remote',
    name: 'Wackywish',
    desc: 'Created content and managed social media campaigns.',
  },
  {
    period: 'Mar 2024',
    badge: 'Full-time',
    subtype: 'New Delhi',
    name: 'Geet Sukhani Studio',
    desc: 'Managed online branding and social media marketing efforts.',
  },
  {
    period: 'Aug 2023',
    badge: 'Full-time',
    subtype: 'Remote',
    name: 'AiCreation',
    desc: 'Managed social media analytics and content strategy.',
  },
  {
    period: 'Jun 2023 – Jul 2023',
    badge: 'Full-time',
    subtype: 'On-site',
    name: 'Panemorfi Aesthetic',
    desc: 'Implemented paid advertising strategies and optimized social media campaigns.',
  },
  {
    period: 'Jul 2021 – Jun 2023',
    badge: 'Part-time',
    subtype: 'Remote',
    name: 'Leadsguru',
    desc: 'Implemented digital marketing techniques, social media strategies, and affiliate marketing campaigns.',
  },
  {
    period: 'Jan 2023 – May 2023',
    badge: 'Full-time',
    subtype: 'Remote',
    name: 'The Graphic Ghar',
    desc: 'Managed social media content and boosted online presence.',
  },
  {
    period: 'Apr 2023',
    badge: 'Full-time',
    subtype: 'Remote',
    name: 'Purple Media Marketing',
    desc: 'Managed social media profiles and crafted content to drive engagement.',
  },
]

function WorkCard({ w, i, isExtra }: { w: WorkEntry; i: number; isExtra?: boolean }) {
  return (
    <div
      className={`work-card ${isExtra ? 'work-card-extra' : 'fi'}`}
      style={isExtra ? { animationDelay: `${i * 55}ms` } : undefined}
    >
      <div className="card-top">
        <div className="card-left-meta">
          <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="card-period">{w.period}</span>
        </div>
        <div className="card-badges">
          <span className="card-badge">{w.badge}</span>
          {w.subtype && <span className="card-badge card-badge-sub">{w.subtype}</span>}
        </div>
      </div>
      <h3>{w.name}</h3>
      <p>{w.desc}</p>
      <div className="card-arrow">
        <svg viewBox="0 0 14 14">
          <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" />
        </svg>
      </div>
    </div>
  )
}

export default function Work() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="work" id="work">
      <div className="work-top fi">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>
            Where I&apos;ve built<br />real results
          </h2>
        </div>
        <span className="more-note">
          {showAll ? '18 brands total' : '18 brands total — see all below'}
        </span>
      </div>

      <div className="work-grid">
        {featured.map((w, i) => (
          <WorkCard key={w.name} w={w} i={i} />
        ))}
        {showAll && extra.map((w, i) => (
          <WorkCard key={w.name} w={w} i={featured.length + i} isExtra />
        ))}
      </div>

      <div className="work-cta">
        <button className="btn-show-all" onClick={() => setShowAll(o => !o)}>
          {showAll ? (
            <>
              Show less
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M7 2L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </>
          ) : (
            <>
              Show all 18 projects
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </section>
  )
}
