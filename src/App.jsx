export default function SpikeCityLandingPage() {
  const trendingAgents = [
    { name: 'Jett', rate: '54.3%', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200' },
    { name: 'Reyna', rate: '51.2%', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200' },
    { name: 'Raze', rate: '48.7%', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=200' },
    { name: 'Omen', rate: '47.1%', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=200' },
    { name: 'KAY/O', rate: '45.8%', image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=200' },
  ];

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
      description: 'Everything you need to know about VALORANT’s new duelist – ISO.',
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
            <button className="lg:hidden text-3xl text-zinc-300 hover:text-white">☰</button>
            <button className="text-zinc-300 hover:text-white text-xl hidden lg:block">⌕</button>
            <button className="bg-gradient-to-r from-[#ee1978] to-[#ee1978] hover:opacity-90 transition px-4 md:px-7 py-3 rounded-xl font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]">
              JOIN CITY
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 mt-5">
          {/* Hero + News */}
          <div className="space-y-5">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-[#090012] min-h-[520px] md:h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600"
                alt="Cyberpunk"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07000f] via-[#13001d]/90 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#ff00aa55,transparent_35%)]" />

              <div className="relative z-10 max-w-2xl px-5 md:px-12 pt-8">
                <p className="uppercase tracking-[0.3em] text-pink-500 text-sm mb-5">
                  Featured
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
                  VALORANT UPDATE 8.11 PATCH NOTES & CHANGES
                </h2>

                <p className="mt-6 text-xl text-zinc-300 leading-relaxed max-w-xl">
                  All new agent tweaks, map updates, and competitive changes you need to know.
                </p>

                <button className="mt-10 bg-gradient-to-r from-[#ee1978] to-[#ee1978] px-8 py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_30px_rgba(255,0,170,0.45)] hover:scale-[1.02] transition-transform">
                  EXPLORE NEWS
                </button>
              </div>

              <div className="absolute bottom-8 left-12 flex gap-3">
                <div className="w-8 h-1 rounded-full bg-pink-500" />
                <div className="w-4 h-1 rounded-full bg-zinc-600" />
                <div className="w-4 h-1 rounded-full bg-zinc-600" />
              </div>
            </section>

            {/* Latest News */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-6 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold tracking-wide uppercase">Latest News</h3>
                <button className="text-pink-500 text-sm uppercase tracking-wider hover:text-pink-400">
                  View All News →
                </button>
              </div>

              <div className="space-y-5">
                {newsItems.map((item) => (
                  <article
                    key={item.title}
                    className="group flex flex-col md:flex-row gap-5 border-b border-white/5 pb-5 last:border-none"
                  >
                    <div className="w-full md:w-[320px] h-[220px] md:h-[120px] overflow-hidden rounded-2xl shrink-0 border border-fuchsia-500/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 flex justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] mb-3">
                          <span className="text-pink-500 font-bold">{item.category}</span>
                          <span className="text-zinc-500">{item.time}</span>
                        </div>

                        <h4 className="text-3xl font-semibold leading-tight mb-3 group-hover:text-pink-400 transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-zinc-400 text-lg">{item.description}</p>

                        <div className="flex items-center gap-6 mt-4 text-sm text-zinc-500">
                          <span>◉ {item.stats}</span>
                          <span>☰ {item.comments}</span>
                        </div>
                      </div>

                      <button className="text-zinc-500 hover:text-pink-500 text-xl self-start mt-2">
                        ⌑
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Trending */}
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
                        <p className="text-2xl font-medium">{agent.name}</p>
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

              <button className="w-full mt-8 border border-pink-500 text-pink-500 py-4 rounded-2xl font-semibold tracking-wide hover:bg-pink-500 hover:text-black transition-all">
                VIEW ALL AGENTS
              </button>
            </section>

            {/* Join */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Join The City
              </h3>

              <p className="text-zinc-400 text-lg mt-4 leading-relaxed">
                Be part of India’s fastest growing gaming community.
              </p>

              <button className="w-full mt-6 bg-gradient-to-r from-[#ee1978] to-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)]">
                ⍟ JOIN CITY
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-zinc-400">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                <span>12,541+ Members</span>
              </div>
            </section>

            {/* Subscribe */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Stay Updated
              </h3>

              <p className="text-zinc-400 text-lg mt-4 leading-relaxed">
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
        <footer className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 px-6 py-6 border-t border-fuchsia-500/10 text-zinc-500">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h2>
            <p className="uppercase tracking-[0.3em] text-[10px] mt-1">
              Gaming News & Esports
            </p>
          </div>

          <p>© 2024 SpikeCity. All Rights Reserved.</p>

          <div className="flex items-center gap-6 text-3xl">
            <span className="hover:text-pink-500 transition-colors cursor-pointer">◉</span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer">◎</span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer">▶</span>
            <span className="hover:text-pink-500 transition-colors cursor-pointer">◈</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
