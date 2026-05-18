import CategoryPage from '../CategoryPage'

const items = [
  {
    slug: 'best-clutches-of-the-week',
    category: 'Highlights',
    title: 'Best Clutches Of The Week',
    description: 'A quick reel of the sharpest aim, smartest utility, and wildest finishes.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900',
  },
  {
    slug: 'pro-retake-breakdown',
    category: 'Breakdown',
    title: 'Pro Retake Breakdown',
    description: 'Frame-by-frame reads on spacing, timing, and utility usage.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=900',
  },
  {
    slug: 'three-lineups-you-can-use-today',
    category: 'Guide',
    title: 'Three Lineups You Can Use Today',
    description: 'Short, practical clips for ranked utility on common map spots.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900',
  },
]

export default function Video() {
  return (
    <CategoryPage
      activePath="/video"
      title="Video"
      kicker="Watch"
      description="Highlights, breakdowns, clips, and fast visual guides from SpikeCity."
      items={items}
    />
  )
}
