import {NavLink} from 'react-router-dom'
import {ShoppingCart} from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-100 px-6 py-4">
      <div className='flex justify-center pl-3'>
        <ShoppingCart className='w-8 h-8 text-green-600'/>
        <h1 className="text-3xl font-bold text-black">Fresh cart</h1>
      </div>

      <div className="flex gap-6 pr-4">
      <NavLink 
        to={"/"} 
        className="text-gray-800 hover:text-blue-400 transition">
        Login
      </NavLink>

        <NavLink 
          to={"/RegisterPage"}
          className="text-gray-800 hover:text-blue-400 transition">
          Register
        </NavLink>
      </div>

    </nav>


  )
}

