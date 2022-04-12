import React from 'react'
import Navbar from '../components/navbar/Navbar'
const SuscriberProfile = () => {
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
                            <p>Schuame Alexandre Lionel</p>
                            <p>Masculin</p>
                            <p>GL</p>
                            <p>20G00624</p>
                            <p>Président</p>
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
                                    <tr className="bg-gray-100">
                                        <td>2000</td>
                                        <td> 13 fev 2021</td>
                                    </tr>
                                    <tr>
                                        <td>2000</td>
                                        <td> 13 fev 2021</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td>2000</td>
                                        <td> 13 fev 2021</td>
                                    </tr>
                                    <tr>
                                        <td>2000</td>
                                        <td> 13 fev 2021</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td>2000</td>
                                        <td> 13 fev 2021</td>
                                    </tr>
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