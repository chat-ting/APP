import { PageLayout } from 'components/layouts/page-layout'
import { Link } from 'react-router'

export function Home() {
  return (
    <PageLayout>
      <Link to="/chat/3">go to chatroom</Link>
    </PageLayout>
  )
}
