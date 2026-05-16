import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/post" element={<PostPage />} />

      </Routes>

    </BrowserRouter>
  )
}