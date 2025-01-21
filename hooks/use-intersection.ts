'use client'

import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const hasIntersected = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected.current) {
        setIsIntersecting(true)
        hasIntersected.current = true
      }
    }, { threshold: 0.1, ...options })

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return [elementRef, isIntersecting]
}
