import { Router } from 'express'
import { SignUp } from '../controllers/auth.controller.js'

export const AUTH_ROUTER = Router()

AUTH_ROUTER.post('/signup', SignUp)
