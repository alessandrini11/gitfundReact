import React from 'react'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { sexe, speciality } from '../bd/fakeDb'
const SuscriberTable = (props) => {
    let depotSuscriber = []
    props.data.map(suscriber => {
        let totalDepots = 0
        suscriber.deposits.map(depot => totalDepots += depot.amount)
        let depsus = {...suscriber,totalDepots}
        return depotSuscriber.push(depsus)
    })
    const baseUrl = 'http://localhost:8000'
  return (
    <div className="overflow-x-auto">
        <div className="min-h-screen flex justify-center font-sans ">

            <div className="w-full">
                <div className="bg-white shadow-md rounded ">
                        {props.admin && 
                        <p className="flex justify-end">
                            <Link to="/admin/adherents/new" className="flex justify-center my-3 border-2 border-green-500 rounded-full w-14 hover:bg-green-500">
                                <Add className="text-green-500 hover:text-white"></Add>
                            </Link>
                        </p>
                        }
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-2 px-6 text-left">id</th>
                                <th className="py-2 px-6 text-left">Nom</th>
                                <th className="py-2 px-6 text-center">Prénom</th>
                                <th className="py-2 px-6 text-center">Sexe</th>
                                <th className="py-2 px-6 text-center">matricule</th>
                                <th className="py-2 px-6 text-center">Spécialité</th>
                                <th className="py-2 px-6 text-center">Dépots</th>
                                {props.admin && 
                                <th className="py-3 px-6 text-center">Action</th>
                                }
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {depotSuscriber.map((object, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                {index}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img alt="suscriber" className="w-6 h-6 rounded-full" src={baseUrl+'/'+object.picture} />
                                            </div>
                                            <span>{object.firstName}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center justify-center" >
                                            <div className="mr-2">
                                                {object.lastName}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                    {object.sex.name}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            {object.registrationNumber}
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            {object.speciality.name}
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            {object.totalDepots}
                                        </div>
                                    </td>
                                    {props.admin && 
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-5 mr-2 transform hover:scale-110">
                                                <a href="/adherents/1" className="  hover:text-purple-500 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="w-5 mr-2 transform hover:scale-110">
                                                <Link to={`/admin/adherents/edit/${object.id}`} className=" hover:text-purple-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </Link>
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
                                    }
                                </tr>
                            ))} 
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuscriberTable