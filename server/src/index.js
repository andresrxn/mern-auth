import express from 'express'
import mongoose from 'mongoose'
import { env } from './config/validateEnv'

try {
  await mongoose.connect(env.MONGO_URI)
} catch (error) {
  console.log(error)
}
const app = express()

app.listen(env.PORT, () => console.log('Server on port 3000!'))
