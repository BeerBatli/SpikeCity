import { Link } from 'react-router-dom'
import UpcomingGames from '../components/UpcomingGames'

function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

function CommentIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 5.5h14v10H8.5L5 19V5.5z" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpRightIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CityIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 20 12l-8 9-8-9 8-9z" strokeLinejoin="round" />
      <path d="M12 3v18M4 12h16" />
    </svg>
  )
}

const footerIcons = [
  {
    title: 'Discord',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M6 5h12l2 10-4 4-2-2h-4l-2 2-4-4L6 5zm4.2 7.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm3.6 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
      </svg>
    ),
  },
  {
    title: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="7" width="16" height="10" rx="3" />
        <path d="m10.5 10 4 2-4 2v-4z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 17.5c5.8.4 10-2.4 10-8.3v-.4l3.2-2.3-3.8.9A4.1 4.1 0 0 0 6.5 11c0 .3 0 .6.1.9A11.2 11.2 0 0 1 3 10s.8 5.6 5.8 7.1A9.7 9.7 0 0 1 4 17.5z" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HomePage() {
  const newsItems = [
    {
      category: 'ESPORTS',
      time: '2h ago',
      title: 'VCT Masters Shanghai Draw Revealed',
      description: 'Top teams from around the world are ready to fight for glory in Shanghai.',
      stats: '8.7K',
      comments: '124',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200',
    },
    {
      category: 'AGENT NEWS',
      time: '4h ago',
      title: 'ISO Agent Abilities & Gameplay Breakdown',
      description: "Everything you need to know about VALORANT's new duelist - ISO.",
      stats: '6.2K',
      comments: '98',
      image: 'https://images.unsplash.com/photo-1542751371-29b4c2a7f211?q=80&w=1200',
    },
    {
      category: 'GUIDES',
      time: '1d ago',
      title: 'Ascent Map Guide: Callouts, Tips & Tricks',
      description: 'Master Ascent with the best callouts and pro tips from top players.',
      stats: '10.1K',
      comments: '156',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-3 sm:px-6 py-3 sm:py-5 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="border border-fuchsia-500/20 rounded-2xl px-4 sm:px-8 py-4 sm:py-5 bg-[#06010d]/90 backdrop-blur-xl flex items-center justify-between gap-3 shadow-[0_0_40px_rgba(255,0,170,0.08)]">
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h1>
            <p className="hidden sm:block text-[11px] tracking-[0.35em] text-zinc-400 mt-1 uppercase">
              Gaming News & Esports
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
            {['Home', 'News', 'Esports', 'Agents', 'Guides', 'Features', 'Videos'].map((item, index) => (
              <button
                key={item}
                className={`transition-all hover:text-pink-400 ${
                  index === 0
                    ? 'text-pink-500 border-b-2 border-pink-500 pb-2'
                    : 'text-zinc-200'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-5 shrink-0">
            <button className="lg:hidden text-zinc-300 hover:text-white" type="button" aria-label="Open navigation">
              <MenuIcon className="w-8 h-8" />
            </button>
            <button className="hidden lg:flex text-zinc-300 hover:text-white" type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="bg-gradient-to-r from-[#ee1978] to-[#ee1978] hover:opacity-90 transition px-3 md:px-7 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]">
              JOIN CITY
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 mt-5">
          {/* Hero + News */}
          <div className="space-y-5">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-[#090012] min-h-[500px] sm:min-h-[520px] md:h-[430px]">
              <img
                src="https://i.ibb.co/gZDjKnFn/Chat-GPT-Image-May-15-2026-04-29-14-AM.png"
                alt="Cyberpunk"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07000f] via-[#13001d]/90 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#ff00aa55,transparent_35%)]" />

              <Link
                to="/post"
                className="relative z-10 block max-w-2xl px-4 sm:px-5 md:px-12 pt-7 sm:pt-8 group cursor-pointer"
              >

                <p className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-pink-500 text-xs sm:text-sm mb-4 sm:mb-5">
                  Featured
                </p>

                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] sm:leading-[1.05] tracking-tight text-white group-hover:text-pink-100 transition-colors">
                  VALORANT UPDATE 8.11
                   PATCH NOTES & CHANGES
                </h2>

                <p className="mt-5 sm:mt-6 text-base sm:text-xl text-zinc-300 leading-relaxed max-w-xl">
                  All new agent tweaks, map updates, and competitive changes you need to know.
                </p>

                <span className="inline-block mt-8 sm:mt-10 bg-gradient-to-r from-[#ee1978] to-[#ee1978] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold tracking-wide shadow-[0_0_30px_rgba(255,0,170,0.45)] group-hover:scale-[1.02] transition-transform">
                  EXPLORE NEWS
                </span>
              </Link>

              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-12 flex gap-3">
                <div className="w-8 h-1 rounded-full bg-pink-500" />
                <div className="w-4 h-1 rounded-full bg-zinc-600" />
                <div className="w-4 h-1 rounded-full bg-zinc-600" />
              </div>
            </section>

            {/* Latest News */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-4 sm:p-6 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
              <div className="flex items-center justify-between gap-3 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide uppercase">Latest News</h3>
                <button className="inline-flex items-center gap-2 text-pink-500 text-xs sm:text-sm uppercase tracking-wider hover:text-pink-400 shrink-0">
                  <span>View All News</span>
                  <ArrowRightIcon />
                </button>
              </div>

              <div className="space-y-5">
                {newsItems.map((item) => (
                  <article
                    key={item.title}
                    className="group flex flex-col md:flex-row gap-5 border-b border-white/5 pb-5 last:border-none"
                  >
                    <div className="w-full md:w-[320px] h-[170px] sm:h-[220px] md:h-[120px] overflow-hidden rounded-2xl shrink-0 border border-fuchsia-500/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 flex justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] mb-3">
                          <span className="text-pink-500 font-bold">{item.category}</span>
                          <span className="text-zinc-500">{item.time}</span>
                        </div>

                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-3 group-hover:text-pink-400 transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{item.description}</p>

                        <div className="flex items-center gap-6 mt-4 text-sm text-zinc-500">
                          <span className="inline-flex items-center gap-1.5">
                            <EyeIcon />
                            {item.stats}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CommentIcon />
                            {item.comments}
                          </span>
                        </div>
                      </div>

                      <button className="text-zinc-500 hover:text-pink-500 self-start mt-2" type="button" aria-label={`Open ${item.title}`}>
                        <ArrowUpRightIcon />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <UpcomingGames />
            {/* Join */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Join The City
              </h3>

              <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
                Be part of India&apos;s fastest growing gaming community.
              </p>

              <button className="w-full mt-6 bg-gradient-to-r from-[#ee1978] to-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)] inline-flex items-center justify-center gap-2">
                <CityIcon />
                <span>JOIN CITY</span>
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-zinc-400">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                <span>12,541+ Members</span>
              </div>
            </section>

            {/* Subscribe */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Stay Updated
              </h3>

              <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
                Get the latest news and esports updates in your inbox.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-6 bg-black/50 border border-fuchsia-500/20 rounded-xl px-4 py-4 outline-none focus:border-pink-500 text-white placeholder:text-zinc-600"
              />

              <button className="w-full mt-5 bg-gradient-to-r from-[#ee1978] to-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]">
                JOIN
              </button>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 mt-8 px-3 sm:px-6 py-6 border-t border-fuchsia-500/10 text-zinc-500 text-center lg:text-left">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h2>
            <p className="uppercase tracking-[0.3em] text-[10px] mt-1">
              Gaming News & Esports
            </p>
          </div>

          <p>&copy; 2024 SpikeCity. All Rights Reserved.</p>

          <div className="flex items-center gap-6 text-2xl text-zinc-400">
            {footerIcons.map((item) => (
              <span
                key={item.title}
                className="hover:text-pink-500 transition-colors cursor-pointer"
                title={item.title}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
