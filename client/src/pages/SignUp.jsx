import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  const { formState, setError, handleSubmit, register } = useForm()
  const { errors } = formState

  const onSubmit = async data => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await res.json()

      if (!res.ok) {
        setError('root.serverError', {
          type: 'custom',
          message: 'Error: ' + resData.error
        })
        return
      }
    } catch (error) {
      console.log(error)
      setError('root.serverError', {
        type: 'custom',
        message: error.message
      })
    }
  }

  return (
    <main className='flex flex-col gap-4 items-center'>
      <h1 className='text-4xl text-center font-bold my-7 mb-2'>Sign Up</h1>
      <p className='text-lg mb-3'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='text-blue-600 hover:underline decoration-current'>
          Login
        </Link>{' '}
      </p>
      <div className='w-full max-w-lg mx-auto'>
        <button className='bg-red-600 rounded-md w-full  p-2 text-lg hover:bg-red-700 text-white font-semibold '>
          Continue with Google
        </button>
      </div>
      <hr className='h-0.5 my-3 w-full max-w-lg border-0 bg-gray-300' />
      <form
        className='bg-gray-200 p-6 rounded-md w-full max-w-lg gap-6 grid'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
          <input
            type='text'
            {...register('username', {
              required: 'Please add your username'
            })}
            placeholder='Username'
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
          <small className='text-sm text-red-500 font-medium mt-2 block'>
            {errors.username?.message}
          </small>
        </div>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Email'
            {...register('email', {
              required: 'Please add your email'
            })}
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
          <small className='text-sm text-red-500 font-medium mt-2 block'>
            {errors.email?.message}
          </small>
        </div>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Password'
            {...register('password', {
              required: 'Please add your password',
              minLength: {
                value: 8,
                message: 'Min 8 characters'
              }
            })}
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
          <small className='text-sm text-red-500 font-medium mt-2 block'>
            {errors.password?.message}
          </small>
        </div>
        <div>
          <small className='text-sm text-red-500 font-medium mt-2 block'>
            {errors.root?.serverError?.message}
          </small>
        </div>
        <div className='w-full'>
          <button className='bg-blue-600 disabled:opacity-50 rounded-md w-full p-2 text-lg hover:bg-blue-700 text-white font-semibold '>
            Sign Up
          </button>
        </div>
      </form>
    </main>
  )
}
