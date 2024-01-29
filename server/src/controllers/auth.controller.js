import { hash } from 'bcrypt'
import { UserModel } from '../models/user.model.js'
import { appError } from '../utils/error.js'

export const SignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password || password.length < 8) {
      return next(appError(400, 'Missing fields'))
    }

    const existingUser = await UserModel.findOne({ username })

    if (existingUser !== null) {
      return next(appError(400, 'User already exists'))
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      username
    })

    return res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}
