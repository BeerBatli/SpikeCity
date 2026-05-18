import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'

export default function CategoryPage({ activePath, title, kicker, description, items }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-3 sm:px-6 py-3 sm:py-5 max-w-[1600px] mx-auto">
        <SiteHeader activePath={activePath} />

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
            {items.map((item) => {
              const inner = (
                <>
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-pink-500 text-xs font-bold uppercase tracking-[0.2em]">{item.category}</p>
                    <h3 className="mt-3 text-xl sm:text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-3 text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                </>
              )
              return item.slug ? (
                <Link
                  key={item.title}
                  to={`/post/${item.slug}`}
                  className="rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/80 overflow-hidden block transition hover:border-pink-500/40 hover:shadow-[0_0_24px_rgba(255,0,170,0.12)]"
                >
                  {inner}
                </Link>
              ) : (
                <article key={item.title} className="rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/80 overflow-hidden">
                  {inner}
                </article>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
