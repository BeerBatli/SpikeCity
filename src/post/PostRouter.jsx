import { Navigate, useParams } from 'react-router-dom'
import PostPage from './PostPage'
import SimplePost from './SimplePost'
import { ARTICLES, VALORANT_POST_SLUG } from './postsMeta'

export default function PostRouter() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to={`/post/${VALORANT_POST_SLUG}`} replace />
  }

  if (slug === VALORANT_POST_SLUG) {
    return <PostPage />
  }

  const meta = ARTICLES[slug]
  if (meta) {
    return <SimplePost meta={meta} />
  }

  return <Navigate to="/" replace />
}
