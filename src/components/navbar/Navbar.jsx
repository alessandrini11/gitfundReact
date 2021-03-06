import { useState } from 'react'
import { PowerSettingsNew, KeyboardArrowDown } from "@material-ui/icons"
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = (e) => {
        setShowMenu(prevState => !prevState)
        console.log(showMenu)
    }
  return (
    <header className="bg-indigo-900 ">
        <nav className="w-11/12 mx-auto md:max-w-4xl">
            <div className=" flex justify-between items-center h-12">
                <Link to="/" className="text-2xl font-bold text-white">GIT FUND</Link>
                <ul className="hidden justify-between text-white w-1/3 md:flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/depots">Dépots</Link></li>
                    <li><Link to="/retraits">Retraits</Link></li>
                    <li><Link to="/adherents">Adhérents</Link></li>
                </ul>
                <div className="relative">
                    <div className="text-white flex items-center">
                        <Link to="/admin/dashboard" className=" mr-10">Dashboard</Link>
                        <span className="md:hidden">
                            <PowerSettingsNew/>
                        </span>
                        <button onClick={handleClick} className="hidden md:block ">
                            <KeyboardArrowDown className="text-2xl"></KeyboardArrowDown>
                        </button>
                    </div>
                    {
                        showMenu &&
                        <div id="dropdown" className=" bg-indigo-900 text-white p-1 absolute left-20 top-12 ">
                            <ul className="p-1">
                                <li>
                                    <a href="">Deconnexion</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <ul className="flex text-white justify-between pb-3 md:hidden">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/depots">Dépots</Link></li>
                <li><Link to="/retraits">Retraits</Link></li>
                <li><Link to="/adherents">Adhérents</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar