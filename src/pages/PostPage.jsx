import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://i.ibb.co/gZDjKnFn/Chat-GPT-Image-May-15-2026-04-29-14-AM.png'

const trendingAgents = [
  { name: 'Jett', rate: '54.3%', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200' },
  { name: 'Reyna', rate: '51.2%', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200' },
  { name: 'Raze', rate: '48.7%', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=200' },
  { name: 'Omen', rate: '47.1%', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=200' },
  { name: 'KAY/O', rate: '45.8%', image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=200' },
]

const sidebarNews = [
  {
    category: 'ESPORTS',
    time: '2h ago',
    title: 'VCT Masters Shanghai Draw Revealed',
    views: '8.7K',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400',
  },
  {
    category: 'AGENT NEWS',
    time: '4h ago',
    title: 'ISO Agent Abilities & Gameplay Breakdown',
    views: '6.2K',
    image: 'https://images.unsplash.com/photo-1542751371-29b4c2a7f211?q=80&w=400',
  },
  {
    category: 'GUIDES',
    time: '1d ago',
    title: 'Ascent Map Guide: Callouts, Tips & Tricks',
    views: '10.1K',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400',
  },
]

const agentChanges = [
  {
    name: 'Jett',
    role: 'Duelist',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa81f4e28f3?q=80&w=300',
    updates: [
      'Dash window shortened by 0.5s (cooldown refresh unchanged)',
      'Cloudburst smoke lifetime reduced by 1s',
      'Ultimate sword damage balanced',
    ],
  },
  {
    name: 'Omen',
    role: 'Controller',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=300',
    updates: [
      'Paranoia sound cue adjusted for clarity',
      'Dark Veil smoke speed increased slightly',
      'Shrouded Step refreshed upgrade buff in competitive',
    ],
  },
  {
    name: 'Brimstone',
    role: 'Controller',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=300',
    updates: [
      'Orbital Strike cost reduced from 7 to 6 points',
      'Stim Beacon cast time improved',
      'Molly incendiary damage timings tuned',
    ],
  },
]

const gameplayUpdates = [
  {
    title: 'COMPETITIVE',
    description:
      'Ranked match adjustments and queue stability improvements for better competitive integrity.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    title: 'ANTI-CHEAT',
    description:
      'Vanguard system enhancements for detecting and preventing cheating across all modes.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'ECONOMY',
    description:
      'Weapon and ability economy rebalancing to promote strategic variety.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v4c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 14v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
      </svg>
    ),
  },
]

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-1 h-8 bg-pink-500 rounded-full shrink-0" />
      <h2 className="text-xl font-bold uppercase tracking-wide text-white">{children}</h2>
    </div>
  )
}

export default function PostPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-6 py-5 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="border border-fuchsia-500/20 rounded-2xl px-8 py-5 bg-[#06010d]/90 backdrop-blur-xl flex items-center justify-between shadow-[0_0_40px_rgba(255,0,170,0.08)]">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h1>
            <p className="text-[11px] tracking-[0.35em] text-zinc-400 mt-1 uppercase">
              Gaming News & Esports
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
            {['Home', 'News', 'Esports', 'Agents', 'Guides', 'Features', 'Videos'].map((item, index) => (
              <button
                key={item}
                type="button"
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

          <div className="flex items-center gap-3 md:gap-5">
            <button type="button" className="lg:hidden text-3xl text-zinc-300 hover:text-white">
              ☰
            </button>
            <button type="button" className="text-zinc-300 hover:text-white text-xl hidden lg:block">
              ⌕
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-[#ee1978] to-[#ee1978] hover:opacity-90 transition px-4 md:px-7 py-3 rounded-xl font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]"
            >
              JOIN CITY
            </button>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="mt-5 text-sm text-zinc-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-pink-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-zinc-600">›</li>
            <li>
              <span className="hover:text-pink-400 cursor-pointer">News</span>
            </li>
            <li className="text-zinc-600">›</li>
            <li className="text-zinc-400">Valorant Update 8.11 Patch Notes & Changes</li>
          </ol>
        </nav>

        {/* Main grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 mt-5">
          {/* Article */}
          <article className="space-y-6">
            <div className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-6 md:p-8 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
              <p className="uppercase tracking-[0.3em] text-pink-500 text-xs font-semibold mb-4">
                Featured
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.08] tracking-tight uppercase">
                Valorant Update 8.11 Patch Notes & Changes
              </h1>

              <p className="mt-4 text-lg text-zinc-400 max-w-3xl">
                All new agent tweaks, map updates, and competitive changes you need to know.
              </p>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-6 pt-6 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-500 text-xs font-bold">
                      SC
                    </span>
                    <span className="text-zinc-300">SpikeCity Editorial</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-pink-500">◷</span> May 20, 2024
                  </span>
                  <span>8 min read</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-pink-500">◎</span> 12.5K Views
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-zinc-500">Share</span>
                  <div className="flex items-center gap-3">
                    {['𝕏', 'f', '⛓'].map((icon) => (
                      <button
                        key={icon}
                        type="button"
                        className="w-9 h-9 rounded-lg border border-fuchsia-500/30 text-zinc-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors text-sm"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="overflow-hidden rounded-3xl border border-fuchsia-500/20 aspect-[16/7]">
              <img
                src={HERO_IMAGE}
                alt="Valorant spike in neon city"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-6 md:p-8 space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                The latest VALORANT patch 8.11 brings comprehensive updates across multiple game
                systems, affecting gameplay balance and competitive integrity. This update focuses on
                agent balancing, map adjustments, and competitive system refinements to ensure a
                fresh and fair experience for all players.
              </p>
              <p>
                Whether you&apos;re climbing ranked or following the pro scene, these changes will
                shape how teams draft agents and approach each round. Below is a full breakdown of
                what&apos;s new in patch 8.11.
              </p>

              <SectionHeading>Agent Changes</SectionHeading>

              <div className="space-y-4">
                {agentChanges.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex flex-col sm:flex-row gap-0 rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/80 overflow-hidden"
                  >
                    <div className="sm:w-[200px] shrink-0 relative min-h-[180px] sm:min-h-0">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0a0012] via-transparent to-transparent" />
                      <div className="relative z-10 p-5 sm:absolute sm:bottom-0 sm:left-0">
                        <p className="text-2xl font-bold uppercase">{agent.name}</p>
                        <p className="text-pink-500 text-sm font-semibold uppercase tracking-wider">
                          {agent.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 p-5 sm:p-6 border-t sm:border-t-0 sm:border-l border-fuchsia-500/10">
                      <p className="text-pink-500 text-sm font-bold uppercase tracking-wider mb-3">
                        Updates
                      </p>
                      <ul className="space-y-2 text-base text-zinc-300">
                        {agent.updates.map((update) => (
                          <li key={update} className="flex gap-2">
                            <span className="text-pink-500 shrink-0">•</span>
                            <span>{update}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <SectionHeading>Gameplay & Competitive Updates</SectionHeading>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gameplayUpdates.map((item) => (
                  <div key={item.title} className="text-center px-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-pink-500/40 text-pink-500 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-pink-500 font-bold uppercase tracking-wide text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Post navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Previous Post</p>
                <Link
                  to="/post"
                  className="text-pink-500 font-semibold hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <span>←</span>
                  <span>ISO Agent Abilities & Gameplay Breakdown</span>
                </Link>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:text-right">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Next Post</p>
                <Link
                  to="/post"
                  className="text-pink-500 font-semibold hover:text-pink-400 transition-colors flex items-center gap-2 sm:justify-end"
                >
                  <span>Ascent Map Guide: Callouts, Tips & Tricks</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6 shadow-[0_0_40px_rgba(255,0,170,0.05)]">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold mb-6">
                Trending Agents
              </h3>
              <div className="space-y-5">
                {trendingAgents.map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-14 h-14 rounded-xl object-cover border border-fuchsia-500/20"
                      />
                      <div>
                        <p className="text-xl font-medium">{agent.name}</p>
                        <p className="text-zinc-500 text-sm">Play Rate</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-pink-500 text-2xl font-bold">{agent.rate}</p>
                      <p className="text-zinc-500 text-sm">Play Rate</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="w-full mt-8 border border-pink-500 text-pink-500 py-4 rounded-2xl font-semibold tracking-wide hover:bg-pink-500 hover:text-black transition-all"
              >
                VIEW ALL AGENTS
              </button>
            </section>

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                  Latest News
                </h3>
                <button type="button" className="text-pink-500 text-xs uppercase tracking-wider hover:text-pink-400">
                  View All →
                </button>
              </div>
              <div className="space-y-5">
                {sidebarNews.map((item) => (
                  <article key={item.title} className="flex gap-4 group">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl border border-fuchsia-500/10">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider mb-1">
                        <span className="text-pink-500 font-bold">{item.category}</span>
                        <span className="text-zinc-500">{item.time}</span>
                      </div>
                      <h4 className="font-semibold leading-snug group-hover:text-pink-400 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-xs mt-1">◉ {item.views}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Join The City
              </h3>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Be part of India&apos;s fastest growing gaming community.
              </p>
              <button
                type="button"
                className="w-full mt-6 bg-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)] hover:opacity-90 transition"
              >
                ⍟ JOIN CITY
              </button>
              <div className="flex items-center justify-center gap-2 mt-5 text-zinc-400 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span>12,541+ Members</span>
              </div>
            </section>

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Stay Updated
              </h3>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Get the latest news and esports updates in your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-6 bg-black/50 border border-fuchsia-500/20 rounded-xl px-4 py-4 outline-none focus:border-pink-500 text-white placeholder:text-zinc-600"
              />
              <button
                type="button"
                className="w-full mt-5 bg-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)] hover:opacity-90 transition"
              >
                SUBSCRIBE
              </button>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 px-6 py-6 border-t border-fuchsia-500/10 text-zinc-500">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h2>
            <p className="uppercase tracking-[0.3em] text-[10px] mt-1">Gaming News & Esports</p>
          </div>
          <p>© 2024 SpikeCity. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-2xl text-zinc-400">
            <span className="hover:text-pink-500 transition-colors cursor-pointer" title="Discord">
              ◈
            </span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer" title="Instagram">
              ◎
            </span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer" title="YouTube">
              ▶
            </span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer" title="Twitter">
              ◉
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
