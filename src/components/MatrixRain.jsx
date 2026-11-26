import { useEffect, useRef } from 'react'

// Digital rain for the hero. Purely decorative (aria-hidden):
// - colours come from the theme tokens (purple mostly, with red and blue streams)
// - ~20 fps, paused when scrolled out of view or when the tab is hidden
// - with "reduce motion" it renders a single still frame instead of animating
const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEF<>/{}[]#$%'
const SIZE = 16

export default function MatrixRain({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let cols = 0, drops = [], kinds = [], palette = [], frame = 0, last = 0, raf = 0
    let visible = true

    const readPalette = () => {
      const cs = getComputedStyle(document.documentElement)
      const get = n => cs.getPropertyValue(n).trim()
      palette = [get('--accent'), get('--offense'), get('--defense')]
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width))
      canvas.height = Math.max(1, Math.floor(height))
      cols = Math.ceil(canvas.width / SIZE)
      drops = Array.from({ length: cols }, () => Math.random() * -40)
      // mostly purple, some red and blue streams
      kinds = Array.from({ length: cols }, () => {
        const r = Math.random()
        return r < 0.6 ? 0 : r < 0.8 ? 1 : 2
      })
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      readPalette()
    }

    const step = () => {
      // fade previous glyphs to leave trails (canvas stays transparent)
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'
      ctx.font = `${SIZE}px "JetBrains Mono", monospace`
      for (let i = 0; i < cols; i++) {
        const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0]
        ctx.fillStyle = palette[kinds[i]] || '#888'
        ctx.fillText(ch, i * SIZE, drops[i] * SIZE)
        if (drops[i] * SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 1
      }
      frame++
      if (frame % 120 === 0) readPalette() // pick up theme changes
    }

    const loop = t => {
      raf = requestAnimationFrame(loop)
      if (!visible || document.hidden || t - last < 50) return
      last = t
      step()
    }

    resize()
    if (reduce) {
      for (let i = 0; i < 55; i++) step() // one still frame
    } else {
      raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(() => { resize(); if (reduce) for (let i = 0; i < 55; i++) step() })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect() }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`rain pointer-events-none ${className}`}
    />
  )
}
