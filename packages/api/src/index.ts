import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { User } from '@verstack/types'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5050

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

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
