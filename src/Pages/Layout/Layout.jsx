import './Layout.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.svg'
function Layout() {
    return (
        <>
            <header>
                <Link to="/Galleria">
                    <img src={logo}></img>
                </Link>
                <Link to='#' className='texthead'> Start Slideshow</Link>

            </header>

            <Outlet></Outlet>

        </>
    )
}
export default Layout