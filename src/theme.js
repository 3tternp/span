// Theme = 'auto' (follow daylight), 'light' or 'dark'.
// In auto mode the visitor's local clock decides: light from 06:00 to 18:00, dark otherwise.
// index.html runs the same check before first paint so there is no flash.

const KEY = 'theme'
export const MODES = ['auto', 'light', 'dark']

export function daylightTheme(date = new Date()) {
  const h = date.getHours()
  return h >= 6 && h < 18 ? 'light' : 'dark'
}

export function getMode() {
  try {
    const saved = localStorage.getItem(KEY)
    return MODES.includes(saved) ? saved : 'auto'
  } catch {
    return 'auto'
  }
}

export function saveMode(mode) {
  try {
    if (mode === 'auto') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, mode)
  } catch { /* storage unavailable: the choice just won't persist */ }
}

export function resolve(mode) {
  return mode === 'auto' ? daylightTheme() : mode
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f0d16' : '#f6f4fa')
}
