import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import News from './pages/News/News'
import Esports from './pages/Esports/Esports'
import Build from './pages/Build/Build'
import Features from './pages/Features/Features'
import Video from './pages/Video/Video'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/post" element={<PostPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/build" element={<Build />} />
        <Route path="/features" element={<Features />} />
        <Route path="/video" element={<Video />} />

      </Routes>

    </BrowserRouter>
  )
}
