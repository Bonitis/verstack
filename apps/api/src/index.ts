import 'dotenv/config'
import app from './app'

const PORT = parseInt(process.env.PORT ?? '5001', 10)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
