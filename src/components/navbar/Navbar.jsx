import { useState } from 'react'
import { PowerSettingsNew, KeyboardArrowDown } from "@material-ui/icons"
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
                <a href="" className="text-2xl font-bold text-white">GIT FUND</a>
                <ul className="hidden justify-between text-white w-1/3 md:flex">
                    <li><a href="../pages/home.html">Home</a></li>
                    <li><a href="../pages/depots.html">Dépots</a></li>
                    <li><a href="/pages/retrait.html">Retraits</a></li>
                    <li><a href="../pages/adherents.html">Adhérents</a></li>
                </ul>
                <div className="relative">
                    <div className="text-white flex items-center">
                        <a href="dashboard/dashboard.html" className=" mr-10">Dashboard</a>
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
                <li><a href="../pages/home.html">Home</a></li>
                <li><a href="../pages/depots.html">Dépots</a></li>
                <li><a href="/pages/retrait.html">Retraits</a></li>
                <li><a href="../pages/adherents.html">Adhérents</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar