import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { User } from '@verstack/types'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  id: 1,
}

app.get('/user/me', (req: Request, res: Response) => {
  res.send(user)
})

export default app
