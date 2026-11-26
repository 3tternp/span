import { useEffect, useState } from 'react'
import { MODES, getMode, saveMode, resolve, applyTheme } from '../theme.js'

const LABEL = { auto: 'Auto', light: 'Light', dark: 'Dark' }

function Icon({ mode }) {
  const common = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (mode === 'light') {
    return (
      <svg {...common}><circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
    )
  }
  if (mode === 'dark') {
    return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
  }
  // auto: half sun / half moon
  return (
    <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></svg>
  )
}

export default function ThemeToggle({ className = '' }) {
  const [mode, setMode] = useState(getMode)

  // Apply the chosen mode; in auto mode re-check the clock every few minutes
  useEffect(() => {
    applyTheme(resolve(mode))
    if (mode !== 'auto') return
    const id = setInterval(() => applyTheme(resolve('auto')), 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [mode])

  const next = () => {
    const m = MODES[(MODES.indexOf(mode) + 1) % MODES.length]
    saveMode(m)
    setMode(m)
  }

  const hint = mode === 'auto' ? `Auto (${resolve('auto')} now)` : LABEL[mode]

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`Theme: ${hint}. Click to change.`}
      title={`Theme: ${hint}. Click to change.`}
      className={`inline-flex items-center gap-2 py-1 text-[14px] text-muted hover:text-ink ${className}`}
    >
      <Icon mode={mode} />
      <span>{LABEL[mode]}</span>
    </button>
  )
}
