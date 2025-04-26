import { Link } from 'react-router'

export function Home() {
  return (
    <>
      home
      <br />
      <Link to="/chat/3">go to chatroom 3</Link>
    </>
  )
}
