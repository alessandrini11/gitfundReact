import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import axios from '../utils/axios'
const SuscriberProfile = () => {
    const [suscriber, setSuscriber] = useState({})
    const {id} = useParams()
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    useEffect(() =>{
        axios
            .get('/suscribers/'+id)
            .then(data => {
                setSuscriber(data.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[id])
    let depots = []
    if(suscriber.deposits){
        suscriber.deposits.map(depot => {
            const dep = {...depot,createdAt: new Date(depot.createdAt.toString())}
            return depots.push(dep)
        })
    }
  return (
    <div>
        <Navbar></Navbar>
        <main className="md:max-w-4xl mx-auto">
            <div className="flex">
                <section className="h-screen w-1/3">
                    <div className="w-11/12 mx-auto text-center">
                        <div className="mt-5">
                            <div style={{paddingBottom: "100%"}} className="mb-5 relative h-0">
                                <img className="absolute inset-0 h-full w-full object-cover rounded-full" src="https://images.pexels.com/photos/4565508/pexels-photo-4565508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            </div>
                            <p>{suscriber.firstName+ ' '+ suscriber.lastName}</p>
                            <p>{suscriber.sex && suscriber.sex.name}</p>
                            <p>{suscriber.speciality && suscriber.speciality.name} </p>
                            <p>{suscriber.registrationNumber} </p>
                        </div>
                        
                    </div>
                </section>
                <section className="flex-1">
                    <div className="w-11/12 mx-auto">
                        <div className="my-5">
                            <div className="flex flex-col content-center w-2/4 h-20 p-2 bg-green-500 text-white shadow">
                                <p>Dépots <i className="fa fa-plus"></i></p>
                                <p className="mt-auto ml-auto">50.000 XAF</p>
                            </div>
                        </div>
                        <div className="">
                            <table className="w-full text-center bg-white">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th>Somme</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {suscriber.deposits && depots.map(deposit => (
                                        <tr className="bg-gray-100">
                                            {console.log(deposit)}
                                            <td>{deposit.amount} </td>
                                            <td> {deposit.createdAt.getDate()} {months[deposit.createdAt.getMonth()]} {deposit.createdAt.getFullYear()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
    </main>
    </div>
  )
}

export default SuscriberProfile