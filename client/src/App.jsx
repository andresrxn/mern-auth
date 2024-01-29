import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'
import { Profile } from './pages/Profile'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
