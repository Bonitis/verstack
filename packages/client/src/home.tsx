import useUser from './hooks/useUser'
import { formatGreeting } from '@verstack/utils'

const Home = () => {
  const { data } = useUser()
  const greeting = data ? formatGreeting(data) : 'loading...'
  return (
    <div className="p-2">
      <h3>{greeting}</h3>
    </div>
  )
}

export default Home
