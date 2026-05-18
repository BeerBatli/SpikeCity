import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import UpcomingGames from '../components/UpcomingGames'
const HERO_IMAGE =
  'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779105679/Computer_setup_dasqao.webp'

const TOTAL_PRICE = '₹1,03,594'

const SEO_KEYWORDS = [
  'gaming PC under 100000 India',
  'best gaming PC build India 2026',
  'Ryzen 5 7500F gaming PC',
  'RX 9060 XT 16GB India',
  'budget gaming PC build guide',
  '₹1 lakh gaming PC 1080p',
  'AM5 DDR5 build India',
  'SpikeCity PC build',
]

const overviewRows = [
  { component: 'CPU', name: 'Ryzen 5 7500F', price: '₹14,194' },
  { component: 'Motherboard', name: 'MSI Pro B650M-E', price: '₹7,416' },
  { component: 'Graphics Card', name: 'Sapphire Pulse 9060XT 16GB', price: '₹44,999' },
  { component: 'RAM', name: 'Corsair Vengeance 16GB DDR5', price: '₹17,799' },
  { component: 'SSD', name: 'WD Blue SN5100', price: '₹8,888' },
  { component: 'Power Supply', name: 'CM MWE V3 650W', price: '₹4,899' },
  { component: 'Cabinet', name: 'MSI MAG Forge 320R White', price: '₹5,399' },
  { component: 'Total', name: '', price: TOTAL_PRICE, highlight: true },
]

