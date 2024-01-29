import { config } from 'dotenv'
import { cleanEnv, port, str } from 'envalid'
config()

export const env = cleanEnv(process.env, {
  MONGO_URI: str(),
  PORT: port()
})
