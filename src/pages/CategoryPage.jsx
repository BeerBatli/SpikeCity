import { Link } from 'react-router-dom'

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
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

export default function CategoryPage({ activePath, title, kicker, description, items }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-3 sm:px-6 py-3 sm:py-5 max-w-[1600px] mx-auto">
        <header className="border border-fuchsia-500/20 rounded-2xl px-4 sm:px-8 py-4 sm:py-5 bg-[#06010d]/90 backdrop-blur-xl flex items-center justify-between gap-3 shadow-[0_0_40px_rgba(255,0,170,0.08)]">
          <Link to="/" className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h1>
            <p className="hidden sm:block text-[11px] tracking-[0.35em] text-zinc-400 mt-1 uppercase">
              Gaming News & Esports
            </p>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all hover:text-pink-400 ${
                  item.path === activePath
                    ? 'text-pink-500 border-b-2 border-pink-500 pb-2'
                    : 'text-zinc-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-5 shrink-0">
            <button className="lg:hidden text-zinc-300 hover:text-white" type="button" aria-label="Open navigation">
              <MenuIcon className="w-8 h-8" />
            </button>
            <button className="bg-[#ee1978] hover:opacity-90 transition px-3 md:px-7 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]">
              JOIN CITY
            </button>
          </div>
        </header>

        <nav className="lg:hidden mt-3 flex gap-3 overflow-x-auto pb-1 text-xs font-semibold uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 rounded-full border px-4 py-2 ${
                item.path === activePath
                  ? 'border-pink-500 bg-pink-500/15 text-pink-400'
                  : 'border-fuchsia-500/20 text-zinc-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <main className="mt-5 rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
          <p className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-pink-500 text-xs sm:text-sm mb-4">
            {kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight uppercase">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
            {items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/80 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-pink-500 text-xs font-bold uppercase tracking-[0.2em]">{item.category}</p>
                  <h3 className="mt-3 text-xl sm:text-2xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