const components = [
  {
    id: 'cpu',
    title: 'CPU — AMD Ryzen 5 7500F',
    price: '₹14,194',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/7500f_hdofuw.webp',
    alt: 'AMD Ryzen 5 7500F 6-core 12-thread desktop processor box pack for AM5 gaming builds',
    priceTracker:
      'https://pcpricetracker.in/gen/products/189c16995de58bb41c42aa84d3f11f93',
    amazon:
      'https://www.amazon.in/dp/B0D2RWZ2LK?th=1&psc=1&linkCode=ll2&tag=beerbatli-21&linkId=1837b14c27f1c1b2ad2957954c1547d0&ref_=as_li_ss_tl',
    points: [
      '6 cores / 12 threads — strong for modern 1080p and 1440p gaming.',
      'No integrated graphics keeps cost down; pair with a discrete GPU.',
      'Efficient Zen 4 chip that runs cool with a stock or budget tower cooler.',
    ],
  },
  {
    id: 'motherboard',
    title: 'Motherboard — MSI Pro B650M-E',
    price: '₹7,416',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/MSI_Pro_B650m_mrsj4i.webp',
    alt: 'MSI PRO B650M-E micro-ATX AM5 motherboard for Ryzen 7000 series CPUs',
    priceTracker:
      'https://pcpricetracker.in/gen/products/b72d901b191eb8e6f3d09bcd49e35e99',
    amazon:
      'https://www.amazon.in/dp/B0DTHK5YS9?th=1&psc=1&linkCode=ll2&tag=beerbatli-21&linkId=fd26702609c969907bdf23276cf398ec&ref_=as_li_ss_tl',
    points: [
      'AM5 socket with DDR5 support and PCIe 4.0 for current-gen GPUs and SSDs.',
      'Micro-ATX footprint fits compact cases without sacrificing essentials.',
      'Solid pick for a value-focused gaming rig under ₹1 lakh.',
    ],
  },
  {
    id: 'gpu',
    title: 'Graphics Card — Sapphire Pulse RX 9060 XT 16GB',
    price: '₹44,999',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/9060XT_wscwbi.webp',
    alt: 'Sapphire Pulse AMD Radeon RX 9060 XT 16GB GDDR6 dual-fan graphics card',
    priceTracker:
      'https://pcpricetracker.in/gen/products/22c736259605ed9c6c0aec00432301f6',
    amazon:
      'https://www.amazon.in/Sapphire-Pulse-RadeonTM-9060-Gaming/dp/B0F8C6MWSY?linkCode=ll2&tag=beerbatli-21&linkId=5683f3a3f709364e4ceb70d7c3e84b45&ref_=as_li_ss_tl',
    points: [
      '16GB VRAM future-proofs textures and mod-heavy titles.',
      'Dual-fan Pulse design balances thermals and noise in mid-size cases.',
      'The biggest spend in this list — and the main driver of in-game FPS.',
    ],
  },
  {
    id: 'ram',
    title: 'RAM — Corsair Vengeance 16GB DDR5 (1×16GB) 5200MHz',
    price: '₹17,799',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/Corsair_Ram_vtsgqn.webp',
    alt: 'Corsair Vengeance 16GB DDR5 5200MHz C40 single stick desktop memory module',
    priceTracker:
      'https://pcpricetracker.in/gen/products/78644ebfab7709560258b0c3c5cfe3b4',
    amazon:
      'https://www.amazon.in/CORSAIR-Vengeance-1x16GB-5200MHz-CMK16GX5M1B5200C40/dp/B0BKR2S4F1?linkCode=ll2&tag=beerbatli-21&linkId=2b91514569c52df4b2f85b054b50b6f0&ref_=as_li_ss_tl',
    priceAlert: true,
    points: [
      '16GB is the practical minimum for gaming and multitasking in 2026.',
      'Single stick leaves a second slot free — add another 16GB stick later for 32GB dual-channel.',
      '5200MHz C40 is a sensible match for this CPU and board on a budget.',
    ],
  },
  {
    id: 'ssd',
    title: 'SSD — WD Blue SN5100 500GB NVMe',
    price: '₹8,888',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/WD_Sn5100_wnhcwx.webp',
    alt: 'Western Digital Blue SN5100 500GB NVMe Gen4 M.2 internal SSD',
    priceTracker:
      'https://pcpricetracker.in/gen/products/48cd952aff34d9ea86a197b207636635',
    amazon:
      'https://www.amazon.in/Western-Digital-Warranty-Internal-WDS500G5B0E-00CPE0/dp/B0FJ8VGNK8?linkCode=ll2&tag=beerbatli-21&linkId=80e118680c2ca056aa87b406d07b4e41&ref_=as_li_ss_tl',
    priceAlert: true,
    points: [
      '500GB fits Windows, a few AAA titles, and core apps comfortably.',
      'Gen4 NVMe speeds keep load times and patch installs snappy.',
      'WD Blue line is widely available with solid warranty support in India.',
    ],
  },
  {
    id: 'psu',
    title: 'Power Supply — Cooler Master MWE Bronze 650W V3',
    price: '₹4,899',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/CM_650W_Bronze_njkycf.webp',
    alt: 'Cooler Master MWE Bronze 650W V3 80 Plus Bronze ATX 3.1 power supply unit',
    priceTracker:
      'https://pcpricetracker.in/gen/products/bf0b129df4010db5fb4d7630b0b890c0',
    amazon:
      'https://www.amazon.in/Cooler-Master-Bronze-Power-Supply/dp/B0DBV8WDFP?linkCode=ll2&tag=beerbatli-21&linkId=7363ff894c8ed24d1446f7d6f3a7df0a&ref_=as_li_ss_tl',
    points: [
      '650W leaves headroom for the 9060 XT without running the PSU at max load.',
      '80 Plus Bronze efficiency and ATX 3.1 compatibility for modern GPUs.',
      'Do not cheap out on the PSU — stability protects every other component.',
    ],
  },
  {
    id: 'cabinet',
    title: 'Cabinet — MSI MAG Forge 320R Airflow (White)',
    price: '₹5,399',
    image: 'https://res.cloudinary.com/dmnwaytt8/image/upload/v1779102076/MSI_Mag_320R_White_s3qnfc.webp',
    alt: 'MSI MAG Forge 320R Airflow mid-tower ATX gaming PC case in white',
    priceTracker:
      'https://pcpricetracker.in/gen/products/5c4e8fca689af60a6a5a64e7eef7bcb6',
    amazon:
      'https://www.amazon.in/MSI-Forge-Airflow-Premium-Gaming/dp/B0CXF9DWCG?linkCode=ll2&tag=beerbatli-21&linkId=6d49a250901c8aba35379429c258b9dc&ref_=as_li_ss_tl',
    points: [
      'Mesh airflow front panel helps GPU and CPU stay cooler under load.',
      'Mid-tower size fits this micro-ATX board and dual-fan graphics card.',
      'Clean white finish if you care about desk aesthetics.',
    ],
  },
]

