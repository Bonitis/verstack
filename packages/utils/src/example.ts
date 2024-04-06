import { User } from '@verstack/types'

export const formatGreeting = (user: User) => `Hello, ${user.firstName}!`
