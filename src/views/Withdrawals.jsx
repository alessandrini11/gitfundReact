import { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import WithdrawalTable from '../components/WithdrawalTable'
import axios from '../utils/axios'
import Footer from '../components/Footer'

const Withdrawals = () => {
  const [depensesData, setDepensesData] = useState([])
  useEffect(() =>{
    axios
      .get('/withdrawals')
      .then(data => {
        
        setDepensesData(data.data.withdrawals)
      })
      .catch(err => console.log(err))
  },[])
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto md:Dmax-w-4xl min-h-64">
            <div className="mt-8">
                <h1 className="ml-5 md:ml-0 text-3xl font-sans">Tous les retraits</h1>
                <WithdrawalTable data={depensesData}/>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Withdrawals