const faqs = [
  {
    q: 'Is a gaming PC under ₹1 lakh good enough for 1080p gaming in India?',
    a: 'Yes. With a Ryzen 5 7500F and RX 9060 XT 16GB, this build targets high settings at 1080p and can handle many titles at 1440p. The GPU is the main performance driver at this budget.',
  },
  {
    q: 'Why only buy 16GB RAM and a 512GB SSD right now?',
    a: 'DDR5 memory and NVMe SSD prices in India are inflated compared to usual street rates. Buying a single 16GB stick and a 500GB boot drive keeps the initial bill lower; add a second RAM stick and a larger SSD when prices normalize.',
  },
  {
    q: 'Can I upgrade to 32GB RAM later?',
    a: 'Absolutely. The B650M-E has two DDR5 slots. Start with one 16GB module, then add a matching 16GB stick for dual-channel 32GB when pricing makes sense.',
  },
  {
    q: 'Do I need an aftermarket CPU cooler?',
    a: 'The Ryzen 5 7500F usually ships with a capable stock cooler for gaming loads. If you live in a hot climate or want lower noise, budget ₹2,000–₹4,000 for a tower cooler later.',
  },
  {
    q: 'Is 650W enough for the RX 9060 XT?',
    a: '650W from a reputable Bronze-or-better unit is appropriate for this CPU and GPU combo, with room for typical upgrades like extra storage or fans.',
  },
  {
    q: 'How often should I recheck prices before buying?',
    a: 'PC part prices in India shift weekly. Use PCPriceTracker and Amazon links in this guide, and re-total the build before checkout — especially RAM, SSD, and GPU.',
  },
]

const sidebarNews = [
  {
    slug: 'valorant-update-8-11-patch-notes',
    category: 'PATCH',
    time: 'Featured',
    title: 'Valorant Update 8.11 Patch Notes',
    views: '12.5K',
    image: 'https://i.ibb.co/gZDjKnFn/Chat-GPT-Image-May-15-2026-04-29-14-AM.png',
  },
  {
    slug: 'controller-setups-for-ranked',
    category: 'GUIDES',
    time: 'Build',
    title: 'Controller Setups For Ranked',
    views: '5.1K',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa81f4e28f3?q=80&w=400',
  },
  {
    slug: 'low-latency-competitive-setup',
    category: 'SETTINGS',
    time: 'Guide',
    title: 'Low-Latency Competitive Setup',
    views: '4.8K',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e9c6e3?q=80&w=400',
  },
]

function CalendarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
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

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowLeftIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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

function AmazonSponsoredLink({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center gap-2 rounded-xl bg-[#ee1978] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
      aria-label="View on Amazon (sponsored)"
    >
      <span>View on Amazon</span>
      <span className="rounded-md bg-white/25 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
        Sponsored
      </span>
      <ArrowRightIcon className="w-3.5 h-3.5" />
    </a>
  )
}

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-1 h-8 bg-pink-500 rounded-full shrink-0" />
      <h2 className="text-xl font-bold uppercase tracking-wide text-white">{children}</h2>
    </div>
  )
}

