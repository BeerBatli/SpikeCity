import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'News', path: '/news' },
  { label: 'Esports', path: '/esports' },
  { label: 'Build', path: '/build' },
  { label: 'Features', path: '/features' },
  { label: 'Video', path: '/video' },
]

function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" strokeLinecap="round" />
    </svg>
  )
}

export default function SiteHeader({ activePath }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (path) => activePath === path

  return (
    <div className="relative z-50">
      <header className="border border-fuchsia-500/20 rounded-2xl px-4 sm:px-8 py-4 sm:py-5 bg-[#06010d]/90 backdrop-blur-xl flex items-center justify-between gap-3 shadow-[0_0_40px_rgba(255,0,170,0.08)]">
        <Link to="/" className="min-w-0" onClick={() => setMenuOpen(false)}>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-pink-500">Spike</span>
            <span className="text-cyan-400">City</span>
          </h1>
          <p className="hidden sm:block text-[11px] tracking-[0.35em] text-zinc-400 mt-1 uppercase">
            Gaming News & Esports
          </p>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-wide" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all hover:text-pink-400 ${
                isActive(item.path)
                  ? 'text-pink-500 border-b-2 border-pink-500 pb-2'
                  : 'text-zinc-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-5 shrink-0">
          <button
            type="button"
            className="lg:hidden text-zinc-300 hover:text-white p-1"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
          <button type="button" className="hidden lg:flex text-zinc-300 hover:text-white p-1" aria-label="Search">
            <SearchIcon />
          </button>
          <button
            type="button"
            className="hidden lg:block bg-gradient-to-r from-[#ee1978] to-[#ee1978] hover:opacity-90 transition px-7 py-3 rounded-xl font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]"
          >
            JOIN CITY
          </button>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        id="mobile-nav"
        className={`lg:hidden absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 rounded-2xl border border-fuchsia-500/25 bg-[#06010d]/98 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,170,0.15)] transition-all duration-300 ease-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col p-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'bg-pink-500/15 text-pink-400'
                    : 'text-zinc-200 hover:bg-white/5 hover:text-pink-300'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
