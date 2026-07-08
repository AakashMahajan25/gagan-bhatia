'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface Client {
  name: string
  slug: string
  count: number
  label: string
}

const clients: Client[] = [
  { name: 'Nirmal Lehenga House', slug: 'nirmal-lehenga-house', count: 24, label: 'Social media campaigns & Meta ads — Aug 2023 to Jan 2024' },
  { name: 'The Graphic Ghar', slug: 'graphic-ghar', count: 13, label: 'Social media management — Jan to May 2023' },
  { name: 'Tritiya Gold & Diamond Jewels', slug: 'tritiya-jewels', count: 3, label: 'Paid campaign infrastructure — Jul to Aug 2025' },
  { name: 'Sidharth and Disha', slug: 'sidharth-disha', count: 5, label: 'Digital marketing strategy — Feb to Mar 2025' },
  { name: 'Bhartismakeupandstylingstudio', slug: 'bharti-makeup-styling', count: 9, label: 'Digital marketing & content — Feb to May 2024' },
  { name: 'Lenseyezia Productions & Socialsviluppo', slug: 'lenseyezia-productions', count: 5, label: 'Social media & Meta advertising — Aug 2025 to Present' },
  { name: 'Certifications', slug: 'certifications', count: 6, label: 'Courses & certifications' },
]

const PREVIEW = 8

export default function ProofOfWork() {
  const [lightbox, setLightbox] = useState<{ slug: string; count: number; idx: number } | null>(null)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const openLightbox = useCallback((slug: string, count: number, idx: number) => {
    setLightbox({ slug, count, idx })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(l => l ? { ...l, idx: (l.idx - 1 + l.count) % l.count } : null)
  }, [])

  const next = useCallback(() => {
    setLightbox(l => l ? { ...l, idx: (l.idx + 1) % l.count } : null)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next, closeLightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="pow" id="proof-of-work">
      <div className="pow-header fi">
        <p className="eyebrow">Proof of Work</p>
        <h2>Real results,<br />real screenshots</h2>
        <p className="pow-sub">Meta Business Suite and Ads Manager data directly from client campaigns.</p>
      </div>

      <div className="pow-clients">
        {clients.map(client => {
          const isExpanded = !!expanded[client.slug]
          const visible = isExpanded ? client.count : Math.min(PREVIEW, client.count)
          const imgs = Array.from({ length: visible }, (_, i) => i + 1)

          return (
            <div key={client.slug} className="pow-client fi">
              <div className="pow-client-header">
                <div>
                  <h3>{client.name}</h3>
                  <p className="pow-client-label">{client.label}</p>
                </div>
                <span className="pow-count">{client.count} screenshots</span>
              </div>
              <div className="pow-grid">
                {imgs.map(i => (
                  <button
                    key={i}
                    className="pow-thumb"
                    onClick={() => openLightbox(client.slug, client.count, i - 1)}
                    aria-label={`View screenshot ${i}`}
                  >
                    <Image
                      src={`/work/${client.slug}/${i}.jpg`}
                      alt={`${client.name} result ${i}`}
                      fill
                      sizes="(max-width: 960px) 45vw, 220px"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="pow-thumb-overlay">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/>
                        <path d="M11 7v8M7 11h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
              {client.count > PREVIEW && (
                <div className="work-cta">
                  <button
                    className="btn-show-all"
                    onClick={() => setExpanded(e => ({ ...e, [client.slug]: !e[client.slug] }))}
                  >
                    {isExpanded ? (
                      <>
                        Show less
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M7 2L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Show all {client.count} screenshots
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {lightbox && (
        <div className="pow-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="pow-lb-close" onClick={closeLightbox} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          <button className="pow-lb-nav pow-lb-prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="pow-lb-img" onClick={e => e.stopPropagation()}>
            <Image
              key={`${lightbox.slug}-${lightbox.idx}`}
              src={`/work/${lightbox.slug}/${lightbox.idx + 1}.jpg`}
              alt="Proof of work"
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <button className="pow-lb-nav pow-lb-next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span className="pow-lb-counter">{lightbox.idx + 1} / {lightbox.count}</span>
        </div>
      )}
    </section>
  )
}
