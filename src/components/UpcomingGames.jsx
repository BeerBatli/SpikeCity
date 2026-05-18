import { useEffect, useState } from 'react'

const IST = 'Asia/Kolkata'

const upcomingGames = [
  {
    name: 'GTA VI',
    platform: 'PS5 / Xbox / PC',
    releaseAt: '2026-11-19T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200',
  },
  {
    name: 'Donkey Kong Bananza',
    platform: 'Nintendo Switch 2',
    releaseAt: '2026-07-17T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1552820721-9303f9451f6d?q=80&w=200',
  },
  {
    name: 'Mafia: The Old Country',
    platform: 'PS5 / Xbox / PC',
    releaseAt: '2026-08-08T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=200',
  },
  {
    name: 'Hollow Knight: Silksong',
    platform: 'Multi-platform',
    releaseAt: '2026-09-01T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200',
  },
  {
    name: 'Perfect Dark',
    platform: 'Xbox / PC',
    releaseAt: '2026-09-05T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=200',
  },
  {
    name: 'Ghost of Yōtei',
    platform: 'PS5',
    releaseAt: '2026-10-02T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=200',
  },
  {
    name: 'Battlefield 6',
    platform: 'PS5 / Xbox / PC',
    releaseAt: '2026-10-10T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=200',
  },
  {
    name: 'Fable',
    platform: 'Xbox / PC',
    releaseAt: '2026-10-13T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e9c6e3?q=80&w=200',
  },
  {
    name: 'Metroid Prime 4',
    platform: 'Nintendo Switch',
    releaseAt: '2026-12-04T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa81f4e28f3?q=80&w=200',
  },
  {
    name: 'Kingdom Hearts IV',
    platform: 'PS5 / Xbox',
    releaseAt: '2027-02-14T00:00:00+05:30',
    image: 'https://images.unsplash.com/photo-1542751371-29b4c2a7f211?q=80&w=200',
  },
]

function formatReleaseDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    timeZone: IST,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getCountdown(iso, now) {
  const target = new Date(iso).getTime()
  const diff = target - now

  if (diff <= 0) {
    return { label: 'Out now', released: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return {
    released: false,
    label: `${days}d ${hours}h ${minutes}m ${seconds}s`,
    days,
    hours,
    minutes,
    seconds,
  }
}

function GameRow({ game, now }) {
  const countdown = getCountdown(game.releaseAt, now)

  return (
    <div className="flex items-center gap-3 sm:gap-4 py-3 border-b border-white/5 last:border-none">
      <img
        src={game.image}
        alt={game.name}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-fuchsia-500/20 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-base sm:text-lg font-semibold truncate">{game.name}</p>
        <p className="text-zinc-500 text-xs truncate">{game.platform}</p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{formatReleaseDate(game.releaseAt)} &middot; IST</p>
      </div>
      <div className="text-right shrink-0">
        <p
          className={`font-mono text-xs sm:text-sm font-bold tabular-nums ${
            countdown.released ? 'text-green-400' : 'text-pink-500'
          }`}
        >
          {countdown.label}
        </p>
        {!countdown.released && (
          <p className="text-zinc-600 text-[10px] uppercase tracking-wider mt-0.5">left</p>
        )}
      </div>
    </div>
  )
}

export default function UpcomingGames() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const sorted = [...upcomingGames].sort(
    (a, b) => new Date(a.releaseAt).getTime() - new Date(b.releaseAt).getTime(),
  )
  const loop = [...sorted, ...sorted]

  return (
    <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6 shadow-[0_0_40px_rgba(255,0,170,0.05)]">
      <div className="flex items-end justify-between gap-3 mb-4">
        <h3 className="text-pink-500 uppercase tracking-[0.16em] sm:tracking-[0.18em] text-lg sm:text-xl font-bold">Upcoming Games</h3>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">IST</span>
      </div>

      <div className="relative h-[320px] sm:h-[380px] overflow-hidden upcoming-games-mask">
        <div className="upcoming-games-scroll space-y-0">
          {loop.map((game, i) => (
            <GameRow key={`${game.name}-${i}`} game={game} now={now} />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w-full mt-5 sm:mt-6 border border-pink-500 text-pink-500 py-3.5 sm:py-4 rounded-2xl font-semibold tracking-wide hover:bg-pink-500 hover:text-black transition-all"
      >
        VIEW ALL GAMES
      </button>
    </section>
  )
}
