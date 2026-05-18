import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'

export default function SimplePost({ meta }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-3 sm:px-6 py-3 sm:py-5 max-w-[960px] mx-auto">
        <SiteHeader activePath="/news" />

        <nav className="mt-4 text-xs sm:text-sm text-zinc-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-pink-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-zinc-600">/</li>
            <li>
              <Link to="/news" className="hover:text-pink-400 transition-colors">
                News
              </Link>
            </li>
            <li className="text-zinc-600">/</li>
            <li className="text-zinc-400 truncate max-w-[min(100%,14rem)] sm:max-w-md">{meta.title}</li>
          </ol>
        </nav>

        <article className="mt-6 rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 overflow-hidden shadow-[0_0_40px_rgba(255,0,170,0.06)]">
          <div className="aspect-[21/9] sm:aspect-[2.4/1] max-h-[320px]">
            <img src={meta.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-pink-500 text-xs font-bold uppercase tracking-[0.2em]">{meta.category}</p>
            <h1 className="mt-3 text-2xl sm:text-4xl font-black leading-tight uppercase">{meta.title}</h1>
            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed">{meta.description}</p>
            <p className="mt-6 text-zinc-500 text-sm leading-relaxed">
              Full article layout coming soon. For patch notes and deep dives, browse the rest of SpikeCity.
            </p>
            <Link
              to="/"
              className="inline-flex mt-8 text-pink-500 font-semibold hover:text-pink-400 transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
