import { hash } from 'bcrypt'
import { UserModel } from '../models/user.model.js'

export const SignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password || password.length < 8) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const existingUser = await UserModel.findOne({ username })

    if (existingUser !== null) {
      return res.status(409).json({ error: 'User already exists' })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      username
    })

    return res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Cannot Sign up' })
  }
}
