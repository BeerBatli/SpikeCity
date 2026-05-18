import CategoryPage from '../CategoryPage'

const items = [
  {
    slug: 'why-ranked-feels-different-this-act',
    category: 'Opinion',
    title: 'Why Ranked Feels Different This Act',
    description: 'A closer look at economy, map picks, and how players are adapting.',
    image: 'https://images.unsplash.com/photo-1552820721-9303f9451f6d?q=80&w=900',
  },
  {
    slug: 'the-rise-of-utility-first-duelists',
    category: 'Deep Dive',
    title: 'The Rise Of Utility-First Duelists',
    description: 'How entry roles are changing as teams demand more from first contact.',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=900',
  },
  {
    slug: 'inside-the-indian-fps-scene',
    category: 'Culture',
    title: 'Inside The Indian FPS Scene',
    description: 'Players, communities, and events shaping the next wave of competition.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900',
  },
]

export default function Features() {
  return (
    <CategoryPage
      activePath="/features"
      title="Features"
      kicker="Stories"
      description="Longer reads, opinion pieces, interviews, and gaming culture coverage."
      items={items}
    />
  )
}
