import { Navigate, useParams } from 'react-router-dom'
import PostPage from './PostPage'
import GamingPcBuildPost from './GamingPcBuildPost'
import SimplePost from './SimplePost'
import { ARTICLES, BUILD_PC_SLUG, VALORANT_POST_SLUG } from './postsMeta'

const BUILD_SLUG_ALIASES = {
  'best-gaming-pc-setup-under-80000-updated': BUILD_PC_SLUG,
  'best-gaming-pc-setup-under-1-Lakh-updated': BUILD_PC_SLUG,
}

export default function PostRouter() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to={`/post/${VALORANT_POST_SLUG}`} replace />
  }

  const buildSlug = BUILD_SLUG_ALIASES[slug] ?? slug
  if (buildSlug !== slug) {
    return <Navigate to={`/post/${BUILD_PC_SLUG}`} replace />
  }

  if (slug === VALORANT_POST_SLUG) {
    return <PostPage />
  }

  if (slug === BUILD_PC_SLUG) {
    return <GamingPcBuildPost />
  }

  const meta = ARTICLES[slug]
  if (meta) {
    return <SimplePost meta={meta} />
  }

  return <Navigate to="/" replace />
}
