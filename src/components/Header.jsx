import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'
function Header() {
  return (
    <header className=' border-b-4 bg-white border-white p-4'>
      <nav className='flex justify-center items-center md:justify-between md:mx-auto w-full md:max-w-6xl'>
        <Link to='/'>
          <img className='w-40' src={logo} alt='' />
        </Link>
        <div className='hidden md:block'>
          <Button
            name='Agregar Nuevo video'
            position='left'
            path='/nuevo-video'
            handle
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
