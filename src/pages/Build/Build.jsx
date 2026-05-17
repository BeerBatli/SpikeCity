import CategoryPage from '../CategoryPage'

const items = [
  {
    category: 'Loadout',
    title: 'Best Economy Round Buys',
    description: 'Smart budget choices for pistol wins, force rounds, and bonus conversions.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=900',
  },
  {
    category: 'Agents',
    title: 'Controller Setups For Ranked',
    description: 'Reliable smoke plans that work without needing a five-stack.',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa81f4e28f3?q=80&w=900',
  },
  {
    category: 'Settings',
    title: 'Low-Latency Competitive Setup',
    description: 'Video, input, and crosshair settings for cleaner ranked sessions.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e9c6e3?q=80&w=900',
  },
]

export default function Build() {
  return (
    <CategoryPage
      activePath="/build"
      title="Build"
      kicker="Guides"
      description="Loadouts, agent setups, settings, and practical builds for better games."
      items={items}
    />
  )
}
