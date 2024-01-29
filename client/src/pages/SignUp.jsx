import { Link } from 'react-router-dom'
export const SignUp = () => {
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
      <hr class='h-0.5 my-3 w-full max-w-lg border-0 bg-gray-300' />
      <form className='bg-gray-200 p-6 rounded-md w-full max-w-lg gap-6 grid'>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Username'
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
        </div>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Email'
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
        </div>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Password'
            className='bg-white w-full text-lg p-2 rounded-md border-0 shadow-lg focus:ring-2 outline-none focus:ring-offset-blue-500 ring-offset-1'
          />
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
