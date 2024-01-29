import { hash } from 'bcrypt'
import { UserModel } from '../models/user.model.js'
import { appError } from '../utils/error.js'

export const SignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    console.log(req.body)
    console.log(password.length)
    if (!username || !email || !password) {
      return next(appError(400, 'Missing fields'))
    }

    const existingUser = await UserModel.findOne({ username })
    const existingEmail = await UserModel.findOne({ email })

    if (existingUser !== null || existingEmail !== null) {
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
