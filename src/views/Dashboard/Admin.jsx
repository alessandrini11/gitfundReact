import { useState, useEffect} from 'react'
import { Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import { admin } from '../../bd/fakeDb'
const Admin = (props) => {
    const [adminData,setAdminData] = useState([])
    useEffect(() => {
        setAdminData(admin)
    },[])
    console.log(adminData)
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <div className="w-11/12 mx-auto">
            
            <div className="overflow-x-auto">
                <div className="min-h-screen flex justify-center font-sans ">

                    <div className="w-full">
                        <div className="bg-white shadow-md rounded ">
                                <p className="flex justify-end">
                                    <Link to="/admin/admin/new" className="flex justify-center my-3 border-2 border-green-500 rounded-full w-14 hover:bg-green-500">
                                        <Add className="text-green-500 hover:text-white"></Add>
                                    </Link>
                                </p>
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-2 px-6 text-left">id</th>
                                    <th className="py-2 px-6 text-left">Pseudo</th>
                                    <th className="py-2 px-6 text-center">role</th>
                                    <th className="py-3 px-6 text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                {adminData.map(admin => (
                                    <tr key={admin.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                {admin.id}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center justify-center" >
                                            <div className="mr-2">
                                                {admin.username}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        {admin.role}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-5 mr-2 transform hover:scale-110">
                                                <a href="{{ path('personne_show',{'id': personne.id}) }}" className="  hover:text-purple-500 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="w-5 mr-2 transform hover:scale-110">
                                                <a href="{{ path('personne_edit',{'id' : personne.id }) }}" className=" hover:text-purple-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className=" mr-2 transform hover:scale-110">
                                                <a href="n" className="hover:text-purple-500">
                                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin