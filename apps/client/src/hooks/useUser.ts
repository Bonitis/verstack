import useSWR from 'swr'
import { getUser } from '../services/user'

const useUser = () => {
  return useSWR('/user/me', getUser)
}

export default useUser
