import {Outlet} from 'react-router-dom'
import Navbar from './Navbar/NavBar'
import Footer from './Footer/footer'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
