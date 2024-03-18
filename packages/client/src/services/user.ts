import { httpClient } from '@verstack/utils'
import { User } from '@verstack/types'

export const getUser = async (): Promise<User> => {
  const res = await httpClient({
    baseURL: 'http://localhost:5050',
    url: '/user/me',
  })
  return res.data
}
