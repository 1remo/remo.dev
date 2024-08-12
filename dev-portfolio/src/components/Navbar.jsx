import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg items-center justify-center flex font-bold">
            {/* <p className="blue-gradient_text"> 🏠 </p>  */}
            <p> ⛺ </p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive? 'text-blue-500' : 'text-black'}>
                📝
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive? 'text-blue-500' : 'text-black'}>
                📁
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar