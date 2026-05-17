import CategoryPage from '../CategoryPage'

const items = [
  {
    category: 'VCT',
    title: 'Masters Shanghai Draw Revealed',
    description: 'Top teams line up for the next international bracket.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=900',
  },
  {
    category: 'Teams',
    title: 'Roster Watch: Split Two',
    description: 'The biggest swaps and role changes heading into the next stage.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900',
  },
  {
    category: 'Analysis',
    title: 'How Pro Teams Are Attacking Ascent',
    description: 'Set plays, mid control, and retake patterns from the current meta.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=900',
  },
]

export default function Esports() {
  return (
    <CategoryPage
      activePath="/esports"
      title="Esports"
      kicker="Competitive"
      description="Tournament coverage, roster updates, and pro-level match analysis."
      items={items}
    />
  )
}
