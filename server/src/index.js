import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import { env } from './config/validateEnv.js'
import { errorHandler } from './middleware/errorHandler.js'
import { AUTH_ROUTER } from './routes/auth.routes.js'
import { USER_ROUTER } from './routes/user.routes.js'

try {
  await mongoose.connect(env.MONGO_URI)
  console.log('Mongo Database connected')
} catch (error) {
  console.log(error)
}
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
  })
)

app.get('/', (req, res, next) => {
  res.json({ hello: 'bye' })
})

app.use('/api/v1/user', USER_ROUTER)
app.use('/api/v1/auth', AUTH_ROUTER)
app.use(errorHandler)
app.listen(env.PORT, () => console.log('Server on port 3000!'))
