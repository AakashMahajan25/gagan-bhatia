'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Fade-in on scroll
    const fis = document.querySelectorAll<HTMLElement>('.fi')
    const fObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const siblings = e.target.parentElement?.querySelectorAll<HTMLElement>('.fi')
          let delay = 0
          siblings?.forEach(s => {
            if (!s.classList.contains('in')) {
              setTimeout(() => s.classList.add('in'), delay)
              delay += 70
            }
          })
          fObs.unobserve(e.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    fis.forEach(el => fObs.observe(el))

    // Stat counter animation
    const statNums = document.querySelectorAll<HTMLElement>('.stat-num')
    const cObs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.target ?? '0')
          const plusHtml = el.querySelector('.plus')?.outerHTML ?? ''
          let current = 0
          const frames = target * 2
          const delay = 1000 / frames
          const inc = () => {
            current++
            el.innerHTML = current + plusHtml
            if (current < target) setTimeout(inc, delay)
          }
          setTimeout(inc, 200)
          cObs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    statNums.forEach(el => cObs.observe(el))

    return () => {
      fObs.disconnect()
      cObs.disconnect()
    }
  }, [])

  return null
}
