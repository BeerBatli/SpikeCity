import CategoryPage from '../CategoryPage'

const items = [
  {
    slug: 'valorant-update-8-11-patch-notes',
    category: 'Patch',
    title: 'Valorant Update 8.11 Patch Notes',
    description: 'Agent tuning, map fixes, and competitive changes from the latest update.',
    image: 'https://images.unsplash.com/photo-1542751371-29b4c2a7f211?q=80&w=900',
  },
  {
    slug: 'new-duelist-ability-preview',
    category: 'Agents',
    title: 'New Duelist Ability Preview',
    description: 'A quick read on how the newest duelist fits into ranked and team play.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=900',
  },
  {
    slug: 'spikecity-weekly-roundup',
    category: 'Community',
    title: 'SpikeCity Weekly Roundup',
    description: 'The stories, roster moves, and clips worth catching up on this week.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=900',
  },
]

export default function News() {
  return (
    <CategoryPage
      activePath="/news"
      title="News"
      kicker="Latest"
      description="Fresh gaming updates, patch notes, and community stories from SpikeCity."
      items={items}
    />
  )
}
