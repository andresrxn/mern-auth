import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='bg-slate-200 flex justify-center items-center gap-4'>
      <div className='max-w-4xl flex justify-between w-full items-center gap-4 p-3 text-lg'>
        <div className='font-bold'>AuthApp</div>
        <nav>
          <ul className='flex gap-6'>
            <li>
              <NavLink className='[&.active]:font-semibold' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='[&.active]:font-semibold' to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='[&.active]:font-semibold' to='/signup'>
                SignUp
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
