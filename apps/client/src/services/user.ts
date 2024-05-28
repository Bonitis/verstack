import { httpClient } from '@verstack/utils'
import { User } from '@verstack/types'

export const getUser = async (): Promise<User> => {
  const res = await httpClient({
    baseURL: process.env.API_URL,
    url: '/user/me',
  })
  return res.data
}