function ComponentCard({ part, index }) {
  return (
    <section id={part.id} className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row gap-0 rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/80 overflow-hidden">
        <div className="sm:w-[220px] shrink-0 relative min-h-[180px] sm:min-h-[220px] bg-[#0d0018]">
          {part.image ? (
            <img src={part.image} alt={part.alt} className="absolute inset-0 w-full h-full object-contain p-4" />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center p-6 text-center text-zinc-500 text-xs sm:text-sm"
              role="img"
              aria-label={part.alt}
            >
              Cooler Master MWE Bronze 650W
            </div>
          )}
          <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-pink-500/90 flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
        </div>
        <div className="flex-1 p-5 sm:p-6 border-t sm:border-t-0 sm:border-l border-fuchsia-500/10">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{part.title}</h3>
            <p className="text-pink-500 text-xl font-bold shrink-0">{part.price}</p>
          </div>
          {part.priceAlert && (
            <p className="mb-4 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200 leading-relaxed">
              <strong className="text-amber-100">Price tip:</strong> Buy this part now only if you
              must — RAM and SSD street prices are above normal. A single 16GB stick and 512GB NVMe
              is enough to complete the build; expand when pricing cools down.
            </p>
          )}
          <ul className="space-y-2 text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
            {part.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink-500 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={part.priceTracker}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-pink-500/40 px-4 py-2.5 text-sm font-semibold text-pink-400 hover:bg-pink-500/10 transition-colors"
            >
              Check on PCPriceTracker
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
            <AmazonSponsoredLink href={part.amazon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GamingPcBuildPost() {
  useEffect(() => {
    const title = 'Best Gaming PC Setup Under ₹1 Lakh [UPDATED] | SpikeCity'
    const description =
      'Full ₹1.03 lakh gaming PC build for India: Ryzen 5 7500F, RX 9060 XT 16GB, DDR5, NVMe, parts list with prices, buy links, and FAQ. Updated parts picker for 1080p gaming.'

    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute('content', SEO_KEYWORDS.join(', '))

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Best Gaming PC Setup Under ₹1 Lakh [UPDATED]',
          description,
          image: HERO_IMAGE,
          author: { '@type': 'Organization', name: 'SpikeCity Editorial' },
          publisher: { '@type': 'Organization', name: 'SpikeCity' },
          datePublished: '2026-05-18',
          dateModified: '2026-05-18',
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'gaming-pc-build-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.getElementById('gaming-pc-build-schema')?.remove()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff00a84d,transparent_35%),radial-gradient(circle_at_bottom,#8b00ff33,transparent_30%)] pointer-events-none" />

      <div className="relative z-10 px-3 sm:px-6 py-3 sm:py-5 max-w-[1600px] mx-auto">
        <SiteHeader activePath="/build" />

        <nav className="mt-4 sm:mt-5 text-xs sm:text-sm text-zinc-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-pink-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-zinc-600">
              <ChevronRightIcon />
            </li>
            <li>
              <Link to="/build" className="hover:text-pink-400 transition-colors">
                Build
              </Link>
            </li>
            <li className="text-zinc-600">
              <ChevronRightIcon />
            </li>
            <li className="text-zinc-400 min-w-0">Best Gaming PC Setup Under ₹1 Lakh</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 mt-5">
          <article className="space-y-6">
            <div className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
              <p className="uppercase tracking-[0.3em] text-pink-500 text-xs font-semibold mb-4">
                Build guide
              </p>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-[1.12] sm:leading-[1.08] tracking-tight uppercase">
                Best Gaming PC Setup Under ₹1 Lakh [UPDATED]
              </h1>

              <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
                A complete parts list for Indian buyers — seven core components, live-style pricing,
                and direct links to track deals. Built for 1080p high-refresh gaming with room to
                upgrade RAM and storage later.
              </p>

              <div className="mt-5 flex flex-wrap gap-2" aria-label="Article keywords">
                {SEO_KEYWORDS.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 px-3 py-1 text-[11px] sm:text-xs text-zinc-300 uppercase tracking-wide"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-400 mt-6 pt-6 border-t border-white/5">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-500 text-xs font-bold">
                    SC
                  </span>
                  <span className="text-zinc-300">SpikeCity Editorial</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-pink-500" /> May 18, 2026
                </span>
                <span>12 min read</span>
                <span className="flex items-center gap-1.5">
                  <EyeIcon className="w-4 h-4 text-pink-500" /> 9.2K Views
                </span>
              </div>
            </div>

            {/* Overview table */}
            <div className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(255,0,170,0.06)]">
              <SectionHeading>Parts overview</SectionHeading>
              <p className="text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed">
                Short on time? Use this table for the full bill of materials, then scroll for
                component breakdowns, buying advice, and FAQ.
              </p>
              <div className="overflow-x-auto -mx-1">
                <table className="w-full min-w-[520px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-fuchsia-500/20 text-pink-400 uppercase tracking-wider text-xs">
                      <th className="py-3 pr-4 font-semibold">Components</th>
                      <th className="py-3 pr-4 font-semibold">Name</th>
                      <th className="py-3 font-semibold text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overviewRows.map((row) => (
                      <tr
                        key={row.component}
                        className={`border-b border-white/5 ${
                          row.highlight ? 'bg-pink-500/10 text-white font-bold' : 'text-zinc-300'
                        }`}
                      >
                        <td className="py-3 pr-4">{row.component}</td>
                        <td className="py-3 pr-4">{row.name || '—'}</td>
                        <td className={`py-3 text-right ${row.highlight ? 'text-pink-400' : ''}`}>
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-pink-400 font-semibold text-lg">Total build cost: {TOTAL_PRICE}</p>
            </div>

            {/* RAM / SSD callout */}
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 sm:p-6">
              <h2 className="text-amber-100 font-bold text-lg uppercase tracking-wide mb-2">
                Important: RAM &amp; SSD pricing
              </h2>
              <p className="text-amber-200/90 text-sm sm:text-base leading-relaxed">
                <strong>Buy the 512GB SSD and 16GB RAM only for now</strong> if you are assembling
                this PC today. DDR5 memory and NVMe SSD prices in India are well above their usual
                street levels — the table reflects current tracker lows, but many sellers are
                charging a premium. Pair one 16GB stick with a 500GB boot drive to stay in budget,
                then add a second RAM module and more storage when the market settles.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-fuchsia-500/20 aspect-[4/3] sm:aspect-[16/7]">
              <img
                src={HERO_IMAGE}
                alt="Sapphire Pulse AMD Radeon RX 9060 XT 16GB graphics card for budget 1080p gaming PC build India"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-3xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:p-6 md:p-8 space-y-8 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                This ₹1 lakh gaming PC is tuned for value in the Indian market: AM5 platform for
                future CPU upgrades, a 16GB graphics card at the heart of the build, and reliable
                basics everywhere else. Prices were sourced from PCPriceTracker lows and Amazon
                listings — always re-check before you buy.
              </p>
              <p>
                We skipped a premium AIO, RGB extras, and Wi-Fi add-ons to keep the total near{' '}
                {TOTAL_PRICE}. You still get a modern DDR5 + PCIe 4.0 platform that will not feel
                outdated within a year.
              </p>

              <p className="rounded-xl border border-zinc-500/30 bg-zinc-500/5 px-4 py-3 text-sm text-zinc-400 leading-relaxed">
                <strong className="text-zinc-300">Disclosure:</strong> Amazon links in this guide are
                sponsored. As an Amazon Associate, SpikeCity earns from qualifying purchases at no
                extra cost to you.
              </p>

              <SectionHeading>Component breakdown</SectionHeading>
              <div className="space-y-6">
                {components.map((part, index) => (
                  <ComponentCard key={part.id} part={part} index={index} />
                ))}
              </div>

              <SectionHeading>What to expect in games</SectionHeading>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-pink-500 shrink-0">•</span>
                  <span>
                    <strong className="text-white">1080p high / ultra:</strong> VALORANT, Fortnite,
                    CS2, and most esports titles at very high frame rates.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-500 shrink-0">•</span>
                  <span>
                    <strong className="text-white">AAA 1080p:</strong> Expect high settings in most
                    current releases; dial back ray tracing unless you use FSR.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-500 shrink-0">•</span>
                  <span>
                    <strong className="text-white">1440p:</strong> Playable in many titles with
                    tuned settings — the 9060 XT 16GB has the VRAM headroom for it.
                  </span>
                </li>
              </ul>

              <SectionHeading>Frequently asked questions</SectionHeading>
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-fuchsia-500/15 bg-[#0a0012]/60 open:border-pink-500/30"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-pink-500 text-xl group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-4 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Previous</p>
                <Link
                  to="/build"
                  className="text-pink-500 font-semibold hover:text-pink-400 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <ArrowLeftIcon />
                  <span>All build guides</span>
                </Link>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/20 bg-[#05000b]/90 p-5 sm:text-right">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Next guide</p>
                <Link
                  to="/post/controller-setups-for-ranked"
                  className="text-pink-500 font-semibold hover:text-pink-400 transition-colors flex items-center gap-2 sm:justify-end text-sm sm:text-base"
                >
                  <span>Controller Setups For Ranked</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <UpcomingGames />

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-lg font-bold mb-4">
                In this build
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                {overviewRows
                  .filter((r) => !r.highlight)
                  .map((r) => (
                    <li key={r.component} className="flex justify-between gap-2 border-b border-white/5 pb-2">
                      <span>{r.name}</span>
                      <span className="text-pink-400 shrink-0">{r.price}</span>
                    </li>
                  ))}
              </ul>
              <p className="mt-4 text-pink-400 font-bold">{TOTAL_PRICE} total</p>
            </section>

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                  More guides
                </h3>
                <Link
                  to="/build"
                  className="inline-flex items-center gap-2 text-pink-500 text-xs uppercase tracking-wider hover:text-pink-400"
                >
                  <span>View All</span>
                  <ArrowRightIcon />
                </Link>
              </div>
              <div className="space-y-5">
                {sidebarNews.map((item) => (
                  <Link
                    key={item.title}
                    to={`/post/${item.slug}`}
                    className="flex gap-4 group rounded-xl -m-1 p-1 hover:bg-white/5 transition-colors"
                  >
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
                      <p className="inline-flex items-center gap-1.5 text-zinc-500 text-xs mt-1">
                        <EyeIcon className="w-3.5 h-3.5" />
                        {item.views}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-fuchsia-500/20 bg-[#07000e]/90 p-5 sm:p-6">
              <h3 className="text-pink-500 uppercase tracking-[0.18em] text-xl font-bold">
                Join The City
              </h3>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Be part of India&apos;s fastest growing gaming community.
              </p>
              <button
                type="button"
                className="w-full mt-6 bg-[#ee1978] py-4 rounded-2xl text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,170,0.35)] hover:opacity-90 transition inline-flex items-center justify-center gap-2"
              >
                <CityIcon />
                <span>JOIN CITY</span>
              </button>
            </section>
          </aside>
        </div>

        <footer className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 mt-8 px-3 sm:px-6 py-6 border-t border-fuchsia-500/10 text-zinc-500 text-center lg:text-left">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-pink-500">Spike</span>
              <span className="text-cyan-400">City</span>
            </h2>
            <p className="uppercase tracking-[0.3em] text-[10px] mt-1">Gaming News & Esports</p>
          </div>
          <p>&copy; 2026 SpikeCity. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
