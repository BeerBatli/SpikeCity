import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PostRouter from './post/PostRouter'
import { VALORANT_POST_SLUG } from './post/postsMeta'
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

        <Route path="/post/:slug" element={<PostRouter />} />
        <Route path="/post" element={<Navigate to={`/post/${VALORANT_POST_SLUG}`} replace />} />
        <Route path="/news" element={<News />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/build" element={<Build />} />
        <Route path="/features" element={<Features />} />
        <Route path="/video" element={<Video />} />

      </Routes>

    </BrowserRouter>
  )
}
