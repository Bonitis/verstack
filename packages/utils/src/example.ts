import { User } from 'types'

export const formatGreeting = (user: User) => `Hello, ${user.firstName}!`
