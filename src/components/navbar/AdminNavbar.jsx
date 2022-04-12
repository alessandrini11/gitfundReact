import { useState } from 'react'
import { PowerSettingsNew, KeyboardArrowDown } from "@material-ui/icons"
import { Link } from 'react-router-dom'
const AdminNavbar = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = (e) => {
        setShowMenu(prevState => !prevState)
        console.log(showMenu)
    }
  return (
    <header className="bg-indigo-900 ">
        <nav className="w-11/12 mx-auto md:max-w-4xl">
            <div className=" flex items-center h-12">
                <Link to="/" className="text-2xl font-bold text-white flex-1">GIT FUND</Link>
                <ul className="hidden justify-between text-white w-1/3 md:flex flex-[3]">
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/depots">Dépots</Link></li>
                    <li><Link to="/admin/retraits">Retraits</Link></li>
                    <li><Link to="/admin/adherents">Adhérents</Link></li>
                    <li><Link to="/admin/admin">Admin</Link></li>
                </ul>
                <div className="relative flex justify-end flex-1">
                    <div className="text-white flex items-center">
                        <Link to="/" className=" mr-10">Home</Link>
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
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/depots">Dépots</Link></li>
                <li><Link to="/admin/retraits">Retraits</Link></li>
                <li><Link to="/admin/adherents">Adhérents</Link></li>
                <li><Link to="/admin/admin">Admin</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default AdminNavbar