import { Router } from 'express'
import { Test } from '../controllers/user.controller.js'

export const USER_ROUTER = Router()

USER_ROUTER.get('/', Test)
