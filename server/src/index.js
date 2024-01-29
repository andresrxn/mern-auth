import express from 'express'
import mongoose from 'mongoose'
import { env } from './config/validateEnv.js'
import { USER_ROUTER } from './routes/user.routes.js'

try {
  await mongoose.connect(env.MONGO_URI)
} catch (error) {
  console.log(error)
}
const app = express()

app.get('/', (req, res, next) => {
  res.json({ hello: 'bye' })
})

app.use('/api/v1/user', USER_ROUTER)

app.listen(env.PORT, () => console.log('Server on port 3000!'))
